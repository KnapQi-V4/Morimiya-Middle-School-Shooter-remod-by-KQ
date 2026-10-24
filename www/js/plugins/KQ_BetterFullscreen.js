//=============================================================================
// KQ_BetterFullscreen.js
//=============================================================================
/*:
 * @plugindesc [v1.0] Fixes RPG Maker MV fullscreen & black bars using native NW.js API with F4/F11 hotkeys and dual-language options.
 * @author KnapQi & Antigravity
 *
 * @help
 * ============================================================================
 * Features:
 * ============================================================================
 * 1. Native NW.js Fullscreen: Toggles true borderless fullscreen without
 *    ugly letterboxing / black bar glitches.
 * 2. Hotkeys: Supports both F4 and F11 to toggle fullscreen seamlessly.
 * 3. Options Menu: Adds "Fullscreen" / "Layar Penuh" option into Window_Options.
 * 4. Dual-Language Support: Automatically switches between EN ("ON/OFF") and
 *    ID ("Aktif/Nonaktif") according to active language.
 * 5. Persistent State: Saves fullscreen preference to config.rpgsave.
 * ============================================================================
 */

(function() {
    "use strict";

    // Helper: Safely resolve NW.js window object across environments
    function getNwWindow() {
        if (typeof nw !== 'undefined' && nw && nw.Window) {
            try { return nw.Window.get(); } catch (e) {}
        }
        if (typeof require === 'function') {
            try { return require('nw.gui').Window.get(); } catch (e) {}
        }
        return null;
    }

    // Helper: Detect whether the window is currently in fullscreen
    function isFullscreenActive() {
        var win = getNwWindow();
        if (win && typeof win.isFullscreen === 'boolean') {
            return win.isFullscreen;
        }
        if (Graphics._isFullScreen) {
            return Graphics._isFullScreen();
        }
        return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement);
    }

    // Core: Toggle Fullscreen with auto-resize and stretch fallback
    function toggleFullscreen() {
        var win = getNwWindow();
        if (win) {
            win.toggleFullscreen();
        } else {
            // HTML5 Fallback
            if (Graphics._isFullScreen && Graphics._isFullScreen()) {
                Graphics._cancelFullScreen();
            } else if (Graphics._requestFullScreen) {
                Graphics._requestFullScreen();
            }
        }

        // Always enable stretch mode so canvas expands to screen bounds
        Graphics._stretchEnabled = true;

        // Multiple delayed triggers to allow NW.js transition to finish
        var delays = [50, 150, 300, 500];
        delays.forEach(function(ms) {
            setTimeout(function() {
                if (Graphics._onWindowResize) {
                    Graphics._onWindowResize();
                }
            }, ms);
        });

        // Sync config state
        setTimeout(function() {
            if (typeof ConfigManager !== 'undefined') {
                ConfigManager.fullscreen = isFullscreenActive();
                ConfigManager.save();
            }
        }, 350);
    }

    // Expose global helper
    window.KQ_ToggleFullscreen = toggleFullscreen;
    window.KQ_IsFullscreen = isFullscreenActive;

    //-------------------------------------------------------------------------
    // 1. Hotkey integration (F4 & F11) + Graphics._switchFullScreen override
    //-------------------------------------------------------------------------
    var _Graphics_onKeyDown = Graphics._onKeyDown;
    Graphics._onKeyDown = function(event) {
        if (!event.ctrlKey && !event.altKey) {
            // Key 115 = F4, Key 122 = F11
            if (event.keyCode === 115 || event.keyCode === 122) {
                event.preventDefault();
                toggleFullscreen();
                return;
            }
        }
        _Graphics_onKeyDown.call(this, event);
    };

    // Override engine full screen switch
    Graphics._switchFullScreen = function() {
        toggleFullscreen();
    };

    // Attach NW.js window event listeners for state synchronization
    var nwWin = getNwWindow();
    if (nwWin && nwWin.on) {
        nwWin.on('enter-fullscreen', function() {
            Graphics._stretchEnabled = true;
            if (Graphics._onWindowResize) Graphics._onWindowResize();
            if (typeof ConfigManager !== 'undefined') {
                ConfigManager.fullscreen = true;
                ConfigManager.save();
            }
        });
        nwWin.on('restore', function() {
            Graphics._stretchEnabled = true;
            if (Graphics._onWindowResize) Graphics._onWindowResize();
            if (typeof ConfigManager !== 'undefined') {
                ConfigManager.fullscreen = false;
                ConfigManager.save();
            }
        });
        nwWin.on('leave-fullscreen', function() {
            Graphics._stretchEnabled = true;
            if (Graphics._onWindowResize) Graphics._onWindowResize();
            if (typeof ConfigManager !== 'undefined') {
                ConfigManager.fullscreen = false;
                ConfigManager.save();
            }
        });
    }

    //-------------------------------------------------------------------------
    // 2. ConfigManager Integration
    //-------------------------------------------------------------------------
    ConfigManager.fullscreen = false;

    var _ConfigManager_makeData = ConfigManager.makeData;
    ConfigManager.makeData = function() {
        var config = _ConfigManager_makeData.call(this);
        config.fullscreen = (typeof this.fullscreen === 'boolean') ? this.fullscreen : isFullscreenActive();
        return config;
    };

    var _ConfigManager_applyData = ConfigManager.applyData;
    ConfigManager.applyData = function(config) {
        _ConfigManager_applyData.call(this, config);
        this.fullscreen = this.readFlag(config, 'fullscreen');
    };

    // Auto-enter fullscreen on boot if saved setting was ON
    var _Scene_Boot_start = Scene_Boot.prototype.start;
    Scene_Boot.prototype.start = function() {
        _Scene_Boot_start.call(this);
        if (ConfigManager.fullscreen && !isFullscreenActive()) {
            setTimeout(function() {
                if (!isFullscreenActive()) {
                    toggleFullscreen();
                }
            }, 100);
        }
    };

    //-------------------------------------------------------------------------
    // 3. Window_Options Integration (Dual Language EN / ID)
    //-------------------------------------------------------------------------
    var _Window_Options_makeCommandList = Window_Options.prototype.makeCommandList;
    Window_Options.prototype.makeCommandList = function() {
        _Window_Options_makeCommandList.call(this);
        var isId = (typeof ConfigManager !== 'undefined' && ConfigManager.language === 'id');
        this.addCommand(isId ? "Layar Penuh" : "Fullscreen", 'betterFullscreen');
    };

    var _Window_Options_statusText = Window_Options.prototype.statusText;
    Window_Options.prototype.statusText = function(index) {
        var symbol = this.commandSymbol(index);
        var isId = (typeof ConfigManager !== 'undefined' && ConfigManager.language === 'id');
        if (symbol === 'betterFullscreen') {
            var active = isFullscreenActive();
            return active ? (isId ? 'AKTIF' : 'ON') : (isId ? 'NONAKTIF' : 'OFF');
        }
        return _Window_Options_statusText.call(this, index);
    };

    var _Window_Options_processOk = Window_Options.prototype.processOk;
    Window_Options.prototype.processOk = function() {
        var symbol = this.commandSymbol(this.index());
        if (symbol === 'betterFullscreen') {
            SoundManager.playCursor();
            toggleFullscreen();
            var self = this;
            setTimeout(function() {
                self.redrawItem(self.index());
            }, 100);
            return;
        }
        _Window_Options_processOk.call(this);
    };

    var _Window_Options_cursorRight = Window_Options.prototype.cursorRight;
    Window_Options.prototype.cursorRight = function(wrap) {
        var symbol = this.commandSymbol(this.index());
        if (symbol === 'betterFullscreen') {
            this.processOk();
            return;
        }
        _Window_Options_cursorRight.call(this, wrap);
    };

    var _Window_Options_cursorLeft = Window_Options.prototype.cursorLeft;
    Window_Options.prototype.cursorLeft = function(wrap) {
        var symbol = this.commandSymbol(this.index());
        if (symbol === 'betterFullscreen') {
            this.processOk();
            return;
        }
        _Window_Options_cursorLeft.call(this, wrap);
    };

})();

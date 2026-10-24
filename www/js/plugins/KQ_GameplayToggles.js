//=============================================================================
// KQ_GameplayToggles.js
//=============================================================================
/*:
 * @plugindesc [v1.0] Modern shooter QoL settings: Toggle Sprint (Hold/Toggle) & Aim Mode (Hold E / Toggle E) with dual-language support.
 * @author KnapQi & Antigravity
 *
 * @help
 * ============================================================================
 * Features:
 * ============================================================================
 * 1. Toggle Sprint:
 *    - "Hold" (Default): Hold Shift to sprint.
 *    - "Toggle": Press Shift once to sprint, press again to stop.
 * 2. Toggle Aim / Aim Mode:
 *    - "Hold" (Default): Hold E to enter Aim Mode (ADS); release E to exit.
 *    - "Toggle": Press E once to enter Aim Mode, press E again to exit.
 * 3. Dual-Language Options Menu:
 *    - EN: "Sprint Mode: Hold / Toggle", "Aim Mode: Hold / Toggle"
 *    - ID: "Mode Sprint: Tahan / Ganti", "Mode Bidik: Tahan / Ganti"
 * 4. ConfigManager Integration:
 *    - Settings automatically persist to config.rpgsave.
 * ============================================================================
 */

(function() {
    "use strict";

    // Helper: Detect whether Indonesian locale is active
    function isId() {
        return (typeof ConfigManager !== 'undefined' && ConfigManager.language === 'id');
    }

    //-------------------------------------------------------------------------
    // 1. ConfigManager Integration
    //-------------------------------------------------------------------------
    ConfigManager.toggleSprint = false; // false = Hold Shift (Default), true = Toggle
    ConfigManager.toggleAim = false;    // false = Hold E to Aim (Default), true = Toggle

    var _ConfigManager_makeData = ConfigManager.makeData;
    ConfigManager.makeData = function() {
        var config = _ConfigManager_makeData.call(this);
        config.toggleSprint = this.toggleSprint;
        config.toggleAim = this.toggleAim;
        return config;
    };

    var _ConfigManager_applyData = ConfigManager.applyData;
    ConfigManager.applyData = function(config) {
        _ConfigManager_applyData.call(this, config);
        this.toggleSprint = this.readFlag(config, 'toggleSprint');
        this.toggleAim = this.readFlag(config, 'toggleAim');
    };

    //-------------------------------------------------------------------------
    // 2. Sprint Mode: Hold vs Toggle
    //-------------------------------------------------------------------------
    var _Game_Player_initMembers = Game_Player.prototype.initMembers;
    Game_Player.prototype.initMembers = function() {
        _Game_Player_initMembers.call(this);
        this._sprintToggled = false;
    };

    // Ensure updateDashes is defined and aliased as specified by RMMV mod rules
    if (!Game_Player.prototype.updateDashes) {
        Game_Player.prototype.updateDashes = Game_Player.prototype.updateDashing;
    }

    var _Game_Player_updateDashes = Game_Player.prototype.updateDashes;
    Game_Player.prototype.updateDashes = function() {
        if (ConfigManager.toggleSprint) {
            if (Input.isTriggered('shift') || Input.isTriggered('cancel')) {
                this._sprintToggled = !this._sprintToggled;
            }
        } else {
            this._sprintToggled = false;
        }

        if (_Game_Player_updateDashes && _Game_Player_updateDashes !== Game_Player.prototype.updateDashing) {
            _Game_Player_updateDashes.call(this);
        } else {
            this.updateDashing();
        }
    };

    var _Game_Player_updateDashing = Game_Player.prototype.updateDashing;
    Game_Player.prototype.updateDashing = function() {
        if (ConfigManager.toggleSprint) {
            if (Input.isTriggered('shift') || Input.isTriggered('cancel')) {
                this._sprintToggled = !this._sprintToggled;
            }
        } else {
            this._sprintToggled = false;
        }
        _Game_Player_updateDashing.call(this);
    };

    var _Game_Player_isDashButtonPressed = Game_Player.prototype.isDashButtonPressed;
    Game_Player.prototype.isDashButtonPressed = function() {
        if (ConfigManager.toggleSprint) {
            return !!this._sprintToggled;
        }
        return _Game_Player_isDashButtonPressed.call(this);
    };

    //-------------------------------------------------------------------------
    // 3. Aim Mode (ADS): Hold E vs Toggle E
    //-------------------------------------------------------------------------
    // In "Hold E" mode (!ConfigManager.toggleAim), suppress the default
    // Input.isTriggered('ads') toggle in Shooting.js:5226 so it doesn't conflict.
    var _Input_isTriggered = Input.isTriggered;
    Input.isTriggered = function(keyName) {
        if (keyName === 'ads' && typeof ConfigManager !== 'undefined' && !ConfigManager.toggleAim) {
            return false;
        }
        return _Input_isTriggered.call(this, keyName);
    };

    // Hook Scene_Map.prototype.updateScene to manage Hold E state
    var _Scene_Map_updateScene = Scene_Map.prototype.updateScene;
    Scene_Map.prototype.updateScene = function() {
        _Scene_Map_updateScene.call(this);

        // Hold-to-aim logic
        if (typeof ConfigManager !== 'undefined' && !ConfigManager.toggleAim) {
            if ($gamePlayer && !SceneManager.isSceneChanging() && ($gameSwitches.value(2) || $gameSwitches.value(25))) {
                // Ensure character is eligible to aim (not Yuumi, not wielding melee, not reloading/throwing)
                if (!$gamePlayer.isYuumi() && !$gameSwitches.value(61) && !$gameSwitches.value(3) && 
                    (!$gameVariables || $gameVariables._data[70] !== 1)) {
                    var isAiming = $gameSwitches.value(20);
                    var isPressed = Input.isPressed('ads');
                    if (isPressed && !isAiming) {
                        $gamePlayer.ads();
                    } else if (!isPressed && isAiming) {
                        $gamePlayer.ads();
                    }
                }
            }
        }
    };

    //-------------------------------------------------------------------------
    // 4. Window_Options Integration (Dual Language EN / ID)
    //-------------------------------------------------------------------------
    var _Window_Options_makeCommandList = Window_Options.prototype.makeCommandList;
    Window_Options.prototype.makeCommandList = function() {
        _Window_Options_makeCommandList.call(this);
        var id = isId();
        this.addCommand(id ? "Mode Sprint" : "Sprint Mode", 'toggleSprint');
        this.addCommand(id ? "Mode Bidik" : "Aim Mode", 'toggleAim');
    };

    var _Window_Options_statusText = Window_Options.prototype.statusText;
    Window_Options.prototype.statusText = function(index) {
        var symbol = this.commandSymbol(index);
        var id = isId();
        if (symbol === 'toggleSprint') {
            var val = this.getConfigValue(symbol);
            return val ? (id ? 'Ganti' : 'Toggle') : (id ? 'Tahan' : 'Hold');
        }
        if (symbol === 'toggleAim') {
            var val = this.getConfigValue(symbol);
            return val ? (id ? 'Ganti' : 'Toggle') : (id ? 'Tahan' : 'Hold');
        }
        return _Window_Options_statusText.call(this, index);
    };

    var _Window_Options_processOk = Window_Options.prototype.processOk;
    Window_Options.prototype.processOk = function() {
        var symbol = this.commandSymbol(this.index());
        if (symbol === 'toggleSprint' || symbol === 'toggleAim') {
            var val = !this.getConfigValue(symbol);
            this.setConfigValue(symbol, val);
            SoundManager.playCursor();
            ConfigManager.save();
            this.redrawItem(this.index());
            return;
        }
        _Window_Options_processOk.call(this);
    };

    var _Window_Options_cursorRight = Window_Options.prototype.cursorRight;
    Window_Options.prototype.cursorRight = function(wrap) {
        var symbol = this.commandSymbol(this.index());
        if (symbol === 'toggleSprint' || symbol === 'toggleAim') {
            this.processOk();
            return;
        }
        _Window_Options_cursorRight.call(this, wrap);
    };

    var _Window_Options_cursorLeft = Window_Options.prototype.cursorLeft;
    Window_Options.prototype.cursorLeft = function(wrap) {
        var symbol = this.commandSymbol(this.index());
        if (symbol === 'toggleSprint' || symbol === 'toggleAim') {
            this.processOk();
            return;
        }
        _Window_Options_cursorLeft.call(this, wrap);
    };

})();

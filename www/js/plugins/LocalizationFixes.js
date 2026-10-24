//=============================================================================
// LocalizationFixes.js
// 1) Replaces Russian text baked into image assets with EN/ID overlays.
// 2) Prevents long (Indonesian) text from being cut off: word-wrap,
//    dynamic window sizing, screen clamping and font-size fallback.
// Must be loaded AFTER Shooting.js and LanguageManager.js.
//=============================================================================
/*:
 * @plugindesc Russian image-text overlays (EN/ID) + long-text wrap/clamp fixes
 * @author Morityu Project
 */
(function() {
    'use strict';

    var isId = function() { return ConfigManager.language === 'id'; };

    //-------------------------------------------------------------------------
    // 0. Dictionary additions (English key -> Indonesian)
    //-------------------------------------------------------------------------
    var ID_KEYS = {
        // HUD (pictures/Status)
        "Until Police Arrive": "Polisi Tiba Dalam",
        "Killed": "Tewas",
        "Critically Injured": "Luka Parah",
        "Injured": "Luka",
        // Result sheet (pictures/score01, score01b, score02)
        "Morimiya Municipal Middle School": "SMP Negeri Morimiya",
        "Nishi-Okawa City": "Kota Okawa Barat",
        "REPORT CARD": "RAPOR",
        "YEAR": "THN",
        "CLASS": "KELAS",
        "NAME": "NAMA",
        "DIPLOMA": "IJAZAH",
        "Died in Hospital": "Meninggal di RS",
        "Shots": "Tembakan",
        "Hits": "Kena",
        "SP Earned": "SP Diperoleh",
        "Female Student": "Siswi",
        "Male Student": "Siswa",
        "Female Teacher": "Guru Wanita",
        "Male Teacher": "Guru Pria",
        "Score": "Skor",
        // Records screen (pictures/total_score) + title
        "RECORDS": "REKOR",
        "Kill Record\nNormal Mode": "Rekor Korban\nMode Normal",
        "Kill Record\nHard Mode": "Rekor Korban\nMode Sulit",
        "Play Time": "Waktu Bermain",
        "Total Kills": "Total Korban",
        "Total Shots": "Total Tembakan",
        "Shooting Practice": "Latihan Menembak",
        "Achievements": "Prestasi",
        "Morimiya Middle School Shooting": "Penembakan SMP Morimiya",
        // News (pictures/News, News01)
        "Girl: \"I want to kill someone\"": "Siswi: \"Aku ingin membunuh seseorang\"",
        "Another school shooting": "Penembakan sekolah terjadi lagi",
        "2 dead, 8 injured": "2 tewas, 8 luka-luka",
        "Yamazakai High School Shooting:": "Penembakan SMA Yamazakai:",
        "30 dead": "30 tewas",
        "Image posted by the shooter on social media": "Foto yang diunggah pelaku di media sosial",
        // Police CGs
        "POLICE": "POLISI",
        // Tips pictures
        "Yumi Tojo is a knife-wielding character. When her stamina is full, pressing Q performs a powerful lunge.":
            "Yumi Tojo adalah karakter pengguna pisau. Saat staminanya penuh, tekan Q untuk melancarkan terjangan dahsyat.",
        "Shotguns increase hit chance by 25%, but deal less damage at long range.":
            "Shotgun menaikkan peluang kena 25%, tapi kerusakannya turun pada jarak jauh.",
        "Great job!": "Kerja bagus!",
        "You achieved impressive results. As a reward, you receive the A180 submachine gun.":
            "Kamu meraih hasil yang luar biasa. Sebagai hadiah, kamu mendapat submachine gun A180.",
        "You achieved impressive results. As a reward, you receive the AS3M rifle.":
            "Kamu meraih hasil yang luar biasa. Sebagai hadiah, kamu mendapat senapan AS3M.",
        "You achieved impressive results. As a reward, you receive the BM15 Mod rifle.":
            "Kamu meraih hasil yang luar biasa. Sebagai hadiah, kamu mendapat senapan BM15 Mod.",
        "You achieved impressive results. As a reward, you receive the CZ11 rifle.":
            "Kamu meraih hasil yang luar biasa. Sebagai hadiah, kamu mendapat senapan CZ11.",
        "You achieved impressive results. As a reward, you receive the S12 Mod shotgun.":
            "Kamu meraih hasil yang luar biasa. Sebagai hadiah, kamu mendapat shotgun S12 Mod.",
        // Content warning (parallaxes/warning)
        "WARNING": "PERINGATAN",
        "This game depicts a school shooting, violence, profanity, blood and suicide.":
            "Game ini menampilkan penembakan di sekolah, kekerasan, kata-kata kasar, darah, dan bunuh diri.",
        "Continue only if you understand that what happens on screen is fiction and you are ready to treat it as a game.":
            "Lanjutkan hanya jika kamu memahami bahwa semua yang terjadi di layar adalah fiksi dan kamu siap menganggapnya sebagai permainan.",
        // Notebook pages (pictures/02-06)
        "I was tormented by EVERYONE": "Aku disiksa oleh SEMUA ORANG",
        "but today": "tapi hari ini",
        "everyone will be tormented by ME": "semua orang akan disiksa olehKU",
        "Not one of my prayers": "Tak satu pun doaku",
        "was ever heard": "pernah didengar",
        "Let me ask for just one thing": "Izinkan aku meminta satu hal saja",
        "NEVER GIVE BIRTH TO ME AGAIN": "JANGAN PERNAH LAHIRKAN AKU LAGI",
        "In a world without": "Di dunia tanpa",
        "GOD or SOUL": "TUHAN dan JIWA",
        "countless creatures multiply": "makhluk tak terhitung berkembang biak",
        "whose hearts are empty": "yang hatinya kosong",
        "Thousands, millions, billions of them": "Ribuan, jutaan, miliaran jumlahnya",
        "That is what makes our reality so": "Itulah yang membuat kenyataan kita begitu",
        "horrible and meaningless": "mengerikan dan tak bermakna",
        "People choose to die alone": "Orang-orang memilih mati sendirian",
        "but we must accept one death": "tapi kita harus menerima satu kematian",
        "all together": "bersama-sama",
        "Aim well before you shoot": "Bidik baik-baik sebelum menembak",
        "Crush all resistance": "Hancurkan semua perlawanan",
        "Block every escape route": "Tutup semua jalan kabur",
        "Don't forget to finish off the wounded": "Jangan lupa habisi yang terluka"
    };
    for (var k in ID_KEYS) window.I18N_ID[k] = ID_KEYS[k];

    //-------------------------------------------------------------------------
    // 0b. Avoid double translation: strings that are already Indonesian
    //     (dictionary values) are passed through untouched, so window.t()
    //     no longer emits false "Missing ID translation" warnings for them.
    //-------------------------------------------------------------------------
    var _idValues = null;
    var buildIdValues = function() {
        _idValues = {};
        for (var key in window.I18N_ID) _idValues[String(window.I18N_ID[key]).trim()] = true;
    };
    var _t = window.t;
    window.t = function(text) {
        if (typeof text !== 'string' || ConfigManager.language !== 'id') return _t(text);
        if (!_idValues) buildIdValues();
        if (_idValues[text.trim()] && !window.I18N_ID.hasOwnProperty(text.trim())) return text;
        return _t(text);
    };

    //-------------------------------------------------------------------------
    // 1. Shared text-fitting helpers
    //-------------------------------------------------------------------------
    // Greedy word wrap. `measure(str)` returns pixel width. Existing "\n" kept.
    var wrapWords = function(text, maxWidth, measure) {
        var out = [];
        String(text).split('\n').forEach(function(para) {
            var words = para.split(' '), line = '';
            for (var i = 0; i < words.length; i++) {
                var test = line ? line + ' ' + words[i] : words[i];
                if (line && measure(test) > maxWidth) { out.push(line); line = words[i]; }
                else line = test;
            }
            out.push(line);
        });
        return out;
    };

    // Draws text into a rect on a Bitmap: wraps, then shrinks the font until
    // every line fits both width and height (font-size fallback, min 10px).
    var drawFitted = function(bmp, text, rect, opt) {
        var size = opt.size || 22, lines, lh;
        var oldSize = bmp.fontSize, oldColor = bmp.textColor;
        var oldOut = bmp.outlineColor, oldOW = bmp.outlineWidth, oldItalic = bmp.fontItalic;
        bmp.textColor = opt.color || '#ffffff';
        bmp.outlineColor = opt.outline || 'rgba(0,0,0,0)';
        bmp.outlineWidth = opt.outline ? (opt.outlineWidth || 3) : 0;
        bmp.fontItalic = !!opt.italic;
        var measure = function(s) { return bmp.measureTextWidth(s); };
        do {
            bmp.fontSize = size;
            lines = opt.nowrap ? String(text).split('\n') : wrapWords(text, rect.w, measure);
            lh = Math.round(size * 1.25);
            var widest = Math.max.apply(null, lines.map(measure));
            if (lines.length * lh <= rect.h && widest <= rect.w) break;
            size--;
        } while (size > 10);
        var y = rect.y + Math.max(0, (rect.h - lines.length * lh) / 2);
        window._lfRaw = true; // text is already translated
        lines.forEach(function(line, i) {
            bmp.drawText(line, rect.x, y + i * lh, rect.w, lh, opt.align || 'left');
        });
        window._lfRaw = false;
        bmp.fontSize = oldSize; bmp.textColor = oldColor;
        bmp.outlineColor = oldOut; bmp.outlineWidth = oldOW; bmp.fontItalic = oldItalic;
    };
    var _t2 = window.t;
    window.t = function(text) { return window._lfRaw ? text : _t2(text); };

    //-------------------------------------------------------------------------
    // 2. Image-text overlay patches (Russian text baked into .rpgmvp files)
    //    [x, y, w, h, fill, englishText, options]
    //-------------------------------------------------------------------------
    var W = '#ffffff', B = '#000000';
    var tipsReward = function(gun) {
        return [
            [344, 248, 296, 34, '#333333', 'Great job!', { size: 22, outline: B }],
            [344, 288, 296, 92, '#333333', 'You achieved impressive results. As a reward, you receive the ' + gun + '.', { size: 17, outline: B }]
        ];
    };
    var paper = function(lines, color) {
        // Re-draw a blank ruled notebook page, then the translated poem lines.
        return [{ paper: true }].concat(lines.map(function(l) {
            return [l[0], l[1], l[2], l[3], null, l[4], { size: l[5] || 34, color: color, italic: true, align: l[6] || 'center' }];
        }));
    };
    var INK = '#4a4a4a', RED = '#c43c4c';

    var PATCHES = {
        'img/pictures/Status': [
            [508, 12, 218, 34, '#3b64b4', 'Until Police Arrive', { size: 18, outline: B }],
            [669, 46, 146, 34, '#0a0a0a', 'Killed', { size: 18, outline: B }],
            [669, 86, 146, 39, '#ff2350', 'Critically Injured', { size: 17, outline: B }],
            [669, 131, 146, 37, '#ffff10', 'Injured', { size: 18, outline: B }]
        ],
        'img/pictures/score01': [
            [262, 100, 296, 36, '#f4f4f6', 'Morimiya Municipal Middle School\nNishi-Okawa City', { size: 13, color: B, align: 'center', nowrap: true }],
            [240, 146, 340, 42, '#f4f4f6', 'REPORT CARD', { size: 30, color: B, align: 'center' }],
            [336, 462, 32, 24, '#f4f4f6', 'YEAR', { size: 16, color: B, align: 'center' }],
            [394, 462, 66, 24, '#f4f4f6', 'CLASS', { size: 16, color: B, align: 'center' }],
            [300, 486, 34, 24, '#f4f4f6', 'NAME', { size: 16, color: B, align: 'center' }]
        ],
        'img/pictures/score01b': [
            [290, 214, 246, 62, '#1f2552', 'DIPLOMA', { size: 44, color: '#d8b86a', align: 'center' }],
            [262, 430, 302, 52, '#1f2552', 'Morimiya Municipal Middle School\nNishi-Okawa City', { size: 16, color: '#d8b86a', align: 'center', nowrap: true }]
        ],
        'img/pictures/score02': [
            [232, 32, 174, 43, B, 'Killed', { size: 30, align: 'center' }],
            [252, 82, 155, 37, '#c0203a', 'Critically Injured', { size: 15, align: 'center' }],
            [252, 122, 155, 34, W, 'Died in Hospital', { size: 15, color: '#c0203a', align: 'center' }],
            [268, 164, 139, 27, '#ffef50', 'Injured', { size: 16, outline: B, align: 'center' }],
            [235, 202, 106, 26, W, 'Shots', { size: 16, color: B, align: 'center' }],
            [410, 202, 84, 26, W, 'Hits', { size: 16, color: B, align: 'center' }],
            [264, 238, 302, 30, W, 'SP Earned', { size: 22, color: B, align: 'center' }],
            [266, 276, 200, 26, W, 'Female Student', { size: 16, color: B }],
            [266, 304, 200, 26, W, 'Male Student', { size: 16, color: B }],
            [266, 332, 200, 26, W, 'Female Teacher', { size: 16, color: B }],
            [266, 360, 200, 26, W, 'Male Teacher', { size: 16, color: B }],
            [470, 276, 96, 26, W, 'x400 SP', { size: 18, color: '#c0203a', align: 'right' }],
            [470, 304, 96, 26, W, 'x300 SP', { size: 18, color: '#c0203a', align: 'right' }],
            [470, 332, 96, 26, W, 'x200 SP', { size: 18, color: '#c0203a', align: 'right' }],
            [470, 360, 96, 26, W, 'x100 SP', { size: 18, color: '#c0203a', align: 'right' }],
            [500, 478, 66, 42, W, 'SP', { size: 30, color: B, align: 'right' }],
            [222, 536, 84, 56, W, 'Score', { size: 20, color: B, align: 'center' }]
        ],
        'img/pictures/total_score': [
            [604, 8, 208, 60, '#141414', 'RECORDS', { size: 38, align: 'center' }],
            [466, 86, 300, 60, '#1c0b10', 'Kill Record\nNormal Mode', { size: 20, nowrap: true }],
            [466, 210, 300, 60, '#1c0b10', 'Kill Record\nHard Mode', { size: 20, nowrap: true }],
            [480, 350, 190, 28, '#1c0b10', 'Play Time', { size: 19 }],
            [480, 383, 190, 28, '#1c0b10', 'Total Kills', { size: 19 }],
            [480, 416, 190, 28, '#1c0b10', 'Total Shots', { size: 19 }],
            [480, 460, 220, 24, '#1c0b10', 'Shooting Practice', { size: 16 }],
            [480, 493, 220, 24, '#1c0b10', 'Achievements', { size: 16 }],
            [66, 568, 244, 22, '#1c1214', 'Morimiya Middle School Shooting', { size: 14, align: 'center' }]
        ],
        'img/titles1/titleName': [
            [352, 442, 370, 28, '#7c7c7c', 'Morimiya Middle School Shooting', { size: 18, align: 'center' }]
        ],
        'img/pictures/News': [
            [518, 56, 286, 20, W, 'Girl: "I want to kill someone"', { size: 15, color: '#d42020', align: 'center' }],
            [518, 76, 286, 18, W, 'Another school shooting', { size: 15, color: B, align: 'center' }],
            [518, 94, 286, 18, W, '2 dead, 8 injured', { size: 15, color: '#d42020', align: 'center' }]
        ],
        'img/pictures/News01': [
            [516, 56, 288, 28, W, 'Yamazakai High School Shooting:', { size: 18, color: B, align: 'center' }],
            [516, 84, 288, 28, W, '30 dead', { size: 20, color: '#e02020', align: 'center' }],
            [592, 124, 212, 38, '#141414', 'Image posted by the shooter on social media', { size: 11, align: 'center' }]
        ],
        'img/pictures/Police_arrived': [
            [596, 188, 104, 26, '#2c2d31', 'POLICE', { size: 15, align: 'center' }]
        ],
        'img/pictures/Tips_yuumi': [
            [196, 326, 446, 70, 'rgba(25,25,25,0.88)', 'Yumi Tojo is a knife-wielding character. When her stamina is full, pressing Q performs a powerful lunge.', { size: 17, outline: B }]
        ],
        'img/pictures/Tips_shotgun': [
            [196, 326, 446, 68, '#333333', 'Shotguns increase hit chance by 25%, but deal less damage at long range.', { size: 17, outline: B }]
        ],
        'img/pictures/Tips_a180': tipsReward('A180 submachine gun'),
        'img/pictures/Tips_as3': tipsReward('AS3M rifle'),
        'img/pictures/as3m': tipsReward('AS3M rifle'),
        'img/pictures/Tips_bm15mod': tipsReward('BM15 Mod rifle'),
        'img/pictures/Tips_cz11': tipsReward('CZ11 rifle'),
        'img/pictures/Tips_s12mod': tipsReward('S12 Mod shotgun'),
        'img/parallaxes/warning': [
            [0, 40, 816, 400, B, '', {}],
            [40, 60, 736, 56, null, 'WARNING', { size: 36, align: 'center' }],
            [40, 160, 736, 80, null, 'This game depicts a school shooting, violence, profanity, blood and suicide.', { size: 24, align: 'center' }],
            [40, 262, 736, 120, null, 'Continue only if you understand that what happens on screen is fiction and you are ready to treat it as a game.', { size: 24, align: 'center' }]
        ],
        'img/pictures/02': paper([
            [100, 190, 616, 50, 'I was tormented by EVERYONE'],
            [100, 290, 616, 50, 'but today'],
            [100, 378, 616, 50, 'everyone will be tormented by ME']
        ], INK),
        'img/pictures/03': paper([
            [40, 50, 736, 50, 'Not one of my prayers'],
            [40, 155, 736, 50, 'was ever heard'],
            [40, 230, 736, 50, 'Let me ask for just one thing'],
            [20, 380, 776, 60, 'NEVER GIVE BIRTH TO ME AGAIN', 38]
        ], INK),
        'img/pictures/04': paper([
            [40, 38, 736, 46, 'In a world without'],
            [40, 92, 736, 46, 'GOD or SOUL'],
            [40, 182, 736, 46, 'countless creatures multiply'],
            [40, 250, 736, 46, 'whose hearts are empty'],
            [40, 360, 736, 46, 'Thousands, millions, billions of them'],
            [30, 456, 756, 46, 'That is what makes our reality so'],
            [30, 512, 756, 46, 'horrible and meaningless']
        ], INK),
        'img/pictures/05': paper([
            [40, 140, 736, 50, 'People choose to die alone'],
            [40, 276, 736, 50, 'but we must accept one death'],
            [40, 334, 736, 50, 'all together']
        ], RED),
        'img/pictures/06': paper([
            [60, 134, 696, 50, 'Aim well before you shoot'],
            [60, 232, 696, 50, 'Crush all resistance'],
            [60, 328, 696, 50, 'Block every escape route'],
            [60, 424, 696, 50, "Don't forget to finish off the wounded"]
        ], RED)
    };

    var applyPatches = function(bmp, list) {
        list.forEach(function(p) {
            if (p.paper) {
                // blank ruled notebook page
                bmp.fillRect(0, 0, bmp.width, bmp.height, '#e9e9e9');
                for (var ly = 30; ly < bmp.height; ly += 38.5) bmp.fillRect(0, Math.round(ly), bmp.width, 1, '#cfcfcf');
                return;
            }
            if (p[4]) {
                bmp.clearRect(p[0], p[1], p[2], p[3]);
                bmp.fillRect(p[0], p[1], p[2], p[3], p[4]);
            }
            if (p[5]) {
                var text = window.t(p[5]);
                drawFitted(bmp, text, { x: p[0] + 4, y: p[1], w: p[2] - 8, h: p[3] }, p[6] || {});
            }
        });
    };

    var _patchedKeys = [];
    var _ImageManager_loadNormalBitmap = ImageManager.loadNormalBitmap;
    ImageManager.loadNormalBitmap = function(path, hue) {
        var bitmap = _ImageManager_loadNormalBitmap.call(this, path, hue);
        var name = decodeURIComponent(path).replace(/\\/g, '/').replace(/\.(png|rpgmvp)$/i, '');
        var list = PATCHES[name];
        if (list && !bitmap._lfPatched) {
            bitmap._lfPatched = true;
            _patchedKeys.push(this._generateCacheKey(path, hue));
            bitmap.addLoadListener(function(b) { applyPatches(b, list); });
        }
        return bitmap;
    };

    // When the language changes, drop patched bitmaps so they are reloaded
    // and re-patched in the new language.
    var _lastLang = null;
    var _SceneManager_updateMain = SceneManager.updateMain;
    SceneManager.updateMain = function() {
        if (_lastLang !== ConfigManager.language) {
            if (_lastLang !== null) {
                var items = ImageManager._imageCache._items;
                _patchedKeys.forEach(function(key) { delete items[key]; });
                _patchedKeys = [];
                _idValues = null;
            }
            _lastLang = ConfigManager.language;
        }
        _SceneManager_updateMain.call(this);
    };

    //-------------------------------------------------------------------------
    // 3. Message / drawTextEx word wrap (escape-code aware)
    //-------------------------------------------------------------------------
    // Width of a converted (\x1b-escaped) string, honouring \Fs[n] / \{ \}.
    Window_Base.prototype.lfMeasureEx = function(text, startSize) {
        var size = startSize, w = 0, bmp = this.contents;
        var re = /\x1b(FS|[A-Z]+)\[(\d+)\]|\x1b([{}$.|!><^])|([^\x1b]+)/gi, m;
        var old = bmp.fontSize;
        while ((m = re.exec(text))) {
            if (m[1] && m[1].toUpperCase() === 'FS') size = Number(m[2]);
            else if (m[1] && m[1].toUpperCase() === 'I') w += Window_Base._iconWidth + 4;
            else if (m[3] === '{') size += 12;
            else if (m[3] === '}') size -= 12;
            else if (m[4]) { bmp.fontSize = size; w += bmp.measureTextWidth(m[4]); }
        }
        bmp.fontSize = old;
        return { width: w, size: size };
    };

    // Inserts "\n" only where a line would overflow maxWidth. Lines that
    // already fit (incl. hand-formatted tips) are left untouched.
    Window_Base.prototype.lfWrapConverted = function(text, maxWidth) {
        if (!this.contents || maxWidth <= 0) return text;
        var self = this, size = this.contents.fontSize;
        return text.split('\n').map(function(line) {
            var info = self.lfMeasureEx(line, size);
            if (info.width <= maxWidth) { size = info.size; return line; }
            var words = line.split(' '), out = [], cur = '';
            for (var i = 0; i < words.length; i++) {
                var test = cur ? cur + ' ' + words[i] : words[i];
                if (cur && self.lfMeasureEx(test, size).width > maxWidth) {
                    out.push(cur);
                    size = self.lfMeasureEx(cur, size).size;
                    cur = words[i];
                } else cur = test;
            }
            out.push(cur);
            size = self.lfMeasureEx(cur, size).size;
            return out.join('\n');
        }).join('\n');
    };

    // drawTextEx: translate (LanguageManager hook), convert, wrap to the space
    // remaining right of x. convertEscapeCharacters is idempotent on \x1b text.
    var _Window_Base_drawTextEx = Window_Base.prototype.drawTextEx;
    Window_Base.prototype.drawTextEx = function(text, x, y) {
        if (typeof text === 'string' && text && this.contents && isId()) {
            if (!window._lfRaw && window.t) text = window.t(text);
            var conv = this.convertEscapeCharacters(text);
            var wrapped = this.lfWrapConverted(conv, this.contentsWidth() - x - 4);
            if (wrapped !== conv) text = wrapped;
            var prevRaw = window._lfRaw;
            window._lfRaw = true;
            try { return _Window_Base_drawTextEx.call(this, text, x, y); }
            finally { window._lfRaw = prevRaw; }
        }
        return _Window_Base_drawTextEx.call(this, text, x, y);
    };

    // Window_Message: wrap the whole page; overflow lines are paginated by the
    // engine (processNewLine -> needsNewPage -> startPause).
    var _Window_Message_startMessage = Window_Message.prototype.startMessage;
    Window_Message.prototype.startMessage = function() {
        _Window_Message_startMessage.call(this);
        if (isId()) {
            var ts = this._textState;
            var maxW = this.contentsWidth() - this.newLineX() - 4;
            ts.text = this.lfWrapConverted(ts.text, maxW);
        }
    };

    //-------------------------------------------------------------------------
    // 4. Floating subtitle bubbles (Window_Speak, exported from Shooting.js)
    //-------------------------------------------------------------------------
    if (window.Window_Speak) {
        var SPEAK_FONT = 18, SPEAK_MIN_FONT = 14, SPEAK_MAX_LINES = 2, MARGIN = 8;

        Window_Speak.prototype.initialize = function(text, windowId, targetId) {
            text = window.t(String(text));
            this.windowId = windowId;
            this.targetId = targetId;
            this.wait = Math.max(60, Math.min(150, text.length * 3)); // longer text stays longer

            // Measure with a scratch bitmap, then pick the layout:
            //  a) one line if it fits within the safe width,
            //  b) else word-wrap into <= 2 lines,
            //  c) else shrink the font (18 -> 14) until it fits.
            var maxContent = Graphics.boxWidth - MARGIN * 2 - 36;
            var probe = new Bitmap(1, 1), size = SPEAK_FONT, lines;
            var measure = function(s) { return probe.measureTextWidth(s); };
            do {
                probe.fontSize = size;
                lines = wrapWords(text, Math.min(maxContent, 420), measure);
                if (lines.length <= SPEAK_MAX_LINES) break;
                size--;
            } while (size > SPEAK_MIN_FONT);
            if (lines.length > SPEAK_MAX_LINES) lines = wrapWords(text, maxContent, measure);
            var widest = Math.max.apply(null, lines.map(measure));

            this._lines = lines;
            this._fontSize = size;
            this.text = lines.join(' ');
            var lh = Math.round(size * 1.3);
            var width = Math.min(Graphics.boxWidth - MARGIN * 2, Math.max(100, Math.ceil(widest) + 36));
            var height = lines.length * lh + this.standardPadding() * 2;
            this._lineH = lh;
            Window_Base.prototype.initialize.call(this, 0, 0, width, height);
            this.opacity = 0;
            this.contentsOpacity = 255;
            this.dimmerOpacity = 255;

            var owner = targetId ? $gameMap._events[targetId] : $gamePlayer;
            if (owner) {
                if (owner._speakWindow) SceneManager._scene.removeChild(SceneManager._scene._speakWindow[owner._speakWindowId]);
                owner._speakWindow = true;
                owner._speakWindowId = this.windowId;
            }
            this.showBackgroundDimmer();
            AudioManager.playSe({ name: 'Item1', volume: 50, pitch: 150, pan: 0 });
            this.refresh();
        };

        Window_Speak.prototype.standardPadding = function() { return 8; };

        Window_Speak.prototype.refresh = function() {
            this.contents.clear();
            var target = this.targetId == 0 ? $gamePlayer : $gameMap._events[this.targetId];
            if (target) {
                var cx = (($gamePlayer.scrolledX() - $gamePlayer._realX + target._realX) * 48) + 24;
                var cy = (($gamePlayer.scrolledY() - $gamePlayer._realY + target._realY) * 48) - 90;
                // Screen-boundary clamping: the bubble never leaves the canvas.
                this.x = Math.max(MARGIN, Math.min(cx - this.width / 2, Graphics.boxWidth - this.width - MARGIN));
                this.y = Math.max(MARGIN, Math.min(cy - (this.height - this.fittingHeight(1)), Graphics.boxHeight - this.height - MARGIN));
            }
            this.contents.fontSize = this._fontSize;
            window._lfRaw = true; // already translated
            for (var i = 0; i < this._lines.length; i++) {
                this.drawText(this._lines[i], 0, i * this._lineH, this.contentsWidth(), 'center');
            }
            window._lfRaw = false;
            this.contents.fontSize = this.standardFontSize();

            if (this.wait > 0) {
                this.wait -= 1;
            } else if (this.contentsOpacity > 0) {
                this.contentsOpacity -= 2;
                this.dimmerOpacity -= 2;
                if (this._dimmerSprite) this._dimmerSprite.opacity = this.dimmerOpacity;
            } else {
                this.hideBackgroundDimmer();
                this.close();
            }
        };
    }

    //-------------------------------------------------------------------------
    // 5. Single-line drawText font-size fallback
    //    The engine squashes overlong text horizontally (fillText maxWidth),
    //    which makes long Indonesian labels unreadable. Instead, shrink the
    //    font (down to 70%) just for this call, then restore it.
    //-------------------------------------------------------------------------
    var _Window_Base_drawText = Window_Base.prototype.drawText;
    Window_Base.prototype.drawText = function(text, x, y, maxWidth, align) {
        if (typeof text === 'string' && maxWidth && this.contents && isId()) {
            var tr = (!window._lfRaw && window.t) ? window.t(text) : text;
            var c = this.contents, old = c.fontSize, min = Math.max(12, Math.floor(old * 0.7));
            while (c.fontSize > min && c.measureTextWidth(tr) > maxWidth) c.fontSize--;
            var prevRaw = window._lfRaw;
            window._lfRaw = true;
            try { _Window_Base_drawText.call(this, tr, x, y, maxWidth, align); }
            finally { window._lfRaw = prevRaw; c.fontSize = old; }
            return;
        }
        _Window_Base_drawText.call(this, text, x, y, maxWidth, align);
    };
})();

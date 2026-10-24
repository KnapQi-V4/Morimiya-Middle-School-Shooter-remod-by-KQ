# Morimiya Middle School Shooting - Remod by KQ

A comprehensive bilingual mod and enhancement overhaul for the RPG Maker MV / NW.js game **Morimiya Middle School Shooting** (森宮中学校銃乱射事件, v1.2b).

---

## 📖 About

**Morimiya Middle School Shooting** is an intense, top-down tactical survival shooter originally created by **Eric (@eric806359)** in RPG Maker MV. This remod—initially based on the Russian community edition—has been completely modernized with full dual-language English & Indonesian localization, resolution and fullscreen scaling fixes, ergonomic modern shooter controls, and built-in quality-of-life gameplay options.

---

## 🌟 New Features

### 1. 🌐 Dual-Language System (English & Indonesian)
- Switch seamlessly between **English** and **Bahasa Indonesia** at any time directly from the in-game **Options** menu.
- **100% Complete Translation**: All user interfaces, item & weapon databases, skills, story cutscenes, character speech balloons, dialogue, survival manual tips, and achievements are translated with zero language leakage.
- **Dynamic Image Localization**: Embedded Russian text in interface art (HUD status counters, report cards, newspapers, and weapon guide diagrams) has been cleaned and replaced with localized English and Indonesian dynamic canvas overlays.

### 2. 💬 Subtitle Cutoff & Word-Wrapping Fix
- **Escape-Code Aware Auto Word-Wrapping**: Long text strings automatically wrap at word boundaries (no awkward mid-word breaks), accommodating longer translations without overflowing text boxes.
- **Dynamic Bubble Sizing & Font Scaling**: Floating NPC/character speech bubbles dynamically expand and adapt font sizes (from 18px down to 14px) to ensure multi-line clarity.
- **Screen Boundary Clamping**: Floating subtitles and dialogue balloons are strictly clamped within canvas coordinates (`0` to `Graphics.boxWidth`), preventing speech boxes from rendering off-screen.

### 3. 🖥️ Seamless Fullscreen & Scaling Fix (`KQ_BetterFullscreen`)
- **Native NW.js Borderless Fullscreen**: Eliminates the default RPG Maker MV black letterboxing bars and aspect ratio distortion on modern high-resolution displays (1080p, 1440p, 4K).
- **Dedicated Hotkeys**: Toggle fullscreen at any time with **F4** or **F11**.
- **Options Menu Integration**: Dedicated "Fullscreen" toggle with real-time status display ("ON/OFF" for EN, "AKTIF/NONAKTIF" for ID) that saves your preference.

### 4. 🎯 Modern Gameplay Toggles (`KQ_GameplayToggles`)
- **Sprint Mode (Hold vs. Toggle)**:
  - *Hold* (Default): Hold **Shift** to dash and sprint.
  - *Toggle*: Tap **Shift** once to sprint continuously; tap again to stop.
- **Aim Mode (Hold vs. Toggle ADS)**:
  - *Hold* (Default): Hold **E** to enter Aim Mode (ADS) for maximum accuracy; release **E** to return to hipfire.
  - *Toggle*: Tap **E** once to lock into Aim Mode; tap again to exit.
- Full configuration persistence to `config.rpgsave`.

### 5. ⚡ Built-in Quality of Life & Cheat Suite
- Integrated cheat toggles accessible via the **Options** menu, the bedroom computer terminal, or convenient in-game hotkeys:
  - **Infinite SP / Gold**: Sets and locks SP to 9,999,999.
  - **Infinite Ammo**: Weapon magazines and reserve ammunition never deplete.
  - **Infinite Pipe Bombs**: Unlimited grenade/bomb supply.
  - **God Mode / Infinite Health**: Complete immunity to enemy gunfire, melee takedowns, and exhaustion; stamina remains permanently full.
- **Master Cheat Toggle**: Press **F8** or **9** during gameplay to toggle all cheats simultaneously.

---

## 🎮 Controls

| Key / Control | Function | Description |
| :--- | :--- | :--- |
| **W, A, S, D** / Arrow Keys | **Move** | Move character in 8 directions |
| **Shift** | **Sprint / Dash** | Run (Hold or Toggle based on Options setting; consumes stamina) |
| **Space** | **Fire / Attack** | Shoot equipped firearm or swing equipped melee weapon |
| **E** | **Aim Mode (ADS)** | Increase hit accuracy (Hold or Toggle based on Options setting) |
| **R** | **Reload** | Reload current weapon with reserve ammunition |
| **Q** | **Quick Swap** | Quickly switch between Primary Weapon and Sidearm handgun |
| **1 / 2** | **Weapon Select** | Directly select Primary Weapon (`1`) or Sidearm (`2`) |
| **3** | **Equip Melee** | Draw knife / melee weapon |
| **V** | **Quick Melee** | Immediate melee slash without switching equipped weapons |
| **G** | **Throw Grenade** | Hold to charge throwing distance; release to toss pipe bomb |
| **C** | **Fire Mode** | Cycle firing mode (*Semi-Auto / 3-Round Burst / Full-Auto*) |
| **F** | **Target Select** | Cycle and lock aim to alternate targets in Hard Mode |
| **X / Esc** | **Cancel / Menu** | Open in-game menu / cancel selection |
| **F4 / F11** | **Toggle Fullscreen** | Switch between windowed mode and borderless fullscreen |
| **F8 / 9** | **Master Cheat Toggle** | Instantly activate/deactivate all cheats in real time |

---

## 🚀 Installation & How to Play

1. **Download**: Download the latest release archive (`Morimiya_Middle_School_Shooter_Remod_v1.0.zip`) from the [Releases](https://github.com/KnapQi-V4/Morimiya-Middle-School-Shooter-remod-by-KQ/releases) page.
2. **Extract**: Extract the `.zip` archive into any folder on your computer.
3. **Launch**: Double-click **`Game.exe`** to launch the game.
   - *Requirements*: Windows 7 / 8 / 10 / 11 (64-bit recommended). No additional dependencies or runtime installations needed.

---

## ⚙️ Settings & Options Guide

Access the **Options** menu from the Title Screen or in-game Pause Menu to customize your experience:

- **Language / Bahasa**: Switch between **English** and **Indonesia**. All text and menus update immediately.
- **Fullscreen / Layar Penuh**: Turn native fullscreen **ON** or **OFF**.
- **Sprint Mode / Mode Sprint**: Switch between **Hold** (Tahan) and **Toggle** (Ganti).
- **Aim Mode / Mode Bidik**: Switch between **Hold** (Tahan) and **Toggle** (Ganti).
- **Cheat Toggles**: Toggle individual cheat options (Infinite SP, Infinite Ammo, Infinite Bombs, Infinite Health) whenever desired.

---

## 📜 Credits & Acknowledgments

- **Original Creator**: **Eric** ([@eric806359](https://twitter.com/eric806359)) – Developer of the original masterpiece *Morimiya Middle School Shooting* (森宮中学校銃乱射事件).
- **Russian Translation Base**: Morityu Community Translation Team.
- **Mod Creator & Localization**: **KnapQi-V4** – Dual-language localization (EN/ID), dynamic canvas overlay patches, subtitle word-wrapping & coordinate clamping, modern fullscreen overhaul, gameplay toggle settings, and cheat system.

---

## ⚖️ Disclaimer

This mod is an unofficial fan enhancement created for preservation, accessibility, and localization purposes. All rights to the original game assets and intellectual property belong to their respective creators.

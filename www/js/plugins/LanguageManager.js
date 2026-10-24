//=============================================================================
// LanguageManager.js
// Dual Language System (English / Bahasa Indonesia) & Comprehensive Cheats
//=============================================================================

/*:
 * @plugindesc English & Indonesian Localization, Subtitle Cutoff Fix, and Cheats (Infinite SP, Ammo, Bombs, Health)
 * @author Morityu Project
 */

(function() {
    'use strict';

    // 1. ConfigManager Integration
    ConfigManager.language = 'en'; // 'en' or 'id'
    ConfigManager.infiniteSp = false;
    ConfigManager.infiniteAmmo = false;
    ConfigManager.infiniteBombs = false;
    ConfigManager.infiniteHealth = false;

    var _ConfigManager_makeData = ConfigManager.makeData;
    ConfigManager.makeData = function() {
        var config = _ConfigManager_makeData.call(this);
        config.language = this.language || 'en';
        config.infiniteSp = !!this.infiniteSp;
        config.infiniteAmmo = !!this.infiniteAmmo;
        config.infiniteBombs = !!this.infiniteBombs;
        config.infiniteHealth = !!this.infiniteHealth;
        return config;
    };

    var _ConfigManager_applyData = ConfigManager.applyData;
    ConfigManager.applyData = function(config) {
        _ConfigManager_applyData.call(this, config);
        this.language = config.language || 'en';
        this.infiniteSp = !!config.infiniteSp;
        this.infiniteAmmo = !!config.infiniteAmmo;
        this.infiniteBombs = !!config.infiniteBombs;
        this.infiniteHealth = !!config.infiniteHealth;
    };

    // 2. Translation Dictionary
    window.I18N_ID = {
  "Language": "Bahasa",
  "Cheat: Infinite SP": "Cheat: SP Tak Terbatas",
  "Hard Mode": "Mode Sulit",
  "Yumi Mode": "Mode Yumi",
  "Skip Intro Scene": "Lewati Intro",
  "Skip Endings": "Lewati Ending",
  "BGM Volume": "Volume BGM",
  "BGS Volume": "Volume BGS",
  "SE Volume": "Volume SE",
  "ON": "AKTIF",
  "OFF": "NONAKTIF",
  "New Game": "Game Baru",
  "Continue": "Lanjutkan",
  "Options": "Pengaturan",
  "Item": "Item",
  "Skill": "Keahlian",
  "Equip": "Perlengkapan",
  "Status": "Status",
  "Save": "Simpan",
  "Game End": "Keluar Game",
  "To Title": "Ke Judul",
  "Cancel": "Batal",
  "Yes": "Ya",
  "No": "Tidak",
  "File": "File",
  "Possession": "Dimiliki",
  "Price": "Harga",
  "Buy": "Beli",
  "Sell": "Jual",
  "Load which file?": "Muat file yang mana?",
  "Save to which file?": "Simpan ke file yang mana?",
  "Main Weapon": "Senjata Utama",
  "Sidearm": "Senjata Sampingan",
  "Throwables": "Senjata Lempar",
  "Melee Weapon": "Senjata Jarak Dekat",
  "Gun": "Senjata Api",
  "Throwable": "Senjata Lempar",
  "3rd Year Middle Schooler": "Siswa Kelas 3 SMP",
  "Damage": "Kerusakan",
  "Recoil": "Hentakan",
  "Fire Rate": "Laju Tembak",
  "Capacity": "Kapasitas",
  "Magazines": "Magazen",
  "Ammo": "Amunisi",
  "Stamina Cost": "Konsumsi Stamina",
  "Draw Speed": "Kecepatan Menghunus",
  "Attack Speed": "Kecepatan Serang",
  "Very Low": "Sangat Rendah",
  "Low": "Rendah",
  "Medium": "Sedang",
  "High": "Tinggi",
  "Very High": "Sangat Tinggi",
  "Undefined": "Tidak Terdefinisi",
  "Gym Front": "Depan Gimnasium",
  "Storage Front": "Depan Gudang",
  "Infirmary Front": "Depan UKS",
  "Staff Room Front": "Depan Ruang Guru",
  "2F South Hallway": "Koridor Selatan Lt 2",
  "2F South Stairs": "Tangga Selatan Lt 2",
  "3F South Hallway": "Koridor Selatan Lt 3",
  "Multipurpose Room": "Ruang Serbaguna",
  "Cafeteria": "Kantin",
  "Swimming Pool": "Kolam Renang",
  "Library": "Perpustakaan",
  "Gymnasium": "Gimnasium",
  "Hit Rate": "Akurasi",
  "Total Score": "Total Skor",
  "Victims": "Korban",
  "Time Elapsed": "Waktu Berlalu",
  "Accuracy": "Akurasi",
  "Kills": "Jumlah Korban",
  "Rank": "Peringkat",
  "Total Kills": "Total Korban",
  "Total Shots": "Total Tembakan",
  "Shotgun Kills": "Korban Shotgun",
  "Staff Room Kills": "Korban Ruang Guru",
  "Nearby Living Students": "Siswa Hidup di Dekat",
  "Female Teacher Present": "Guru Wanita Hadir",
  "Reinforce Time": "Waktu Bantuan",
  "Multiplier": "Pengali",
  "Spacious Map?": "Peta Luas?",
  "Reinforced": "Bantuan Tiba",
  "Yandere Pos": "Posisi Yandere",
  "Shots": "Tembakan",
  "Hits": "Kena",
  "Main Mag": "Magazen Utama",
  "Side Mag": "Magazen Sampingan",
  "Fire Mode": "Mode Tembak",
  "Stamina": "Stamina",
  "Courage": "Keberanian",
  "Danger": "Bahaya",
  "Voice Timer": "Penghitung Suara",
  "Earned SP": "SP Diperoleh",
  "Total SP": "Total SP",
  "Gun Uses": "Penggunaan Senjata",
  "Bomb Uses": "Penggunaan Bom",
  "Throws": "Lemparan",
  "Melee Uses": "Penggunaan Sajam",
  "Attacks": "Serangan",
  "Do nothing": "Jangan lakukan apa-apa",
  "\\I[29] Game Manual": "\\I[29] Panduan Game",
  "\\I[30] Records": "\\I[30] Rekor",
  "\\I[12] Achievements": "\\I[12] Prestasi",
  "\\I[31] Settings": "\\I[31] Pengaturan",
  "\\I[125] Cheat: +9,999,999 SP": "\\I[125] Cheat: +9.999.999 SP",
  "\\I[120] Buy Weapons": "\\I[120] Beli Senjata",
  "\\I[120] Equip Weapons": "\\I[120] Pasang Senjata",
  "\\I[77] Buy Skills": "\\I[77] Beli Keahlian",
  "\\I[77] View Skills": "\\I[77] Lihat Keahlian",
  "\\I[245] Save Game": "\\I[245] Simpan Game",
  "\\I[120] Start Practice": "\\I[120] Mulai Latihan",
  "\\I[245] Would you like to save your game?": "\\I[245] Apakah kamu ingin menyimpan game?",
  "Game Test": "Uji Game",
  "Get Reward Weapons": "Dapatkan Senjata Hadiah",
  "Open Tips": "Buka Tips",
  "Go to Rooftop": "Pergi ke Atap",
  "Open Menu": "Buka Menu",
  "Start Attack": "Mulai Serangan",
  "End Attack": "Akhiri Serangan",
  "Change Kills": "Ubah Jumlah Korban",
  "Add Bombs": "Tambah Bom",
  "Next": "Lanjut",
  "Advance 1 Min": "Majukan 1 Menit",
  "Go to Laboratory": "Pergi ke Lab",
  "Change Variables": "Ubah Variabel",
  "Start": "Mulai",
  "School Exterior": "Halaman Sekolah",
  "Small Classroom A": "Ruang Kelas Kecil A",
  "Post-Game Screen": "Layar Pasca-Game",
  "Class 1-2": "Kelas 1-2",
  "Class 2-1": "Kelas 2-1",
  "Counseling Room": "Ruang Konseling",
  "Emergency Stairs 2F": "Tangga Darurat Lt 2",
  "South Wing 1F": "Sayap Selatan Lt 1",
  "South Wing 2F": "Sayap Selatan Lt 2",
  "South Wing 3F": "Sayap Selatan Lt 3",
  "East Wing 1F": "Sayap Timur Lt 1",
  "East Wing 2F": "Sayap Timur Lt 2",
  "East Wing 3F": "Sayap Timur Lt 3",
  "Administrative Office": "Ruang Tata Usaha",
  "Faculty Room": "Ruang Guru",
  "Infirmary": "UKS",
  "Conference Room": "Ruang Rapat",
  "Principal's Office": "Ruang Kepala Sekolah",
  "Broadcasting & Student Council": "Ruang Siaran & OSIS",
  "1F Restroom": "Toilet Lt 1",
  "2F Restroom": "Toilet Lt 2",
  "Class 3-1": "Kelas 3-1",
  "Class 1-3": "Kelas 1-3",
  "Class 1-1": "Kelas 1-1",
  "Laboratory": "Laboratorium",
  "Class 2-2": "Kelas 2-2",
  "Class 2-3": "Kelas 2-3",
  "Empty Classroom": "Ruang Kelas Kosong",
  "Home Economics Room": "Ruang Tata Boga",
  "Workshop": "Ruang Prakarya",
  "Locker Room": "Ruang Ganti",
  "Art Room": "Ruang Seni",
  "Music Room": "Ruang Musik",
  "Computer Lab": "Lab Komputer",
  "Science Lab": "Lab Sains",
  "Arrest Ending": "Ending Ditangkap",
  "Classroom Intro": "Intro Ruang Kelas",
  "Home - Diary": "Rumah - Buku Harian",
  "Materials Room": "Ruang Penyimpanan",
  "Small Classroom B": "Ruang Kelas Kecil B",
  "Home - Living Room": "Rumah - Ruang Tamu",
  "Target Practice": "Latihan Menembak",
  "Tutorial": "Tutorial",
  "3F Restroom": "Toilet Lt 3",
  "Class 3-2": "Kelas 3-2",
  "Class 3-3": "Kelas 3-3",
  "Home - Bedroom": "Rumah - Kamar Tidur",
  "Classroom": "Ruang Kelas",
  "South Wing 1F Entrance": "Pintu Masuk Sayap Selatan Lt 1",
  "South Wing 1F Stairs": "Tangga Sayap Selatan Lt 1",
  "South Wing 2F Classrooms": "Ruang Kelas Sayap Selatan Lt 2",
  "South Wing 2F Stairs": "Tangga Sayap Selatan Lt 2",
  "Rooftop": "Atap Sekolah",
  "A standard service pistol. Reliable and easy to control.": "Pistol dinas standar. Andal dan mudah dikendalikan.",
  "A classic high-caliber pistol with great stopping power.": "Pistol kaliber besar klasik dengan daya henti yang hebat.",
  "A compact submachine gun with high automatic fire rate.": "Submachine gun ringkas dengan laju tembak otomatis tinggi.",
  "A semi-automatic rifle offering balanced damage and range.": "Senapan semi-otomatis dengan kerusakan dan jangkauan seimbang.",
  "A durable, high-power assault rifle adapted for hunting.": "Senapan serbu bertenaga tinggi dan tahan lama.",
  "A light semi-automatic rifle chambered in .22 with minimal recoil.": "Senapan semi-otomatis ringan berkaliber .22 dengan hentakan sangat kecil.",
  "A pump-action shotgun with immense close-range lethality.": "Shotgun pump-action dengan daya rusak jarak dekat yang mematikan.",
  "A semi-automatic combat shotgun delivering rapid buckshot blasts.": "Shotgun tempur semi-otomatis dengan tembakan beruntun yang cepat.",
  "A modern tactical carbine with fully automatic capability.": "Karabin taktis modern dengan kemampuan tembak otomatis penuh.",
  "A heavy pump shotgun equipped with a high-capacity magazine.": "Shotgun pompa berat yang dilengkapi dengan magazen berkapasitas besar.",
  "A standard semi-automatic carbine popular for sports and defense.": "Karabin semi-otomatis standar yang populer untuk olahraga dan bela diri.",
  "A compact pistol favored for concealability despite sharp recoil.": "Pistol ringkas yang mudah disembunyikan meski memiliki hentakan tajam.",
  "An airsoft replica pistol used for target training.": "Pistol replika airsoft yang digunakan untuk latihan menembak.",
  "An airsoft submachine gun for rapid practice firing.": "Submachine gun replika airsoft untuk latihan tembakan cepat.",
  "A vintage double-barrel shotgun packing double the punch.": "Shotgun laras ganda klasik dengan daya hantam berlipat ganda.",
  "A rapid-firing submachine gun built for close-quarters clearing.": "Submachine gun berkecepatan tinggi untuk pertempuran jarak dekat.",
  "A heavy-duty pump shotgun designed for law enforcement breaches.": "Shotgun pompa berat yang dirancang untuk pendobrakan aparat hukum.",
  "A small-caliber pocket pistol firing .22 rounds.": "Pistol saku berkaliber kecil yang menembakkan peluru .22.",
  "A handmade double-barrel shotgun assembled from pipes and scrap.": "Shotgun laras ganda rakitan yang dibuat dari pipa dan besi tua.",
  "A miniature machine pistol with blistering cyclic rate.": "Pistol mesin miniatur dengan laju tembakan sangat tinggi.",
  "A compact submachine gun renowned for extreme rate of fire.": "Submachine gun ringkas yang terkenal dengan laju tembakan ekstrem.",
  "A massive hand cannon chambered in .50 caliber.": "Pistol raksasa berdaya hancur tinggi kaliber .50.",
  "A battle rifle firing high-powered full-size rifle rounds.": "Senapan tempur berkekuatan tinggi dengan peluru senapan ukuran penuh.",
  "A specialized silenced assault rifle firing heavy subsonic rounds.": "Senapan serbu bersuara teredam dengan peluru subsonik berat.",
  "A customized automatic shotgun fitted with a large drum magazine.": "Shotgun otomatis kustom yang dilengkapi magazen drum besar.",
  "A durable modern service pistol known for high magazine capacity.": "Pistol dinas modern yang tangguh dengan kapasitas magazen besar.",
  "A compact machine pistol delivering intense bursts.": "Pistol mesin kompak yang melepaskan rentetan tembakan intens.",
  "A robust surplus military pistol using 7.62mm ammunition.": "Pistol militer surplus yang kokoh menggunakan peluru 7.62mm.",
  "A legendary submachine gun fitted with a huge pan drum.": "Submachine gun legendaris dengan magazen drum besar.",
  "A heavy carbine chambered in .45 caliber for high impact.": "Karabin berat berkaliber .45 untuk dampak hantaman tinggi.",
  "A shortened tactical pump shotgun optimized for hallways.": "Shotgun taktis berlaras pendek yang dioptimalkan untuk koridor sempit.",
  "An upgraded military rifle capable of controlled high-speed bursts.": "Senapan militer yang ditingkatkan untuk tembakan terarah kecepatan tinggi.",
  "A standard explosive packed into a steel pipe.": "Bahan peledak standar yang dikemas dalam pipa baja.",
  "A fragmentation bomb packed with nails to shred crowds.": "Bom fragmentasi yang dipenuhi paku untuk mencabik kerumunan.",
  "A lethal explosive packed with shrapnel for maximum casualties.": "Bom mematikan dengan pecahan peluru untuk korban maksimal.",
  "A heavy improvised explosive with devastating blast radius.": "Bahan peledak rakitan berat dengan radius ledakan dahsyat.",
  "A lightweight explosive device built for quick deployment.": "Alat peledak ringan yang dirancang untuk penggunaan cepat.",
  "A makeshift bomb crafted from household chemicals.": "Bom rakitan yang dibuat dari bahan kimia rumah tangga.",
  "A small folding pocket knife. Easy to carry and conceal.": "Pisau saku lipat kecil. Mudah dibawa dan disembunyikan.",
  "Folding Knife": "Pisau Lipat",
  "A sharp stainless steel kitchen knife found in homes.": "Pisau dapur tajam berbahan baja tahan karat yang umum di rumah.",
  "Kitchen Knife A": "Pisau Dapur A",
  "A heavy chef knife capable of forceful downward chops.": "Pisau koki berat yang mampu menebas dengan tenaga kuat.",
  "Kitchen Knife B": "Pisau Dapur B",
  "A military-grade combat knife engineered for lethal stabbing.": "Pisau tempur militer yang dirancang untuk tusukan mematikan.",
  "Combat Knife": "Pisau Tempur",
  "A double-edged combat dagger optimized for swift thrusts.": "Belati bermata ganda yang dioptimalkan untuk tusukan cepat.",
  "Dagger": "Belati",
  "A small forestry axe capable of splitting skulls with force.": "Kapak kayu kecil yang mampu membelah dengan tenaga besar.",
  "Hand Axe": "Kapak Tangan",
  "The personal knife kept by Yumi Tojo. Sharp and menacing.": "Pisau pribadi milik Yumi Tojo. Tajam dan mengerikan.",
  "Yumi's Knife": "Pisau Yumi",
  "A bayonet attachment designed for brutal thrusting attacks.": "Sangkur senapan yang dirancang untuk serangan tusukan brutal.",
  "Type 56 Bayonet": "Sangkur Type 56",
  "Pipe Bomb": "Bom Pipa",
  "Nail Bomb": "Bom Paku",
  "Shrapnel Bomb": "Bom Serpihan",
  "Heavy Bomb": "Bom Berat",
  "Flash Device": "Alat Kilat",
  "Chemical Bomb": "Bom Kimia",
  "Reload Master": "Ahli Reload",
  "Quick Reload": "Reload Cepat",
  "Quick Draw": "Menghunus Cepat",
  "Stamina Up": "Peningkatan Stamina",
  "Stamina Regeneration": "Pemulihan Stamina",
  "Damage Reduction": "Pengurangan Kerusakan",
  "Fatal Damage Resistance": "Ketahanan Kerusakan Fatal",
  "Attack Boost": "Peningkatan Serangan",
  "Accuracy Boost": "Peningkatan Akurasi",
  "Speed Boost": "Peningkatan Kecepatan",
  "Lone Wolf": "Serigala Penyendiri",
  "Hallway Tag!": "Petak Umpet Koridor!",
  "Berserk": "Mengamuk",
  "Adrenaline": "Adrenalin",
  "Drastically reduces reload times for all firearms.": "Mengurangi waktu reload secara drastis untuk semua senjata api.",
  "Reduces the time needed to reload weapons.": "Mengurangi waktu yang dibutuhkan untuk reload senjata.",
  "Reduces weapon swap and drawing delay.": "Mengurangi jeda saat mengganti dan menghunus senjata.",
  "Increases overall maximum stamina capacity.": "Meningkatkan kapasitas stamina maksimum secara keseluruhan.",
  "Speeds up the recovery rate of consumed stamina.": "Mempercepat pemulihan stamina yang terpakai.",
  "Mitigates damage sustained from student counterattacks.": "Mengurangi kerusakan yang diterima dari perlawanan siswa.",
  "Increases survivability against fatal attacks from teachers.": "Meningkatkan daya tahan terhadap serangan fatal dari guru.",
  "Enhances base attack power with all weapons.": "Meningkatkan daya serang dasar dengan semua senjata.",
  "Improves firearm accuracy and reduces bullet spread.": "Meningkatkan akurasi tembakan dan mengurangi sebaran peluru.",
  "Increases dash and walking movement speed.": "Meningkatkan kecepatan lari dan berjalan.",
  "Enhances combat prowess when operating without hesitation.": "Meningkatkan kemampuan tempur saat beraksi tanpa ragu.",
  "Yumi's signature skill, enabling lightning-fast lunge attacks.": "Keahlian khas Yumi, memungkinkan serangan terjang secepat kilat.",
  "Empowers all offensive capabilities when critically wounded.": "Meningkatkan semua kemampuan ofensif saat terluka parah.",
  "Temporarily ignores pain and fatigue under high tension.": "Mengabaikan rasa sakit dan kelelahan untuk sementara waktu.",
  "Weapon Swapping": "Mengganti Senjata",
  "Melee Weapons": "Senjata Jarak Dekat",
  "Grenades": "Granat",
  "Shotguns": "Shotgun",
  "Injured Targets": "Target Terluka",
  "Reinforcements": "Bantuan",
  "Student Resistance": "Perlawanan Siswa",
  "Fatal Damage": "Kerusakan Fatal",
  "Yumi Tojo": "Yumi Tojo",
  "Key Differences": "Perbedaan Utama",
  "Ammo Retention": "Penyimpanan Amunisi",
  "Hitting Corpses": "Mengenai Mayat",
  "Body Armor": "Rompi Anti-Peluru",
  "Movement": "Gerakan",
  "Run / Dash": "Lari / Cepat",
  "Shoot": "Tembak",
  "Back / Cancel": "Kembali / Batal",
  "Primary Weapon": "Senjata Utama",
  "Handgun": "Pistol",
  "Melee": "Sajam",
  "Aim": "Membidik",
  "Reloading": "Mengisi Peluru (Reload)",
  "Switch Target": "Ganti Target",
  "Grenade": "Granat",
  "Quick Melee": "Serangan Cepat",
  "Achievement Name": "Nama Prestasi",
  "Requirement": "Syarat",
  "Text": "Keterangan",
  "Reward Type": "Tipe Hadiah",
  "Reward": "Hadiah",
  "Deep Down Inside...": "Jauh di Lubuk Hati...",
  "Eliminate the school security guard": "Habisi satpam sekolah",
  "'You told me to die alone, didn't you?'": "'Kamu menyuruhku mati sendirian, bukan?'",
  "Try Harder": "Berusahalah Lebih Keras",
  "Get arrested": "Tertangkap oleh polisi",
  "Whether studying or killing—I'm hopeless at everything.": "Mau belajar atau membunuh—aku payah dalam segalanya.",
  "For This Day": "Demi Hari Ini",
  "Complete the assault": "Selesaikan serangan ke sekolah",
  "You died today, and today I was reborn.": "Kalian mati hari ini, dan hari ini aku terlahir kembali.",
  "Model Student": "Murid Teladan",
  "Clear Target Practice in under 12 seconds": "Selesaikan Latihan Menembak di bawah 12 detik",
  "I'll give it my all just to kill you.": "Aku akan memberikan segalanya hanya untuk membunuhmu.",
  "Gun Culture? Pfft.": "Budaya Senjata? Pfft.",
  "Attack the school as Yumi Tojo": "Serang sekolah sebagai Yumi Tojo",
  "Who needs an assault rifle when you have a knife?": "Siapa butuh senapan serbu kalau punya pisau?",
  "Time to Cook!": "Waktunya Meracik!",
  "Master the skill 'Lone Wolf'": "Kuasai keahlian 'Serigala Penyendiri'",
  "I thought chemistry wasn't for me————right until I made a bomb from nail polish remover.": "Kupikir kimia bukan untukku————sampai aku membuat bom dari pembersih kutek.",
  "Oh my god!!!": "Ya Tuhan!!!",
  "Waaah!!!": "Waaah!!!",
  "Ouch!": "Aduh!",
  "Aaaah!": "Aaaah!",
  "Oof!": "Ugh!",
  "Aaah!": "Aaah!",
  "Ow!": "Aduh!",
  "Mmh...": "Mmh...",
  "Mmmh...": "Mmmh...",
  "Ow...": "Aduh...",
  "Ouch...": "Aduh...",
  "Ah... oh...": "Ah... oh...",
  "*Gasp*": "*Terengah*",
  "*Wheeze*": "*Mengi*",
  "Ah... aaah...": "Ah... aaah...",
  "A-aah...": "A-aah...",
  "Ooh...": "Ooh...",
  "Help me!": "Tolong aku!",
  "Please! Don't!": "Tolong! Jangan!",
  "Don't kill me!": "Jangan bunuh aku!",
  "No! Somebody help!": "Tidak! Siapa pun tolong!",
  "Why?!": "Kenapa?!",
  "Aaaah! Dear God!": "Aaaah! Ya Tuhan!",
  "Noooo!": "Tidaaak!",
  "No!": "Tidak!",
  "Eeeek!": "Kyaaa!",
  "Noooooo!!!": "Tidaaak!!!",
  "Stay away!": "Menjauh dariku!",
  "Get out of here!": "Pergi dari sini!",
  "Don't shoot!": "Jangan tembak!",
  "Ow... it hurts so much...": "Aduh... sakit sekali...",
  "*Sob*": "*Tersedu*",
  "I don't want to die...": "Aku tidak mau mati...",
  "Why... why me...": "Kenapa... kenapa harus aku...",
  "Why... why this...": "Kenapa... kenapa begini...",
  "It hurts... it hurts...": "Sakit... sakit sekali...",
  "Blood... it won't stop...": "Darahnya... tidak mau berhenti...",
  "Somebody... help me...": "Siapa pun... tolong aku...",
  "Mom... Mommy...": "Ibu... Ibu...",
  "Daddy, save me...": "Ayah, selamatkan aku...",
  "I didn't do anything...": "Aku tidak berbuat apa-apa...",
  "God... please help...": "Tuhan... tolong aku...",
  "Help me!!!": "Tolong aku!!!",
  "Somebody, over here!": "Seseorang, ke sini!",
  "Stop it!": "Hentikan!",
  "Stop!": "Berhenti!",
  "Cut it out!": "Sudahi!",
  "Don't be stupid!": "Jangan bodoh!",
  "What the hell?!": "Apa-apaan ini?!",
  "Are you kidding me?!": "Bercanda kamu ya?!",
  "Out of my way!": "Minggir dari jalanku!",
  "Run!": "Lari!",
  "Run away!": "Cepat lari!",
  "Hurry! Run!": "Cepat! Lari!",
  "Run! Right now!": "Lari! Sekarang juga!",
  "Run! Quick!": "Lari! Cepat!",
  "Run! Run!": "Lari! Lari!",
  "Run! Run! Run!": "Lari! Lari! Lari!",
  "Die!": "Mati kau!",
  "Take this!": "Rasakan ini!",
  "Son of a bitch!": "Bajingan!",
  "Bastard!": "Brengsek!",
  "Asshole!": "Sialan!",
  "I'll kill you!": "Kubunuh kau!",
  "Die, you bastard!": "Mati kau, brengsek!",
  "Shit...": "Sial...",
  "Damn it...": "Sialan...",
  "Damn it!": "Sialan!",
  "Ugh... it hurts...": "Ugh... sakit...",
  "It hurts!": "Sakit!",
  "Uuuugh...": "Uuuugh...",
  "Save me...": "Selamatkan aku...",
  "I... I want to live...": "Aku... aku ingin hidup...",
  "Wait! Stop!": "Tunggu! Berhenti!",
  "What are you doing?!": "Apa yang kamu lakukan?!",
  "Drop the weapon!": "Jatuhkan senjatamu!",
  "Drop your gun!": "Jatuhkan pistolmu!",
  "Freeze!": "Jangan bergerak!",
  "Put that down!": "Letakkan itu!",
  "Don't point that at me!": "Jangan todongkan itu padaku!",
  "Are you insane?!": "Apakah kamu sudah gila?!",
  "Calm down!": "Tenanglah!",
  "Don't move!": "Jangan bergerak!",
  "Stay where you are!": "Tetap di tempatmu!",
  "Guards! Over here!": "Penjaga! Ke sini!",
  "Call the police!": "Panggil polisi!",
  "Call an ambulance!": "Panggil ambulans!",
  "Police! Stop!": "Polisi! Berhenti!",
  "Police! Drop your weapon!": "Polisi! Jatuhkan senjatamu!",
  "Hands in the air!": "Angkat tanganmu!",
  "On your knees!": "Berlutut sekarang!",
  "I'm warning you!": "Aku memperingatkanmu!",
  "Fire!": "Tembak!",
  "Cease fire!": "Hentikan tembakan!",
  "Target down!": "Target tumbang!",
  "Suspect down!": "Tersangka tumbang!",
  "Officer down!": "Petugas terluka!",
  "We need backup!": "Kita butuh bantuan!",
  "Requesting backup!": "Meminta bantuan!",
  "Die! Die! Die!": "Mati! Mati! Mati!",
  "Hahahaha!": "Hahahaha!",
  "AHAHAHAHA!": "AHAHAHAHA!",
  "More! More!": "Lagi! Lagi!",
  "Dance for me!": "Menarilah untukku!",
  "Bleed for me!": "Berdarahlah untukku!",
  "How do you like that?!": "Bagaimana rasanya?!",
  "You deserve this!": "Kalian pantas menerima ini!",
  "None of you will leave alive!": "Tak ada yang akan keluar hidup-hidup!",
  "Burn in hell!": "Membusuklah di neraka!",
  "Pathetic!": "Menyedihkan!",
  "Cry more!": "Menangislah lebih keras!",
  "Scream for me!": "Berteriaklah untukku!",
  "Beg for your life!": "Memohonlah untuk nyawamu!",
  "Too slow!": "Terlalu lambat!",
  "Weak!": "Lemah!",
  "Next!": "Selanjutnya!",
  "Is that all you got?!": "Cuma segini kemampuanmu?!",
  "Run while you can!": "Larilah selagi bisa!",
  "You cannot escape!": "Kamu tak bisa kabur!",
  "Say goodbye!": "Ucapkan selamat tinggal!",
  "Nighty night!": "Selamat malam!",
  "Boom!": "Boom!",
  "Eat this!": "Makan ini!",
  "Catch!": "Tangkap ini!",
  "Surprise!": "Kejutan!",
  "Gotcha!": "Kena kau!",
  "Bullseye!": "Tepat sasaran!",
  "Headshot!": "Tembakan kepala!",
  "Too easy!": "Terlalu mudah!",
  "Goodbye!": "Selamat tinggal!",
  "See you in hell!": "Sampai jumpa di neraka!",
  "Die, pig!": "Mati kau, babi!",
  "Rot in pieces!": "Mati tercabik-cabiklah!",
  "Nobody can save you now!": "Tak ada yang bisa menyelamatkanmu sekarang!",
  "This is for everything!": "Ini pembalasan untuk segalanya!",
  "Now you know how it feels!": "Sekarang kamu tahu bagaimana rasanya!",
  "You all laughed at me!": "Kalian semua menertawakanku!",
  "Who is laughing now?!": "Siapa yang tertawa sekarang?!",
  "I'll slaughter every single one of you!": "Aku akan membantai kalian semua satu per satu!",
  "Watch the \\I[29] intro scene?": "Tonton adegan intro \\I[29]?",
  "Today was just an ordinary school day.": "Hari ini hanyalah hari sekolah biasa.",
  "I don't talk to anyone, I don't hang out with anyone,": "Aku tidak berbicara dengan siapa pun, tidak bergaul dengan siapa pun,",
  "preferring to sit quietly at my desk.\\!": "lebih memilih duduk diam di mejaku.\\!",
  "After school, I head straight home.": "Sepulang sekolah, aku langsung pulang ke rumah.",
  "That's how two years at this school went by.": "Begitulah dua tahun di sekolah ini berlalu.",
  "If I asked my classmates what they think of me—": "Jika aku bertanya pada teman-teman sekelas apa yang mereka pikirkan tentangku—",
  "what kind of answers would I get?": "jawaban seperti apa yang akan kudapatkan?",
  "\"Looks serious,\",\\. \"A gloomy kid,\",\\.": "\"Kelihatan serius,\",\\. \"Anak yang suram,\",\\.",
  "\"Hardly noticeable,\",\\. \"Always alone.\"": "\"Hampir tak terlihat,\",\\. \"Selalu menyendiri.\"",
  "That's how everyone looks at me.\\!": "Begitulah semua orang memandangku.\\!",
  "To them, that's all I am.": "Bagi mereka, hanya sebatas itulah diriku.",
  "...That's why they'd be shocked,\\!": "...Itulah mengapa mereka akan terkejut,\\!",
  "if they knew that my heart is overflowing with rage and": "jika mereka tahu hatiku dipenuhi oleh amarah dan",
  "hatred toward them.": "kebencian terhadap mereka.",
  "And more importantly......": "Dan yang lebih penting......",
  "If they knew that I want to kill everyone...": "Jika mereka tahu bahwa aku ingin membunuh semua orang...",
  "However...": "Namun...",
  "Nobody suspects a single thing.\\!": "Tak seorang pun menaruh curiga sedikit pun.\\!",
  "Yet tomorrow, something will happen here beyond": "Namun besok, sesuatu akan terjadi di sini di luar",
  "their worst nightmares.": "mimpi terburuk mereka.",
  "Do you want to attack the school?": "Apakah kamu ingin menyerang sekolah?",
  "\\I[93] Yumi Mode": "\\I[93] Mode Yumi",
  "\\I[124] \\V[39] \\I[125] \\V[40]": "\\I[124] \\V[39] \\I[125] \\V[40]",
  "After Mom died, Dad would get drunk and yell at me.": "Setelah Ibu meninggal, Ayah sering mabuk dan membentakku.",
  "Yet a few days before he disappeared, it was as if": "Namun beberapa hari sebelum dia menghilang, seolah-olah",
  "he had lost his voice entirely.": "dia telah kehilangan suaranya sama sekali.",
  "he had lost his voice entirely. ": "dia telah kehilangan suaranya sama sekali. ",
  "Nobody has seen Dad for a whole month.\\!": "Tak ada yang melihat Ayah selama sebulan penuh.\\!",
  "Suicide is the only explanation. But even if he were still": "Bunuh diri adalah satu-satunya penjelasan. Tapi andai dia masih",
  "alive today, I wouldn't turn back.": "hidup hari ini, aku tidak akan berbalik arah.",
  "I feel no sorrow.\\!": "Aku tidak merasakan kesedihan sedikit pun.\\!",
  "Just like when Mom killed herself, all I felt was rage. \\!\"Again,": "Sama seperti saat Ibu bunuh diri, yang kurasakan hanyalah amarah. \\!\"Lagi-lagi,",
  "it happens again, leaving me alone to suffer.\"": "hal ini terjadi lagi, meninggalkanku sendirian untuk menderita.\"",
  "Both Mom and Dad abandoned me.\\!": "Baik Ibu maupun Ayah menelantarkanku.\\!",
  "Yet I didn't end up empty-handed.": "Namun aku tidak berakhir dengan tangan hampa.",
  "...At least Dad left me his guns.": "...Setidaknya Ayah mewariskan senjata-senjatanya untukku.",
  "Half a year ago, my mother took her own life.\\!": "Setengah tahun lalu, ibuku mengakhiri hidupnya sendiri.\\!",
  "A month ago, my father walked out and never returned.": "Sebulan lalu, ayahku pergi dan tidak pernah kembali.",
  "No matter how you look at it, this was never a happy home. Yet": "Bagaimanapun melihatnya, ini bukan rumah yang bahagia. Namun",
  "still, I clung to the hope that \"one day things will get": "aku masih berpegang pada harapan bahwa \"suatu hari nanti segalanya akan",
  "better.\"": "membaik.\"",
  "...Yet this world\\.": "...Namun dunia ini\\.",
  "tramples even such modest wishes into the dirt.": "menginjak-injak harapan sekecil itu ke dalam lumpur.",
  "The only food left is instant ramen, canned goods,": "Makanan yang tersisa hanyalah mi instan, makanan kaleng,",
  "and curry. The fridge is packed with expired condiments,": "dan kari. Kulkas dipenuhi bumbu kedaluwarsa,",
  "starving for anything fresh.": "sama sekali tak ada yang segar.",
  "My mentally ill mother frequently cut herself with kitchen knives.\\!": "Ibuku yang sakit jiwa sering melukai dirinya sendiri dengan pisau dapur.\\!",
  "After that, no knives were kept in the kitchen.": "Setelah itu, tak ada lagi pisau yang disimpan di dapur.",
  "The gas was shut off a long time ago.\\!": "Gas sudah diputus sejak lama.\\!",
  "So to heat the chemicals required for bomb making,": "Jadi untuk memanaskan bahan kimia pembuatan bom,",
  "I had to buy a portable tabletop gas stove.": "aku harus membeli kompor gas meja portabel.",
  "The landline was cut off due to unpaid bills.\\!": "Telepon rumah diputus karena tagihan menunggak.\\!",
  "Though, the only calls that ever came were debt": "Lagipula, satu-satunya panggilan yang masuk hanyalah dari",
  "collectors demanding money and pushing loans.": "penagih utang yang menuntut uang dan menawarkan pinjaman.",
  "The phone rang hundreds, maybe thousands of times,\\!": "Telepon berdering ratusan, mungkin ribuan kali,\\!",
  "and all I ever heard was money, money, money...": "dan yang kudengar hanyalah uang, uang, uang...",
  "Every time, I explained that my parents were dead, and": "Setiap kali, kujelaskan bahwa orang tuaku sudah tiada, dan",
  "every time, they scoffed and called me a liar.": "setiap kali pula mereka mencibir dan menyebutku pembohong.",
  "A reason to hesitate pulling the trigger is something": "Alasan untuk ragu menarik pelatuk adalah sesuatu",
  "I could never find in this society.": "yang tak pernah bisa kutemukan dalam masyarakat ini.",
  "All these magazines are several years old.\\!": "Semua majalah ini sudah berusia beberapa tahun.\\!",
  "Not a single new one.": "Tak ada satu pun yang baru.",
  "Dusty junk carelessly piled into a heap.\\!": "Barang rongsokan berdebu ditumpuk begitu saja.\\!",
  "No matter how much I searched through it, I couldn't find": "Sebanyak apa pun aku mencarinya, aku tak bisa menemukan",
  "a single family photo from my childhood.": "satu pun foto keluarga dari masa kecilku.",
  "\\C[4]News Anchor\\C[0]": "\\C[4]Penyiar Berita\\C[0]",
  "\"A former student broke into the school with firearms to indiscriminately": "\"Seorang mantan siswa menyusup ke sekolah dengan senjata api untuk secara membabi buta",
  "slaughter anyone in sight――\"": "membantai siapa pun yang terlihat――\"",
  "\"The tragedy claimed the lives of 30 students and faculty.": "\"Tragedi ini merenggut nyawa 30 siswa dan staf pengajar.",
  "It has been called the deadliest mass shooting since the end": "Ini disebut sebagai penembakan massal paling mematikan sejak berakhirnya",
  "of World War II.\"": "Perang Dunia II.\"",
  "\"Nonetheless, debates over gun control remain at a total": "\"Meskipun demikian, perdebatan tentang pengendalian senjata tetap",
  "standstill. \\!The National Rifle Association, staunchly opposing": "buntu. \\!Asosiasi Senjata Api Nasional, yang menolak keras",
  "restrictions, advocates arming teachers with concealed": "pembatasan, menyarankan mempersenjatai guru dengan",
  "handguns inside schools.\"": "pistol tersembunyi di dalam sekolah.\"",
  "\"At the same time, they point to video games, comics, and anime": "\"Pada saat yang sama, mereka menuding game, komik, dan anime",
  "as the root cause of youth violence, urging authorities": "sebagai akar penyebab kekerasan remaja, mendesak pihak berwenang",
  "to strictly regulate their distribution.\"": "untuk memperketat peredarannya.\"",
  "Whether it was the day my mother committed suicide,": "Baik saat hari ibuku bunuh diri,",
  "or the day my father vanished without a trace.\\!": "maupun saat ayahku menghilang tanpa jejak.\\!",
  "Every single day... I gaze at the school from this window.": "Setiap hari... aku menatap sekolah dari jendela ini.",
  "And while my life fell completely apart, ": "Dan sementara hidupku hancur berantakan, ",
  "the view from here never changed at all.": "pemandangan dari sini tak pernah berubah sedikit pun.",
  "So heartbreaking... \\!and so unjust.\\!": "Begitu memilukan... \\!dan begitu tidak adil.\\!",
  "I am the only one plummeting into the abyss.": "Hanya aku yang terperosok ke dalam jurang.",
  "I am the only one hurtling toward death.": "Hanya aku yang meluncur menuju kematian.",
  "......Meanwhile.": "......Sementara itu.",
  "......They continue living as if nothing happened.": "......Mereka terus hidup seolah tak ada yang terjadi.",
  "...Yet today, all of that comes to an end.": "...Namun hari ini, semua itu akan berakhir.",
  "...From this day on,\\| they will suffer right alongside me.": "...Mulai hari ini,\\| mereka akan menderita bersamaku.",
  "Empty bottles of shochu and cans of strong chuhai": "Botol kosong shochu dan kaleng chuhai keras",
  "are strewn all over the place.\\!": "berserakan di mana-mana.\\!",
  "My father drank non-stop right up until he disappeared.": "Ayahku minum tanpa henti sampai hari dia menghilang.",
  "Without noticing, thoughts of killing people consumed me.": "Tanpa kusadari, pikiran untuk membunuh orang telah merasukiku.",
  "Long before my mother committed suicide,": "Jauh sebelum ibuku bunuh diri,",
  "I pictured myself standing with a knife in pocket and a": "aku membayangkan diriku berdiri dengan pisau di saku dan",
  "shotgun in hand, surrounded by mounds of corpses.": "shotgun di tangan, dikelilingi oleh tumpukan mayat.",
  "Guilt from these fantasies never burdened me.\\!": "Rasa bersalah dari fantasi ini tak pernah membebaniku.\\!",
  "Not because I lack a conscience.": "Bukan karena aku tak punya nurani.",
  "There is simply nobody around me worth caring about.\\!": "Hanya saja tak ada seorang pun di sekitarku yang pantas dipedulikan.\\!",
  "And that is why my conscience is completely clear.": "Dan itulah mengapa hati nuraniku benar-benar tenang.",
  "If I had a real friend, I would never harm them.": "Jika aku punya teman sejati, aku tak akan pernah menyakitinya.",
  "...Yet I have no friends.\\!": "...Namun aku tak punya teman.\\!",
  "So I will slaughter everyone without batting an eye.": "Jadi aku akan membantai semua orang tanpa berkedip.",
  "The school can be seen from here.\\!": "Sekolah bisa terlihat dari sini.\\!",
  "The school I despise so deeply.": "Sekolah yang sangat kubenci setengah mati.",
  "It's tragic: while my life crumbled away,": "Sungguh tragis: sementara hidupku hancur lebur,",
  "this view remained utterly unchanged.": "pemandangan ini tetap tak berubah sama sekali.",
  "Every school bell heralded the crowd of students,": "Setiap bunyi bel sekolah menyambut kerumunan siswa,",
  "laughing loudly at my misfortune.": "yang tertawa keras atas kemalanganku.",
  "laughing loudly at my misery.": "yang tertawa keras atas penderitaanku.",
  "...Yet sooner or later, everything comes to an end.\\!": "...Namun cepat atau lambat, segalanya akan berakhir.\\!",
  "Starting today, we will become true friends.\\!": "Mulai hari ini, kita akan menjadi teman sejati.\\!",
  "And suffer together as one.": "Dan menderita bersama sebagai satu kesatuan.",
  "If I kill myself right now,\\!": "Jika aku bunuh diri sekarang juga,\\!",
  "the school teachers will undoubtedly preach————": "guru-guru sekolah pasti akan berkhotbah————",
  "\"What a tragedy.\",\\. \"She had her whole life ahead.\",\\. and all": "\"Sungguh tragedi.\",\\. \"Masa depannya masih panjang.\",\\. dan segala",
  "\"What a tragedy.\",\\. \"He had his whole life ahead.\",\\. and all": "\"Sungguh tragedi.\",\\. \"Masa depannya masih panjang.\",\\. dan segala",
  "that sort of useless, hollow pity.": "rasa iba kosong yang tak berguna itu.",
  "\"Life is precious.\",\\. \"You're not alone.\",\\.": "\"Hidup itu berharga.\",\\. \"Kamu tidak sendirian.\",\\.",
  "\"If you have troubles, just talk to someone.\",\\.": "\"Jika ada masalah, bicaralah dengan seseorang.\",\\.",
  "\"If you see someone hurting, reach out to them.\"": "\"Jika melihat seseorang terluka, rangkullah mereka.\"",
  "Hidden behind these worn-out clichés recited countless times,": "Tersembunyi di balik klise basi yang diulang tak terhitung kali,",
  "not a single heart will genuinely ache for my demise.": "tak ada satu hati pun yang tulus bersedih atas kematianku.",
  "With the passing of time, every trace of my existence": "Seiring berjalannya waktu, setiap jejak keberadaanku",
  "will slowly wash away into oblivion.\\!": "akan perlahan hanyut ke dalam kelupaan.\\!",
  "Before you know it, that I ever existed is forgotten.": "Tanpa disadari, fakta bahwa aku pernah ada akan terlupakan.",
  "...However,\\!": "...Namun,\\!",
  "I refuse to accept an ending like that.\\!": "Aku menolak menerima akhir seperti itu.\\!",
  "Even if that is what everyone wants.": "Bahkan jika itu yang diinginkan semua orang.",
  "Even if I have only a single bullet left, ": "Bahkan jika aku hanya memiliki sebutir peluru tersisa, ",
  "I will use it to shoot everyone.": "aku akan menggunakannya untuk menembak semua orang.",
  "After all the pain I have endured.\\!": "Setelah semua rasa sakit yang kutanggung.\\!",
  "After all the rage and hatred I have harbored.": "Setelah semua amarah dan kebencian yang kupendam.",
  "I will not die in vain.\\!": "Aku tidak akan mati sia-sia.\\!",
  "Don't even dream of it.": "Jangan harap.",
  "Usually I just sit in my room without bathing.\\.": "Biasanya aku hanya berdiam diri di kamar tanpa mandi.\\.",
  "Yet this morning, I took a refreshing shower.\\.": "Namun pagi ini, aku mandi dengan segar.\\.",
  "Today is the first and last day of my life when I": "Hari ini adalah hari pertama dan terakhir dalam hidupku saat aku",
  "become the star on center stage.": "menjadi bintang di panggung utama.",
  "My mother hanged herself right in this bathroom.\\!": "Ibuku gantung diri tepat di kamar mandi ini.\\!",
  "I was the first one to find her.": "Akulah orang pertama yang menemukannya.",
  "...Not that it surprised me all that much.\\!": "...Bukannya itu mengejutkanku.\\!",
  "I had known for years that this day was inevitable.": "Aku sudah tahu bertahun-tahun bahwa hari ini tak terelakkan.",
  "And I was prepared for it.": "Dan aku sudah siap untuk itu.",
  "Yet even so, my mother's death scarred me deeply.\\!": "Namun meski begitu, kematian ibuku melukaiku begitu dalam.\\!",
  "At that moment, all the rage and hatred that had built up": "Pada saat itu, semua amarah dan kebencian yang menumpuk",
  "inside me finally broke free.": "di dalam diriku akhirnya meledak.",
  "My mother died holding a grudge against the entire world.\\!": "Ibuku meninggal dengan memendam dendam pada seluruh dunia.\\!",
  "...A different end awaits me.": "...Akhir yang berbeda menantiku.",
  "I will make crowds of people die despising me,\\!": "Aku akan membuat kerumunan orang mati membenciku,\\!",
  "and I will laugh as I watch their final breaths.": "dan aku akan tertawa menyaksikan napas terakhir mereka.",
  "Nothing is simpler than making a bomb at home.\\!": "Tak ada yang lebih mudah daripada membuat bom di rumah.\\!",
  "You search for the recipe on the internet,": "Cari resepnya di internet,",
  "follow the steps one by one, and the bomb is done.": "ikuti langkah-langkahnya satu per satu, dan bom pun jadi.",
  "Strictly speaking, however, when you have firearms,": "Namun sebenarnya, saat kamu punya senjata api,",
  "there's no reason to stop at basic firepower.": "tak ada alasan untuk berhenti pada daya tembak standar.",
  "So I started looking into creating something far more": "Maka aku mulai mencari cara membuat sesuatu yang jauh lebih",
  "destructive. \\!Researching past bombing incidents, I": "merusak. \\!Meneliti insiden pengeboman masa lalu, aku",
  "wanted explosives that could rival the effectiveness": "menginginkan bahan peledak yang menandingi efektivitas",
  "of any firearm.": "senjata api mana pun.",
  "Even after getting into chemical explosive synthesis,": "Bahkan setelah mendalami sintesis peledak kimiawi,",
  "I had no intention of stopping there.": "aku tak berniat berhenti di situ.",
  "To be honest, I didn't really enjoy using nail polish": "Sejujurnya, aku tidak terlalu suka memakai pembersih kutek",
  "remover and cleaning detergent to craft bombs.": "dan deterjen pembersih untuk membuat bom.",
  "After several experiments, I produced three types of bombs.\\!": "Setelah beberapa percobaan, aku berhasil membuat tiga jenis bom.\\!",
  "Will their destructive power justify my efforts?\\!": "Apakah daya ledaknya sepadan dengan usahaku?\\!",
  "I can hardly wait to find out.": "Aku hampir tak sabar untuk membuktikannya.",
  "I crafted several homemade pipe bombs.\\!": "Aku membuat beberapa bom pipa rakitan.\\!",
  "Though guns are enough for what I need,\\!": "Meski senjata api sudah cukup untuk keperluanku,\\!",
  "leaving without bringing a few would be a waste.": "pergi tanpa membawanya akan terasa sia-sia.",
  "I gathered all the necessary instructions from the": "Kukumpulkan semua petunjuk yang diperlukan dari",
  "internet. \\!At the same time, numerous articles and": "internet. \\!Bersamaan dengan itu, berbagai artikel dan",
  "documentaries about terrorists proved useful.": "dokumenter tentang teroris terbukti sangat berguna.",
  "I cannot fathom killing others in the name of religion.\\!": "Aku tak habis pikir membunuh orang lain demi agama.\\!",
  "God? Paradise? Souls?": "Tuhan? Surga? Jiwa?",
  "What is the point of any of that.": "Apa gunanya semua itu.",
  "Over the past few months, I read endlessly about": "Selama beberapa bulan terakhir, aku tak henti membaca tentang",
  "terrorist attacks and mass murder incidents.": "serangan teroris dan insiden pembunuhan massal.",
  "Among them all, what captivated me most was": "Di antara semuanya, yang paling memikat perhatianku adalah",
  "the mass murder where 20 students lost their lives": "pembantaian massal di mana 20 siswa kehilangan nyawa",
  "right in the school hallway.\\!": "tepat di koridor sekolah.\\!",
  "The perpetrator was Yumi Tojo.": "Pelakunya adalah Yumi Tojo.",
  "I still remember the public outcry. Back then, I was": "Aku masih ingat kehebohan publik. Saat itu, aku masih",
  "only in elementary school.": "duduk di sekolah dasar.",
  "Everyone gasped that \"something horrifying occurred\",": "Semua orang gempar bahwa \"sesuatu yang mengerikan telah terjadi\",",
  "sparking a massive sensation across the city.": "memicu sensasi luar biasa di seluruh penjuru kota.",
  "Now, in the present, I find myself plotting a mass": "Kini, saat ini, aku mendapati diriku merencanakan penembakan",
  "shooting of my own, perhaps even taking": "massal versiku sendiri, bahkan mungkin mengambil",
  "inspiration from that very incident.\\!": "inspirasi dari insiden itu.\\!",
  "Obnoxious classmates, meddlesome teachers.\\!": "Teman sekelas yang menyebalkan, guru-guru yang suka ikut campur.\\!",
  "I wonder what it will feel like to kill them.": "Aku penasaran bagaimana rasanya membunuh mereka.",
  "For the first time in my short life,": "Untuk pertama kali dalam hidupku yang singkat,",
  "I look forward to tomorrow with excitement.": "aku menantikan hari esok dengan penuh antusias.",
  "I genuinely cannot wait to wipe them all out.": "Aku benar-benar tak sabar menghabisi mereka semua.",
  "\\C[6]Computer\\C[0]": "\\C[6]Komputer\\C[0]",
  "Here you can adjust settings and view": "Di sini kamu bisa menyesuaikan pengaturan dan melihat",
  "various game information.": "berbagai informasi game.",
  "\\C[6]Bed\\C[0]": "\\C[6]Tempat Tidur\\C[0]",
  "You can save your game here.": "Kamu bisa menyimpan gamemu di sini.",
  "\\C[6]Gun Locker\\C[0]": "\\C[6]Loker Senjata\\C[0]",
  "Here you can purchase and equip weapons and skills. ": "Di sini kamu bisa membeli dan memasang senjata serta keahlian. ",
  "\\C[6]Cheat Code\\C[0]": "\\C[6]Kode Cheat\\C[0]",
  "Would you like to receive 1,000,000 SP?": "Apakah kamu ingin menerima 1.000.000 SP?",
  "You are now the proud owner of 1,000,000 SP!!!": "Kamu sekarang memiliki 1.000.000 SP!!!",
  "\\C[6]Cheat Activated!\\C[0]\\. Received 9,999,999 SP!": "\\C[6]Cheat Diaktifkan!\\C[0]\\. Menerima 9.999.999 SP!",
  "The obsession with \"slaughtering people\" never left me.\\!": "Obsesi \"membantai orang\" tak pernah meninggalkanku.\\!",
  "It was burned into my mind like a brand, following": "Itu terpatri dalam benakku bagai cap besi panas, mengikutiku",
  "me wherever I went.": "ke mana pun aku melangkah.",
  "While everyone took me for a ": "Sementara semua orang menganggapku ",
  "\"quiet kid\", \"gloomy kid\", \"innocent kid\"—": "\"anak pendiam\", \"anak suram\", \"anak polos\"—",
  "I butchered them over and over in my imagination.": "aku membantai mereka berulang kali dalam imajinasiku.",
  "Nobody noticed my homicidal urges.\\!": "Tak ada yang menyadari hasrat membunuhku.\\!",
  "Not a single soul.\\!": "Tak satu jiwa pun.\\!",
  "Even though they had every warning sign and opportunity": "Meskipun mereka punya setiap tanda peringatan dan kesempatan",
  "to see it.": "untuk melihatnya.",
  "I knew I was losing my sanity.\\!": "Aku tahu aku sedang kehilangan akal sehatku.\\!",
  "Blinded by malice and hatred,": "Dibutakan oleh dendam dan kebencian,",
  "I spiraled into a cycle of endless self-destruction.": "aku terjerumus ke dalam lingkaran kehancuran diri tanpa akhir.",
  "Even if I massacre the entire school,": "Bahkan jika aku membantai seisi sekolah,",
  "things won't get any better.": "keadaan tak akan menjadi lebih baik.",
  "Yet knowing full well, I never stopped planning.": "Namun meski tahu betul, aku tak pernah berhenti berencana.",
  "In order to kill everyone,": "Demi membunuh semua orang,",
  "I studied past mass shootings and terror attacks,": "aku mempelajari penembakan massal dan serangan teror masa lalu,",
  "planned every detail, gathered gear, and trained.": "merencanakan setiap detail, mengumpulkan perlengkapan, dan berlatih.",
  "————If my mind were still lucid...": "————Andai pikiranku masih jernih...",
  "Would I continue dragging out this miserable, empty": "Apakah aku akan terus menyeret hidup yang hampa dan sengsara",
  "existence, clinging to a naive fairy tale that": "ini, berpegang pada dongeng naif bahwa",
  "someday a knight in shining armor will rescue me?": "suatu hari ksatria berbaju zirah akan menyelamatkanku?",
  "Or, for everyone's peace of mind,\\!": "Atau, demi ketenangan pikiran semua orang,\\!",
  "would I choose to harm no one and quietly kill myself?": "apakah aku akan memilih tak menyakiti siapa pun lalu diam-diam bunuh diri?",
  "...If that is how a sane person would act,\\!": "...Jika begitulah orang waras bertindak,\\!",
  "then I no longer harbor the slightest doubt about": "maka aku tak lagi memiliki keraguan sedikit pun untuk",
  "carrying out this school shooting.": "melakukan penembakan di sekolah ini.",
  "People extinguish every ounce of happiness in me.\\!": "Orang-orang memadamkan setiap sisa kebahagiaan dalam diriku.\\!",
  "Even my own existence is pitch-black despair.\\!": "Bahkan keberadaanku sendiri hanyalah keputusasaan gulita.\\!",
  "Everything is completely and utterly ruined.": "Segalanya telah hancur luluh lantak.",
  "All I ever wanted was a quiet, peaceful life.": "Yang kuinginkan hanyalah hidup tenang dan damai.",
  "Yet even that...": "Namun bahkan hal itu...",
  "Nobody seemed to give a damn,": "Tak ada seorang pun yang peduli,",
  "which only tore at my heart even more.": "yang semakin merobek-robek hatiku.",
  "Even when I lie down in bed,": "Bahkan saat aku berbaring di tempat tidur,",
  "tormenting thoughts refuse to leave my head.\\!": "pikiran yang menyiksa menolak pergi dari kepalaku.\\!",
  "And if I do fall asleep, nightmares inevitably wake me...": "Dan jika aku tertidur, mimpi buruk pasti membangunkanku...",
  "Only death could ever awaken me from this": "Hanya kematian yang bisa membangunkanku dari",
  "nightmare. Only death will put an end to it all.\\!": "mimpi buruk ini. Hanya kematian yang akan mengakhiri segalanya.\\!",
  "...I can't remember when I started thinking like this.": "...Aku tak ingat kapan mulai berpikir seperti ini.",
  "...However,\\! that thought didn't deceive me for long.\\!": "...Namun,\\! pikiran itu tak menipuku lama-lama.\\!",
  "Witnessing my mother's death filled me with doubt about": "Menyaksikan kematian ibuku memenuhiku dengan keraguan tentang",
  "everything.": "segalanya.",
  "...Even if I die, everyone else remains.\\!": "...Bahkan jika aku mati, orang lain tetap hidup.\\!",
  "The ones responsible for all my torment would never face": "Mereka yang bertanggung jawab atas penderitaanku tak akan menghadapi",
  "their rightful punishment.": "hukuman yang setimpal.",
  "Even if I die, the nightmare won't end.": "Bahkan jika aku mati, mimpi buruk ini tak akan berakhir.",
  "Therefore, before I die, there is something I must do.": "Oleh karena itu, sebelum aku mati, ada sesuatu yang harus kulakukan.",
  "Those who inflicted this agony upon me,\\!": "Mereka yang menimpakan penderitaan ini padaku,\\!",
  "will die by my hands, no matter what it takes.": "akan mati di tanganku, apa pun taruhannya.",
  "\\C[6]Target Practice\\C[0]": "\\C[6]Latihan Menembak\\C[0]",
  "Hit all the empty cans placed around the room!": "Tembak semua kaleng kosong yang ada di ruangan!",
  "\\>\\C[8]Incomplete: Clear in under 12 seconds\\C[0]": "\\>\\C[8]Belum Selesai: Selesaikan di bawah 12 detik\\C[0]",
  "\\>Record: \\V[24] second(s).": "\\>Rekor: \\V[24] detik.",
  "This is your bedroom.\\!": "Ini adalah kamar tidurmu.\\!",
  "Here you can change your equipment and game settings.": "Di sini kamu bisa mengganti perlengkapan dan setelan game.",
  "The \\C[4]blue arrow\\C[0] is pointing to the \\C[6]gun locker\\C[0].\\!": "\\C[4]Panah biru\\C[0] menunjuk ke arah \\C[6]loker senjata\\C[0].\\!",
  "In it, you can purchase weapons and skills,": "Di dalamnya, kamu bisa membeli senjata dan keahlian,",
  "and then equip them.": "lalu memasangnya.",
  "The table next to the locker allows you to practice": "Meja di sebelah loker memungkinkanmu berlatih",
  "shooting with airsoft guns.": "menembak dengan pistol airsoft.",
  "You can save the game at the \\C[6]bed\\C[0].": "Kamu bisa menyimpan game di \\C[6]tempat tidur\\C[0].",
  "Game settings can be adjusted at the \\C[6]computer\\C[0]": "Pengaturan game bisa disesuaikan di \\C[6]komputer\\C[0]",
  "next to the bed.": "di sebelah tempat tidur.",
  "You can also view your": "Kamu juga bisa melihat",
  "\\C[4]achievements, manuals, and records\\C[0].": "\\C[4]prestasi, panduan, dan rekormu\\C[0].",
  "And that concludes the tutorial!\\|": "Dan itulah akhir dari tutorial!\\|",
  "Thank you for your patience!": "Terima kasih atas kesabaranmu!",
  "When you're ready,\\.": "Saat kamu sudah siap,\\.",
  "leave the house through the front door and head to school!": "keluarlah lewat pintu depan dan pergilah ke sekolah!",
  "\\C[6]Basics: Firearm Training\\C[0]\\!": "\\C[6]Dasar: Pelatihan Senjata Api\\C[0]\\!",
  "Welcome to the tutorial!\\!": "Selamat datang di tutorial!\\!",
  "Here you will learn the basic controls of the game.": "Di sini kamu akan mempelajari kontrol dasar permainan.",
  "First, let's practice \\C[4]Aiming and Shooting\\C[0].": "Pertama, mari berlatih \\C[4]Membidik dan Menembak\\C[0].",
  "Press \\C[6]Space\\C[0] to fire your weapon.": "Tekan \\C[6]Spasi\\C[0] untuk menembakkan senjatamu.",
  "Hold \\C[6]E\\C[0] to enter Aim Mode to improve your hit rate.": "Tahan \\C[6]E\\C[0] untuk masuk Mode Membidik agar akurasi meningkat.",
  "Press \\C[6]R\\C[0] to reload your ammunition.": "Tekan \\C[6]R\\C[0] untuk mengisi ulang (reload) amunisi.",
  "Press \\C[6]Q\\C[0] to switch between your primary weapon and sidearm.": "Tekan \\C[6]Q\\C[0] untuk beralih antara senjata utama dan pistol sampingan.",
  "Press \\C[6]G\\C[0] to throw an explosive grenade.": "Tekan \\C[6]G\\C[0] untuk melempar granat peledak.",
  "Press \\C[6]V\\C[0] for a quick melee attack with your knife.": "Tekan \\C[6]V\\C[0] untuk serangan jarak dekat cepat dengan pisau.",
  "Press \\C[6]3\\C[0] to draw your melee knife.": "Tekan \\C[6]3\\C[0] untuk menghunus pisau jarak dekatmu.",
  "　\\{Police!\\. Hands in the air!": "　\\{Polisi!\\. Angkat tangan!",
  "　\\{Hands up or I'll shoot!": "　\\{Angkat tangan atau kutembak!",
  "　\\{Hands up!": "　\\{Angkat tangan!",
  "　\\{Police! \\.Hands in the air!": "　\\{Polisi! \\.Angkat tangan!",
  "　On your knees!\\!": "　Berlutut sekarang!\\!",
  "　Don't move!\\.": "　Jangan bergerak!\\.",
  "　Don't resist! Stay down!": "　Jangan melawan! Tetap tiarap!",
  "Even though everyone says,": "Meskipun semua orang berkata,",
  "\"Life is a precious miracle given to us.\"": "\"Hidup adalah mukjizat berharga yang diberikan kepada kita.\"",
  "If there were no life, there would be no pain.\\!": "Jika tak ada kehidupan, tak akan ada rasa sakit.\\!",
  "If there were no life, no blood would ever be spilled.\\!": "Jika tak ada kehidupan, tak ada darah yang akan tertumpah.\\!",
  "If there were no life, no one would have to suffer loss.": "Jika tak ada kehidupan, tak ada yang harus menderita kehilangan.",
  "Well, if you still want to preach that, when you or": "Nah, jika kamu masih ingin mengkhotbahkan itu saat kamu atau",
  "someone you love meets tragedy, ends up crippled, or": "orang yang kamu cintai tertimpa tragedi, berakhir cacat, atau",
  "dies a horrible death......": "mati dengan mengenaskan......",
  "Then celebrate!": "Maka rayakanlah!",
  "After all, that's the dogma of your \"miraculous life.\"": "Lagipula, itulah dogma dari \"kehidupan mukjizat\" kalian.",
  "Ah, life is wonderful. \\!Life is miraculous.\\!": "Ah, hidup itu indah. \\!Hidup itu ajaib.\\!",
  "Even when subsonic bullets blow brains out.": "Bahkan saat peluru subsonik meledakkan otak.",
  "Even when pipe bombs rip bodies to shreds.": "Bahkan saat bom pipa mencabik-cabik tubuh.",
  "It's been years since our last family dinner.": "Sudah bertahun-tahun sejak makan malam keluarga terakhir kami.",
  "\\!Ever since, I have always eaten alone.": "\\!Sejak saat itu, aku selalu makan sendirian.",
  "After Mom killed herself, the thought crossed my mind": "Setelah Ibu bunuh diri, terlintas pikiran di benakku",
  "more than once to go hunt down and butcher a couple": "lebih dari sekali untuk memburu dan membantai beberapa",
  "of happy random families on the street.": "keluarga bahagia di jalanan.",
  "The very concept of a \"happy family\" disgusts me.": "Konsep \"keluarga bahagia\" membuatku sangat jijik.",
  "...Yet in the end, my sights settled on the school.\\!": "...Namun pada akhirnya, pandanganku tertuju pada sekolah.\\!",
  "Destroying just one or two families would never satisfy": "Menghancurkan satu atau dua keluarga tak akan pernah memuaskan",
  "the fury burning inside me.": "amarah yang membara di dalam diriku.",
  "I'll destroy dozens\\!—no—hundreds of families!\\!": "Akan kuhancurkan puluhan\\!—bukan—ratusan keluarga!\\!",
  "Countless households will plunge into grief!": "Keluarga tak terhitung jumlahnya akan terjerumus dalam duka!",
  "......In summary.": "......Kesimpulannya.",
  "The endless days of isolation spent here weren't in": "Hari-hari isolasi tanpa akhir yang kuhabiskan di sini tidaklah",
  "vain.": "sia-sia.",
  "Even if I have only a single bullet left,": "Bahkan jika aku hanya memiliki sebutir peluru tersisa,",
  "A pile of overdue notices.\\! The grace period": "Tumpukan surat peringatan jatuh tempo.\\! Masa tenggang",
  "before the power cutoff has already passed.": "sebelum pemutusan listrik sudah lama lewat.",
  "First the gas, and now the electricity too will": "Pertama gas, dan sekarang listrik pun akan",
  "abandon this house very soon.": "segera meninggalkan rumah ini.",
  "Witnessing how my mother perished, there was no way": "Menyaksikan bagaimana ibuku tewas, mustahil",
  "I would let myself become just another number in suicide": "aku membiarkan diriku menjadi sekadar angka dalam statistik",
  "statistics.": "bunuh diri.",
  "My life is merely a stepping stone for someone else,\\!": "Hidupku hanyalah batu loncatan bagi orang lain,\\!",
  "leaving me only to watch others smile until": "membuatku hanya bisa menonton orang lain tersenyum sampai",
  "the day I drop dead.\\!": "hari kematianku tiba.\\!",
  "I have zero desire to put up with that.": "Aku sama sekali tak sudi menerima hal itu.",
  "...Yet sometimes I catch myself wondering,\\!": "...Namun terkadang aku mendapati diriku bertanya-tanya,\\!",
  "what it feels like to love and be loved...": "bagaimana rasanya mencintai dan dicintai...",
  "A warm hug, words of encouragement,\\!": "Pelukan hangat, kata-kata penyemangat,\\!",
  "holding hands with someone as you walk through the park.": "bergandengan tangan dengan seseorang berjalan melintasi taman.",
  "...Did I ever experience any of that?": "...Pernahkah aku mengalami semua itu?",
  "I cannot recall.": "Aku tidak bisa mengingatnya.",
  "All my memories are coated in grey dust and bitter tears.": "Semua ingatanku terselimuti debu abu-abu dan air mata pahit.",
  "Empty shelves that used to hold textbooks and novels.": "Rak-rak kosong yang dulunya memuat buku pelajaran dan novel.",
  "I burned them all in the backyard long ago.": "Aku membakar semuanya di halaman belakang sejak lama.",
  "Knowledge and stories are useless to someone about to die.": "Ilmu dan cerita tak ada gunanya bagi seseorang yang akan mati.",
  "A crack in the wall, slowly expanding over the years.": "Retakan di dinding, perlahan melebar selama bertahun-tahun.",
  "Just like the fracture inside my own soul.": "Persis seperti retakan di dalam jiwaku sendiri.",
  "The school bell rings in the distance.\\!": "Bel sekolah berbunyi di kejauhan.\\!",
  "Sound of freedom for them... \\!sound of execution for me.": "Suara kebebasan bagi mereka... \\!suara eksekusi bagiku.",
  "Tomorrow, that bell will ring for the final time.": "Besok, bel itu akan berdentang untuk yang terakhir kali.",
  "Target practice cans.": "Kaleng-kaleng latihan menembak.",
  "Ready for testing.": "Siap untuk pengujian.",
  "Target cleared!": "Target terselesaikan!",
  "New Record!": "Rekor Baru!",
  "Practice finished.": "Latihan selesai.",
  "that no matter how hard I struggle, my fate was already sealed:": "bahwa sekeras apa pun aku berjuang, nasibku telah digariskan:",
  "a tragic finale, never having glimpsed even": "sebuah akhir tragis, tanpa pernah melihat sedikit pun",
  "the faintest sliver of hope or salvation.": "secercah harapan atau keselamatan.",
  "Even if that is God's will, I will never accept such a": "Bahkan jika itu kehendak Tuhan, aku takkan pernah menerima nasib",
  "fate!\\!": "seperti itu!\\!",
  "Why was I ever born?\\!": "Mengapa aku dilahirkan?\\!",
  "Why were any of you born?": "Mengapa kalian semua dilahirkan?",
  "Neither God nor anyone else dictates the meaning of life.\\!": "Bukan Tuhan ataupun orang lain yang menentukan arti hidupku.\\!",
  "I decide it, and only I.": "Akulah yang menentukannya, hanya aku.",
  "\"――During police interrogation, the girl confessed:": "\"――Saat interogasi polisi, gadis itu mengaku:",
  "\\\"I just wanted to kill someone. Anyone would do.\\\"\"": "\\\"Aku hanya ingin membunuh seseorang. Siapa pun boleh.\\\"\"",
  "\"――In recent years, school shooting incidents have been on": "\"――Dalam beberapa tahun terakhir, insiden penembakan sekolah kian",
  "the rise nationwide.\"": "meningkat di seluruh negeri.\"",
  "\"On December 15, 2014, a first-year high school student": "\"Pada 15 Desember 2014, seorang siswa kelas satu SMA",
  "at Yamazaki High threw explosive devices into multiple": "di SMA Yamazaki melempar bahan peledak ke beberapa",
  "classrooms and brandished firearms to indiscriminately": "ruang kelas dan mengacungkan senjata api untuk membabi buta",
  "And while my life fell completely apart,": "Dan sementara hidupku hancur lebur,",
  "Here you can purchase and equip weapons and skills.": "Di sini kamu bisa membeli dan memasang senjata serta keahlian.",
  "While everyone took me for a": "Sementara semua orang menganggapku sebagai",
  "Skip the \\I[255] ending?": "Lewati ending \\I[255]?",
  "...Why. \\!Why.\\!": "...Kenapa. \\!Kenapa.\\!",
  "Everything went wrong.": "Segalanya kacau balau.",
  "I thought I would kill more.": "Kupikir aku akan membunuh lebih banyak.",
  "I was well prepared.\\!": "Aku sudah bersiap dengan matang.\\!",
  "I thought I would kill at least 10.\\!": "Kupikir aku setidaknya bisa membunuh 10 orang.\\!",
  "...But reality was harsher.": "...Namun kenyataan jauh lebih kejam.",
  "...I thought that on this day, I would finally find it.\\!": "...Kupikir pada hari ini, aku akhirnya akan menemukannya.\\!",
  "A reason to live. \\!A reason to keep suffering.": "Alasan untuk hidup. \\!Alasan untuk terus menanggung derita.",
  "But... what's the point.": "Tapi... apa gunanya.",
  "\\C[4]Police\\C[0]": "\\C[4]Polisi\\C[0]",
  "\\{Police!\\. Hands in the air!": "\\{Police!\\. Angkat tangan!",
  "\\{Hands up or I'll shoot!": "\\{Angkat tangan or I'll shoot!",
  "\\{Hands up!": "\\{Angkat tangan!",
  "Every minute, every second.": "Setiap menit, setiap detik.",
  "As long as I live, I will continue to suffer.": "Selama aku hidup, aku akan terus menderita.",
  "...There is no reason, no point in remaining in this world.": "...Tak ada alasan, tak ada gunanya tetap berada di dunia ini.",
  "...I was destined to die in this damned school.\\!": "...Aku memang ditakdirkan mati di sekolah terkutuk ini.\\!",
  "Because I couldn't kill everyone.\\!": "Karena aku tak mampu membunuh semua orang.\\!",
  "We were all born for this day.": "Kita semua terlahir demi hari ini.",
  "\\{Police! \\.Hands in the air!": "\\{Police! \\.Angkat tangan!",
  "Keep your hands up!": "Tetap angkat tanganmu!",
  "On your knees!\\!": "Berlutut sekarang!\\!",
  "Don't move!\\.": "Jangan bergerak!\\.",
  "Hands behind your head!\\!": "Tangan di belakang kepala!\\!",
  "Or I will shoot!": "Atau kutembak!",
  "......On this day.\\!": "......Pada hari ini.\\!",
  "I finally understood the true meaning of life.": "Aku akhirnya memahami arti hidup yang sesungguhnya.",
  "It felt like there was nothing but pain;\\!": "Rasanya tak ada yang tersisa selain rasa sakit;\\!",
  "it felt like I was destined to become just a digit in": "seakan aku ditakdirkan menjadi sekadar angka dalam",
  "suicide statistics.": "statistik bunuh diri.",
  "Hearing every scream.\\|": "Mendengar setiap jeritan.\\|",
  "Watching every death.\\|": "Menyaksikan setiap kematian.\\|",
  "The meaning became clearer and clearer.": "Maknanya menjadi semakin jelas dan nyata.",
  "You were all born for this day,\\|": "Kalian semua terlahir demi hari ini,\\|",
  "and I was born for this day.": "dan aku pun terlahir demi hari ini.",
  "Welcome to the tutorial! \\|": "Selamat datang di tutorial! \\|",
  "Here you will learn how to \\C[6]play this game\\C[0].": "Di sini kamu akan belajar cara \\C[6]memainkan game ini\\C[0].",
  "Movement uses the \\C[6]arrow keys\\C[0] or \\C[6]W, A, S, D\\C[0].\\!": "Gerakan menggunakan \\C[6]tombol panah\\C[0] atau \\C[6]W, A, S, D\\C[0].\\!",
  "\\C[6]Shift\\C[0] is run; running consumes stamina.": "\\C[6]Shift\\C[0] untuk lari; berlari menguras stamina.",
  "The \\C[6]green gauge\\C[0] displays your fatigue.\\.": "\\C[6]Bilah hijau\\C[0] menampilkan tingkat kelelahanmu.\\.",
  "If you completely exhaust yourself, you will not": "Jika staminamu habis total, kamu tidak akan",
  "be able to run for a while.": "bisa berlari untuk sementara waktu.",
  "Enemy attacks will also drain your stamina.\\!": "Serangan musuh juga akan menguras staminamu.\\!",
  "If you collapse in battle, you will be arrested, resulting": "Jika kamu tumbang dalam pertempuran, kamu akan ditangkap,",
  "in a \\C[6]Game Over\\C[0].": "mengakibatkan \\C[6]Game Over\\C[0].",
  "The number above your head shows your": "Angka di atas kepalamu menunjukkan",
  "\\C[6]hit rate\\C[0].": "\\C[6]tingkat akurasi tembakan\\C[0].",
  "Right now it is at \\C[6]50%\\C[0].\\!": "Saat ini berada di angka \\C[6]50%\\C[0].\\!",
  "Firing at this rate is possible.\\.": "Menembak dalam kondisi ini tetap memungkinkan.\\.",
  "Press \\C[6]E\\C[0] to enter \\C[6]aiming mode\\C[0] and": "Tekan \\C[6]E\\C[0] untuk masuk \\C[6]mode membidik\\C[0] dan",
  "increase your hit rate.": "meningkatkan akurasi tembakanmu.",
  "Try to hit the empty can in front of you.": "Cobalah menembak kaleng kosong di depanmu.",
  "Press \\C[6]E\\C[0] to \\C[6]aim\\C[0], then press": "Tekan \\C[6]E\\C[0] untuk \\C[6]membidik\\C[0], lalu tekan",
  "\\C[6]Space\\C[0] to fire.\\!": "\\C[6]Spasi\\C[0] untuk menembak.\\!",
  "If you run out of ammo, press \\C[6]R\\C[0] to": "Jika kehabisan peluru, tekan \\C[6]R\\C[0] untuk",
  "\\C[6]reload\\C[0].": "\\C[6]mengisi ulang peluru (reload)\\C[0].",
  "Oh?\\.": "Oh?\\.",
  "Looks like you hit it without aiming.": "Tampaknya kamu mengenainya tanpa membidik.",
  "You can fire even without entering \\C[6]aiming mode\\C[0].\\.": "Kamu bisa menembak bahkan tanpa masuk \\C[6]mode membidik\\C[0].\\.",
  "Whether you hit or miss is pure chance.": "Kena atau meleset itu murni keberuntungan.",
  "When you want to attack a target,": "Saat ingin menyerang target,",
  "press \\C[6]E\\C[0] to enter \\C[6]aiming mode\\C[0]": "tekan \\C[6]E\\C[0] untuk masuk \\C[6]mode membidik\\C[0]",
  "and \\C[6]aim as accurately as possible\\C[0] before taking the shot.": "dan \\C[6]bidik seakurat mungkin\\C[0] sebelum menembak.",
  "Direct hit!": "Tepat sasaran!",
  "Now you are equipped with": "Sekarang kamu dipersenjatai dengan",
  "your \\I[120]\\C[2]primary weapon\\C[0].": "\\I[120]\\C[2]senjata utama\\C[0] milikmu.",
  "In addition, you also have a \\I[121]\\C[1]handgun\\C[0]": "Selain itu, kamu juga memiliki \\I[121]\\C[1]pistol\\C[0]",
  "as a sidearm.": "sebagai senjata sampingan.",
  "You can switch between weapons at any": "Kamu bisa beralih senjata kapan saja",
  "moment by pressing the \\C[6]Q\\C[0] key.\\!": "dengan menekan tombol \\C[6]Q\\C[0].\\!",
  "Try drawing your \\I[121]\\C[1]handgun\\C[0].": "Cobalah menghunus \\I[121]\\C[1]pistol\\C[0] milikmu.",
  "Remember, switching to your handgun is always": "Ingat, beralih ke pistol sampingan selalu",
  "faster than reloading.": "lebih cepat daripada mengisi ulang peluru (reload).",
  "If enemies surround you and your mag is empty,\\.": "Jika musuh mengepungmu dan magazenmu kosong,\\.",
  "—swap to another weapon.": "—segera beralihlah ke senjata lain.",
  "A single shot is not enough to eliminate a target.\\!": "Satu tembakan tak cukup untuk menghabisi target.\\!",
  "That means you must hit them multiple times.": "Itu berarti kamu harus menembaknya berkali-kali.",
  "Try firing in the designated direction, hitting the": "Cobalah menembak ke arah yang ditentukan, mengenai",
  "target as many times as possible.": "target sebanyak mungkin tembakan.",
  "Recoil \\C[6]noticeably lowers your hit rate\\C[0].\\.": "Hentakan \\C[6]menurunkan akurasi tembakanmu\\C[0].\\.",
  "During continuous fire, make sure it does not": "Saat menembak beruntun, pastikan akurasi tidak",
  "drop too low.": "turun terlalu rendah.",
  "Excellent!\\! Every single shot hit the mark!": "Luar biasa!\\! Semua tembakan tepat sasaran!",
  "Not bad!\\.": "Lumayan!\\.",
  "Out of \\C[6]10 shots\\C[0], you hit \\C[6]\\V[27] times\\C[0]!": "Dari \\C[6]10 tembakan\\C[0], kamu mengenai target \\C[6]\\V[27] kali\\C[0]!",
  "Unbelievable!\\!": "Mustahil!\\!",
  "You didn't hit a single shot!": "Tak satu pun tembakanmu yang kena!",
  "Good aiming is the key to success.\\!": "Membidik dengan baik adalah kunci keberhasilan.\\!",
  "If you fire blindly, your target will never go down.": "Jika kamu menembak membabi buta, target takkan pernah tumbang.",
  "Before shooting, enter \\C[6]aiming mode\\C[0],\\.": "Sebelum menembak, masuklah ke \\C[6]mode membidik\\C[0],\\.",
  "\\C[6]aim carefully\\C[0], and only then pull the trigger.": "\\C[6]bidik dengan cermat\\C[0], baru tarik pelatuknya.",
  "Well now!\\.": "Aduh!\\.",
  "Only \\C[6]\\V[27] shots\\C[0] out of \\C[6]10\\C[0] hit the target.": "Hanya \\C[6]\\V[27] tembakan\\C[0] dari \\C[6]10\\C[0] yang mengenai sasaran.",
  "If you don't aim carefully,": "Jika kamu tidak membidik dengan hati-hati,",
  "you will never deal enough damage to the target.": "kamu takkan bisa memberi kerusakan yang cukup pada target.",
  "When you face a dense crowd,\\.": "Saat kamu menghadapi kerumunan padat,\\.",
  "\\I[126]\\C[6]pipe bombs\\C[0] come in very handy.": "\\I[126]\\C[6]bom pipa\\C[0] akan sangat berguna.",
  "Hold down the \\C[6]G\\C[0] key to throw a bomb.\\!": "Tahan tombol \\C[6]G\\C[0] untuk melempar bom.\\!",
  "The longer you hold it, the farther it travels.\\.": "Semakin lama ditahan, semakin jauh lemparannya.\\.",
  "Tap it just once—and the bomb drops right at your feet.": "Ketuk sekali saja—dan bom akan jatuh tepat di kakimu.",
  "Try throwing a training bomb.": "Cobalah melempar bom latihan.",
  "Shortly after landing, the bomb will detonate,": "Sesaat setelah mendarat, bom akan meledak,",
  "dealing damage to everyone in range.": "memberikan kerusakan pada siapa pun di jangkauannya.",
  "If you get caught in the blast yourself,\\.": "Jika kamu sendiri terkena ledakannya,\\.",
  "you will suffer irreversible \\C[6]fatal damage\\C[0].\\.": "kamu akan menderita \\C[6]kerusakan fatal\\C[0] permanen.\\.",
  "So after throwing, be sure to step well back.": "Maka setelah melempar, pastikan untuk mundur jauh.",
  "Most problems can be resolved with guns and": "Sebagian besar masalah bisa diselesaikan dengan senjata dan",
  "explosives.": "bahan peledak.",
  "...Yet sometimes, something simpler will do.": "...Namun terkadang, sesuatu yang lebih sederhana sudah cukup.",
  "Press \\C[6]3\\C[0] to switch to your \\I[96]\\C[6]melee weapon\\C[0].\\!": "Tekan \\C[6]3\\C[0] untuk beralih ke \\I[96]\\C[6]senjata jarak dekat\\C[0].\\!",
  "Draw it and take a look.": "Hunus dan lihatlah.",
  "Just like with firearms,": "Sama seperti senjata api,",
  "press \\C[6]Space\\C[0] to strike with your": "tekan \\C[6]Spasi\\C[0] untuk menyerang dengan",
  "melee weapon.": "senjata jarak dekatmu.",
  "Melee weapons have one significant": "Senjata jarak dekat memiliki satu keunggulan",
  "advantage.\\.": "besar.\\.",
  "They require no ammo and no reloading, so": "Senjata ini tidak butuh amunisi dan tanpa reload, jadi",
  "you can use them anytime.": "kamu bisa memakainya kapan saja.",
  "They also do not rely on hit rate,": "Serangannya juga tidak bergantung pada akurasi,",
  "however, the more exhausted you become,": "namun semakin lelah dirimu,",
  "the weaker your strikes will be.": "semakin lemah pula tebasan seranganmu.",
  "Keep in mind that attacking drains your": "Ingatlah bahwa menyerang akan menguras",
  "stamina. This makes relying on melee weapons": "staminamu. Ini membuat mengandalkan senjata tajam",
  "risky against targets capable of fighting": "berisiko saat melawan target yang mampu",
  "back.": "melawan balik.",
  "If you want to switch back to": "Jika kamu ingin beralih kembali ke",
  "firearms:\\!": "senjata api:\\!",
  "press \\C[6]1\\C[0] to select your primary weapon;\\.": "tekan \\C[6]1\\C[0] untuk memilih senjata utama;\\.",
  "press \\C[6]2\\C[0] to select your handgun.\\.": "tekan \\C[6]2\\C[0] untuk memilih pistol sampingan.\\.",
  "That concludes our combat overview.": "Demikianlah ikhtisar pertempuran kita.",
  "When you are ready to proceed to the final": "Saat kamu siap melanjutkan ke bagian akhir",
  "part of the tutorial,\\. put away your knife.": "tutorial,\\. sarungkan pisaumu.",
  "Additionally, press \\C[6]V\\C[0] while holding a firearm": "Selain itu, tekan \\C[6]V\\C[0] saat memegang senjata api",
  "to perform a \\C[6]quick melee attack\\C[0].\\|": "untuk melakukan \\C[6]serangan jarak dekat cepat\\C[0].\\|",
  "Very useful for finishing off a wounded target.": "Sangat berguna untuk menghabisi target yang terluka.",
  "The mirror reflects a solitary figure who cares about no": "Cermin memantulkan sosok penyendiri yang tak peduli pada siapa",
  "one.\\! Her eyes reflect no light.": "pun.\\! Matanya tak lagi memancarkan cahaya.",
  "Usually I stay in my room without washing.\\.": "Biasanya aku berdiam di kamar tanpa mandi.\\.",
  "But this morning, I took a long shower.\\.": "Namun pagi ini, aku mandi cukup lama.\\.",
  "will be the star on center stage.": "akan menjadi bintang utama di panggung.",
  "Would you like to receive 9,999,999 SP?": "Apakah kamu ingin menerima 9.999.999 SP?",
  "You are now the proud owner of 9,999,999 SP!!!": "Kamu sekarang memiliki 9.999.999 SP!!!",
  "Locked": "Terkunci",
  "Unlocked!": "Terbuka!",
  "Secret Achievements": "Prestasi Rahasia",
  "Achievements": "Prestasi",
  "Achievement Unlocked": "Prestasi Terbuka",
  "Reward: ": "Hadiah: ",
  "\\Fs[21]Press E to enter \\C[6]aiming mode\\C[0].\n\nIn this mode, your hit rate will\n\\C[6]gradually increase up to 100%\\C[0],\nallowing you to strike targets much more accurately.\n\nHold Shift to move\nwhile remaining in aiming mode.": "\\Fs[21]Tekan E untuk masuk \\C[6]mode membidik\\C[0].\n\nDalam mode ini, akurasi tembakanmu akan\n\\C[6]meningkat bertahap hingga 100%\\C[0],\nmembuat tembakan jauh lebih akurat.\n\nTahan Shift untuk bergerak\nsambil tetap dalam mode membidik.",
  "\\Fs[21]Running and enemy attacks consume your \\C[6]stamina\\C[0], \nas indicated by the green gauge above your\nhead.\n\nStamina recovers on its own, \nbut if completely depleted, running is disabled \nuntil it has fully recharged.\n\nIf you take damage while exhausted,\nyou will be arrested, resulting in a \\C[6]Game Over\\C[0].": "\\Fs[21]Berlari dan serangan musuh menguras \\C[6]stamina\\C[0],\nseperti yang ditunjukkan bilah hijau di atas\nkepalamu.\n\nStamina pulih dengan sendirinya,\ntetapi jika habis total, kamu tidak bisa berlari\nsampai terisi penuh kembali.\n\nJika terkena serangan saat kelelahan,\nkamu akan ditangkap dan \\C[6]Game Over\\C[0].",
  "\\Fs[21]You carry two firearms: a \\C[2]primary weapon\\C[0] and a \\C[1]handgun\\C[0].\nPress Q to switch between them.\n\nSwapping weapons is faster than reloading and allows you to\nkeep shooting without leaving yourself vulnerable.": "\\Fs[21]Kamu membawa dua senjata api: \\C[2]senjata utama\\C[0] dan \\C[1]pistol\\C[0].\nTekan Q untuk beralih di antara keduanya.\n\nBerganti senjata lebih cepat daripada reload dan membuatmu\nbisa terus menembak tanpa celah bahaya.",
  "\\Fs[21]Press 3 to draw your \\C[6]melee weapon\\C[0].\nWhile it cannot hit targets at range,\nit is invaluable for point-blank encounters.\n\nHowever, swinging melee weapons \\C[6]consumes stamina\\C[0].\nThe more exhausted you are, the weaker your strikes.": "\\Fs[21]Tekan 3 untuk menghunus \\C[6]senjata jarak dekat\\C[0].\nMeski tak bisa mengenai sasaran jauh,\nsenjata ini sangat ampuh dalam jarak dekat.\n\nNamun, mengayunkan senjata tajam \\C[6]menguras stamina\\C[0].\nSemakin kamu lelah, semakin lemah tebasanmu.",
  "\\Fs[21]Hold G to throw a \\C[6]grenade\\C[0].\nThe longer you hold the key, the farther it travels.\n\nShortly after landing, the grenade will detonate,\ndealing heavy area damage.\n\n\\C[6]The explosion is also fatal to the player\\C[0],\nso be sure to step well back after throwing.": "\\Fs[21]Tahan G untuk melempar \\C[6]granat\\C[0].\nSemakin lama ditahan, semakin jauh lemparannya.\n\nSesaat setelah mendarat, granat akan meledak,\nmemberikan kerusakan area yang dahsyat.\n\n\\C[6]Ledakan ini juga fatal bagi pemain\\C[0],\njadi pastikan mundur menjauh setelah melempar.",
  "\\Fs[21]\\C[6]Shotguns\\C[0] are high-accuracy weapons with\nimmense lethality.\nSpecial ammunition grants them a\n\\C[6]hit rate bonus (+25%)\\C[0].\n\nAt greater distances, damage drops sharply due to\npellet spread, so engage targets at close range.": "\\Fs[21]\\C[6]Shotgun\\C[0] adalah senjata berdaya hancur tinggi\nyang sangat mematikan.\nAmunisi khususnya memberikan bonus\n\\C[6]akurasi (+25%)\\C[0].\n\nPada jarak jauh, kerusakan turun drastis akibat\nsebaran peluru, jadi seranglah dari jarak dekat.",
  "\\Fs[21]Depending on damage taken, targets become either\nwounded or severely wounded.\n\nWounded targets have reduced movement speed,\nand severely wounded ones cannot move at all.\n\nAt the end of the run, severely wounded targets\nhave a \\C[6]chance to succumb to wounds\\C[0], counting\nas kills.": "\\Fs[21]Tergantung luka yang diderita, target akan\nterluka ringan atau terluka parah.\n\nTarget terluka mengalami penurunan kecepatan gerak,\ndan yang terluka parah tidak bisa bergerak sama sekali.\n\nDi akhir serangan, target yang terluka parah\nmemiliki \\C[6]peluang mati akibat luka\\C[0], yang dihitung\nsebagai jumlah korban.",
  "\\Fs[21]To arrest the player, teachers will arrive\nas \\C[6]reinforcements\\C[0].\n\nDepending on the situation, they can quickly surround\nyou. To prevent this,\n\\C[6]take decisive action promptly.\\C[0]\n\nTeachers' whistles hasten the arrival of reinforcements,\nso stay sharp and eliminate threats quickly.": "\\Fs[21]Untuk menangkap pemain, para guru akan tiba\nsebagai \\C[6]bantuan (bala bantuan)\\C[0].\n\nTergantung situasi, mereka bisa mengepungmu dengan cepat.\nUntuk mencegahnya,\n\\C[6]ambil tindakan tegas dengan cepat.\\C[0]\n\nPeluit guru mempercepat kedatangan bantuan,\njadi tetap waspada dan habisi ancaman segera.",
  "\\Fs[21]Over time, the school will begin to empty out\nas students and teachers evacuate.\n\nAttacking the faculty room and eliminating\nall teachers will \\C[6]slightly delay their arrival\\C[0].": "\\Fs[21]Seiring waktu, sekolah akan mulai kosong karena\nsiswa dan guru mulai mengungsi.\n\nMenyerang ruang guru dan menghabisi\nsemua guru di sana akan \\C[6]sedikit menunda kedatangan bantuan\\C[0].",
  "\\Fs[21]Teachers are not the only threat.\nStudents can also \\C[6]put up resistance\\C[0].\n\nCounterattack chance depends on student courage,\nincreasing when the player \\C[6]gets close, reloads, or\nturns their back\\C[0].\n\nMost counterattacks come from \\C[6]male students\\C[0],\nso prioritizing them is effective for preventing\nsudden takedowns.": "\\Fs[21]Bukan cuma guru yang berbahaya.\nPara siswa juga bisa \\C[6]melakukan perlawanan\\C[0].\n\nPeluang serangan balik bergantung pada keberanian siswa,\nmeningkat saat pemain \\C[6]mendekat, reload, atau\nmembalikkan badan\\C[0].\n\nSebagian besar perlawanan berasal dari \\C[6]siswa laki-laki\\C[0],\njadi utamakan mereka untuk mencegah serangan mendadak.",
  "\\Fs[21]If attacked with melee weapons or firearms,\nyou suffer \\C[6]fatal damage\\C[0].\n\nThe red portion of your stamina bar displays fatal\ndamage, reducing your maximum stamina accordingly.\n\nIf the gauge fills completely with red, you die,\nresulting in a \\C[6]Game Over\\C[0].": "\\Fs[21]Jika diserang senjata tajam atau senjata api,\nkamu menderita \\C[6]kerusakan fatal\\C[0].\n\nBagian merah pada bilah staminamu menunjukkan kerusakan\nfatal, yang mengurangi batas maksimum stamina.\n\nJika bilah terisi penuh warna merah, kamu mati\ndan mengalami \\C[6]Game Over\\C[0].",
  "\\Fs[21]\\C[6]Yumi Tojo\\C[0] is a knife-wielding character.\nThe skill \\C[4]'Hallway Tag!'\\C[0] allows enabling\n'Yumi Mode' in options and playing as her.\n\nYumi cannot use guns or explosives, but moves\nrapidly and recovers stamina quickly. She wields\nthe strongest melee weapon: 'Yumi's Knife'.\n\nAdditionally, when her stamina is full, pressing Q\nperforms a \\C[6]powerful lunge\\C[0] that \\C[6]instantly kills\nany unarmored target\\C[0].": "\\Fs[21]\\C[6]Yumi Tojo\\C[0] adalah karakter bersenjatakan pisau.\nKeahlian \\C[4]'Petak Umpet Koridor!'\\C[0] membuka\n'Mode Yumi' di pengaturan untuk bermain sebagai dirinya.\n\nYumi tak bisa memakai senjata api atau bahan peledak, tapi\nbergerak lincah dan memulihkan stamina sangat cepat. Dia memakai\nsenjata jarak dekat terkuat: 'Pisau Yumi'.\n\nSaat staminanya penuh, menekan Q melancarkan \\C[6]terjangan kuat\\C[0]\nyang \\C[6]langsung membunuh target tanpa pelindung\\C[0].",
  "\\Fs[21]\\C[6]Hard Mode\\C[0] introduces various punishing\nmechanics and gameplay tweaks.\n\\C[6]This is an extremely difficult mode.\\C[0]\n\nIf you feel prepared, enable 'Hard Mode' in the\ngame settings.": "\\Fs[21]\\C[6]Mode Sulit\\C[0] menghadirkan berbagai mekanisme hukuman\ndan penyesuaian gameplay.\n\\C[6]Ini adalah mode yang luar biasa menantang.\\C[0]\n\nJika kamu merasa siap, aktifkan 'Mode Sulit' di\npengaturan game.",
  "\\Fs[21]・Hit rate affects both damage and critical chance\n\n・Hit rate and stamina no longer refill when moving\n  between maps\n\n・Weapon recoil is increased;\n  firing on the move increases it even further\n\n・Student resistance rate and damage to player are increased;\n  patrol officers are added as new enemies\n\n・Limited magazine capacity; stray shots may hit corpses": "\\Fs[21]・Akurasi mempengaruhi kerusakan dan peluang kritikal\n\n・Akurasi dan stamina tak lagi terisi ulang saat berpindah peta\n\n・Hentakan senjata meningkat;\n  menembak sambil bergerak membuatnya semakin tinggi\n\n・Tingkat perlawanan siswa dan kerusakan pemain meningkat;\n  petugas patroli ditambahkan sebagai musuh baru\n\n・Kapasitas magazen terbatas; tembakan meleset bisa mengenai mayat",
  "\\Fs[21]In Hard Mode, your magazine supply is limited.\n\nWhen reloading, remaining rounds in the magazine\nare retained.\n\nWhen reloading, you automatically load the\nmagazine with the most ammunition remaining.": "\\Fs[21]Di Mode Sulit, persediaan magazenmu terbatas.\n\nSaat reload, sisa peluru di magazen lama\ntetap tersimpan.\n\nSaat reload, kamu otomatis memasang magazen\ndengan sisa peluru terbanyak.",
  "\\Fs[21]In Hard Mode, stray bullets can hit corpses, and\ndistinguishing the severely wounded from the dead is harder.\n\nIf multiple targets lie on your line of fire, living or\ndead, you automatically aim at the closest.\n\nPress F to \\C[6]switch targets\\C[0] and aim at another.": "\\Fs[21]Di Mode Sulit, peluru meleset bisa mengenai mayat, dan\nmembedakan yang luka parah dengan yang mati lebih sulit.\n\nJika ada beberapa sasaran di garis tembakmu, hidup atau mati,\nkamu otomatis membidik yang terdekat.\n\nTekan F untuk \\C[6]mengganti target\\C[0] dan membidik yang lain.",
  "\\Fs[21]Certain targets wear \\C[6]protective gear\\C[0], such as\nballistic vests and shields.\n\nThey can absorb substantial ballistic damage and are\ncompletely immune to melee strikes.\n": "\\Fs[21]Target tertentu mengenakan \\C[6]pelindung tubuh\\C[0], seperti\nrompi anti-peluru dan perisai.\n\nPelindung ini menyerap kerusakan balistik dalam jumlah besar dan\nkebal total terhadap serangan senjata tajam.\n",
  "Cheat: Infinite Ammo": "Cheat: Amunisi Tak Terbatas",
  "Cheat: Infinite Bombs": "Cheat: Bom Tak Terbatas",
  "Cheat: Infinite Health": "Cheat: Kebal / Darah Inf"
};

    window.t = function(text) {
        if (!text || typeof text !== 'string') return text;
        if (ConfigManager.language === 'id') {
            var trimmed = text.trim();
            if (window.I18N_ID.hasOwnProperty(trimmed)) {
                var lead = text.match(/^\s*/)[0];
                var trail = text.match(/\s*$/)[0];
                return lead + window.I18N_ID[trimmed] + trail;
            }
            if (window.I18N_ID.hasOwnProperty(text)) {
                return window.I18N_ID[text];
            }
            // Handle escape code prefixes like \C[8]\Fs[20]Some text
            var escMatch = text.match(/^((?:\\[A-Za-z]+(?:\[\d*\])?|\\[!.<>|^])+)([\s\S]*)$/);
            if (escMatch) {
                var prefix = escMatch[1];
                var inner = escMatch[2];
                var innerTrimmed = inner.trim();
                if (window.I18N_ID.hasOwnProperty(innerTrimmed)) {
                    var inLead = inner.match(/^\s*/)[0];
                    var inTrail = inner.match(/\s*$/)[0];
                    return prefix + inLead + window.I18N_ID[innerTrimmed] + inTrail;
                }
            }
        }
        return text;
    };

    // 3. Cheats Implementation
    // Infinite SP
    var _Game_Party_gold = Game_Party.prototype.gold;
    Game_Party.prototype.gold = function() {
        if (ConfigManager.infiniteSp) return 9999999;
        return _Game_Party_gold.call(this);
    };

    var _Game_Party_loseGold = Game_Party.prototype.loseGold;
    Game_Party.prototype.loseGold = function(amount) {
        if (ConfigManager.infiniteSp) {
            this._gold = 9999999;
            return;
        }
        _Game_Party_loseGold.call(this, amount);
    };

    var _Game_Party_gainGold = Game_Party.prototype.gainGold;
    Game_Party.prototype.gainGold = function(amount) {
        if (ConfigManager.infiniteSp) {
            this._gold = 9999999;
            return;
        }
        _Game_Party_gainGold.call(this, amount);
    };

    // Hotkey Cheats (Key 9 and F8)
    Input.keyMapper[57] = 'cheatMode';  // 9
    Input.keyMapper[119] = 'cheatMode'; // F8

    // Scene_Map Real-time Cheats & Hotkey Handler
    var _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        _Scene_Map_update.call(this);

        // Infinite SP
        if (ConfigManager.infiniteSp) {
            if ($gameParty) $gameParty._gold = 9999999;
        }

        // Infinite Bombs
        if (ConfigManager.infiniteBombs) {
            if ($gameVariables && $gameVariables._data) {
                $gameVariables._data[41] = 99;
            }
        }

        // Infinite Health / God Mode
        if (ConfigManager.infiniteHealth) {
            if ($gameVariables && $gameVariables._data) {
                $gameVariables._data[62] = 0;   // 0 fatal damage
                $gameVariables._data[4] = 100;  // 100 stamina
            }
            if ($gameSwitches) {
                $gameSwitches.setValue(58, true);  // God Mode switch
                $gameSwitches.setValue(34, false); // Block Death flag
                $gameSwitches.setValue(47, false); // Block damage wait
            }
        }

        // Infinite Ammo Magazine Refill
        if (ConfigManager.infiniteAmmo) {
            if ($gameVariables && $gameVariables._data) {
                if (Array.isArray($gameVariables._data[50])) {
                    for (var mi = 0; mi < $gameVariables._data[50].length; mi++) {
                        $gameVariables._data[50][mi] = 99;
                    }
                }
                if (Array.isArray($gameVariables._data[51])) {
                    for (var mi = 0; mi < $gameVariables._data[51].length; mi++) {
                        $gameVariables._data[51][mi] = 99;
                    }
                }
            }
        }

        // Hotkey 9 / F8 triggers Master Cheat Toggle
        if (Input.isTriggered('cheatMode')) {
            var masterState = !(ConfigManager.infiniteHealth && ConfigManager.infiniteAmmo && ConfigManager.infiniteBombs && ConfigManager.infiniteSp);
            ConfigManager.infiniteSp = masterState;
            ConfigManager.infiniteAmmo = masterState;
            ConfigManager.infiniteBombs = masterState;
            ConfigManager.infiniteHealth = masterState;
            ConfigManager.save();

            if (masterState) {
                if ($gameParty) $gameParty._gold = 9999999;
                if ($gameVariables && $gameVariables._data) {
                    $gameVariables._data[41] = 99;
                    $gameVariables._data[62] = 0;
                    $gameVariables._data[4] = 100;
                }
                if ($gameSwitches) {
                    $gameSwitches.setValue(58, true);
                    $gameSwitches.setValue(34, false);
                }
            } else {
                if ($gameSwitches) {
                    $gameSwitches.setValue(58, false);
                }
            }

            SoundManager.playShop();
            var isId = (ConfigManager.language === 'id');
            var msg = masterState ? 
                (isId ? "CHEAT: Semua Cheat AKTIF! (SP, Bom, Amunisi & Kebal)" : "CHEAT: All Cheats ON! (SP, Bombs, Ammo & God Mode)") : 
                (isId ? "CHEAT: Semua Cheat NONAKTIF" : "CHEAT: All Cheats OFF");
            if (this.createSpeakWindow) {
                this.createSpeakWindow(msg);
            }
        }
    };

    // 4. Subtitle Cutoff Fix (Window_Speak)
    if (typeof Window_Speak !== 'undefined') {
        Window_Speak.prototype.initialize = function(text, windowId, targetId) {
            text = window.t(text);
            this.targetId = targetId;
            this.windowId = windowId;
            this.text = text;
            this.wait = Math.max(70, Math.min(140, text.length * 3));

            // Accurate width calculation using measurement bitmap
            var dummyBitmap = new Bitmap(1, 1);
            dummyBitmap.fontSize = 18;
            var measured = Math.ceil(dummyBitmap.measureTextWidth(text));
            var width = Math.min(Graphics.boxWidth - 16, Math.max(140, measured + 36));
            var height = this.fittingHeight(1);

            Window_Base.prototype.initialize.call(this, 0, 0, width, height);
            this.opacity = 0;
            this.contentsOpacity = 255;
            this.dimmerOpacity = 255;

            if (targetId) {
                if ($gameMap && $gameMap._events && $gameMap._events[targetId]) {
                    if ($gameMap._events[targetId]._speakWindow) {
                        SceneManager._scene.removeChild(SceneManager._scene._speakWindow[$gameMap._events[targetId]._speakWindowId]);
                    }
                    $gameMap._events[targetId]._speakWindow = true;
                    $gameMap._events[targetId]._speakWindowId = this.windowId;
                }
            } else {
                if ($gamePlayer._speakWindow) {
                    SceneManager._scene.removeChild(SceneManager._scene._speakWindow[$gamePlayer._speakWindowId]);
                }
                $gamePlayer._speakWindow = true;
                $gamePlayer._speakWindowId = this.windowId;
            }
            this.showBackgroundDimmer();
            AudioManager.playSe({"name":"Item1","volume":50,"pitch":150,"pan":0});
            this.refresh();
        };

        Window_Speak.prototype.refresh = function() {
            this.contents.clear();
            var target = this.targetId == 0 ? $gamePlayer : ($gameMap && $gameMap._events ? $gameMap._events[this.targetId] : null);
            var tx = target ? target._realX : ($gamePlayer ? $gamePlayer._realX : 0);
            var ty = target ? target._realY : ($gamePlayer ? $gamePlayer._realY : 0);

            var idealX = (($gamePlayer.scrolledX() - $gamePlayer._realX + tx) * 48) - (this.width / 2) + 24;
            var idealY = (($gamePlayer.scrolledY() - $gamePlayer._realY + ty) * 48) - 90;

            // Clamping inside screen margins prevents cutting off on left and right!
            this.x = Math.max(8, Math.min(idealX, Graphics.boxWidth - this.width - 8));
            this.y = Math.max(8, Math.min(idealY, Graphics.boxHeight - this.height - 8));

            this.contents.fontSize = 18;
            this.drawText(this.text, 0, 0, this.contentsWidth(), 'center');

            if (this.wait > 0) {
                this.wait -= 1;
            } else {
                if (this.contentsOpacity > 0) {
                    this.contentsOpacity -= 2;
                    this.dimmerOpacity -= 2;
                    if (this._dimmerSprite) this._dimmerSprite.opacity = this.dimmerOpacity;
                } else {
                    this.hideBackgroundDimmer();
                    this.close();
                }
            }
        };
    }

    // Hook Scene_Map.prototype.createSpeakWindow as well
    var _Scene_Map_createSpeakWindow = Scene_Map.prototype.createSpeakWindow;
    if (_Scene_Map_createSpeakWindow) {
        Scene_Map.prototype.createSpeakWindow = function(text, targetId) {
            text = window.t(text);
            _Scene_Map_createSpeakWindow.call(this, text, targetId);
        };
    }

    // 5. Options Window integration
    var _Window_Options_makeCommandList = Window_Options.prototype.makeCommandList;
    Window_Options.prototype.makeCommandList = function() {
        var isId = (ConfigManager.language === 'id');
        this.addCommand(isId ? "Bahasa" : "Language", 'language');
        this.addCommand(isId ? "Cheat: SP Tak Terbatas" : "Cheat: Infinite SP", 'infiniteSp');
        this.addCommand(isId ? "Cheat: Amunisi Tak Terbatas" : "Cheat: Infinite Ammo", 'infiniteAmmo');
        this.addCommand(isId ? "Cheat: Bom Tak Terbatas" : "Cheat: Infinite Bombs", 'infiniteBombs');
        this.addCommand(isId ? "Cheat: Kebal / Darah Inf" : "Cheat: Infinite Health", 'infiniteHealth');
        _Window_Options_makeCommandList.call(this);
    };

    var _Window_Options_statusText = Window_Options.prototype.statusText;
    Window_Options.prototype.statusText = function(index) {
        var symbol = this.commandSymbol(index);
        var isId = (ConfigManager.language === 'id');
        if (symbol === 'language') {
            return isId ? 'Indonesia' : 'English';
        }
        if (symbol === 'infiniteSp' || symbol === 'infiniteAmmo' || symbol === 'infiniteBombs' || symbol === 'infiniteHealth') {
            var val = this.getConfigValue(symbol);
            return val ? (isId ? 'AKTIF' : 'ON') : (isId ? 'NONAKTIF' : 'OFF');
        }
        var text = _Window_Options_statusText.call(this, index);
        if (isId) {
            if (text === 'ON') return 'AKTIF';
            if (text === 'OFF') return 'NONAKTIF';
        }
        return text;
    };

    var _Window_Options_processOk = Window_Options.prototype.processOk;
    Window_Options.prototype.processOk = function() {
        var symbol = this.commandSymbol(this.index());
        if (symbol === 'language') {
            ConfigManager.language = (ConfigManager.language === 'id' ? 'en' : 'id');
            SoundManager.playCursor();
            ConfigManager.save();
            this.refresh();
            return;
        }
        if (symbol === 'infiniteSp' || symbol === 'infiniteAmmo' || symbol === 'infiniteBombs' || symbol === 'infiniteHealth') {
            var val = !this.getConfigValue(symbol);
            this.setConfigValue(symbol, val);
            SoundManager.playCursor();
            ConfigManager.save();
            if (val && symbol === 'infiniteSp' && $gameParty) {
                $gameParty._gold = 9999999;
            }
            this.redrawItem(this.index());
            return;
        }
        _Window_Options_processOk.call(this);
    };

    var _Window_Options_cursorRight = Window_Options.prototype.cursorRight;
    Window_Options.prototype.cursorRight = function(wrap) {
        var symbol = this.commandSymbol(this.index());
        if (symbol === 'language' || symbol === 'infiniteSp' || symbol === 'infiniteAmmo' || symbol === 'infiniteBombs' || symbol === 'infiniteHealth') {
            this.processOk();
            return;
        }
        _Window_Options_cursorRight.call(this, wrap);
    };

    var _Window_Options_cursorLeft = Window_Options.prototype.cursorLeft;
    Window_Options.prototype.cursorLeft = function(wrap) {
        var symbol = this.commandSymbol(this.index());
        if (symbol === 'language' || symbol === 'infiniteSp' || symbol === 'infiniteAmmo' || symbol === 'infiniteBombs' || symbol === 'infiniteHealth') {
            this.processOk();
            return;
        }
        _Window_Options_cursorLeft.call(this, wrap);
    };

    // 6. Live Text Translation Hooks (drawText, drawTextEx, Game_Message, Choices, etc.)
    var _Window_Base_drawText = Window_Base.prototype.drawText;
    Window_Base.prototype.drawText = function(text, x, y, maxWidth, align) {
        if (typeof text === 'string') {
            text = window.t(text);
        }
        _Window_Base_drawText.call(this, text, x, y, maxWidth, align);
    };

    var _Window_Base_drawTextEx = Window_Base.prototype.drawTextEx;
    Window_Base.prototype.drawTextEx = function(text, x, y) {
        if (typeof text === 'string') {
            text = window.t(text);
        }
        return _Window_Base_drawTextEx.call(this, text, x, y);
    };

    var _Game_Message_add = Game_Message.prototype.add;
    Game_Message.prototype.add = function(text) {
        if (typeof text === 'string') {
            text = window.t(text);
        }
        _Game_Message_add.call(this, text);
    };

    var _Window_ChoiceList_makeCommandList = Window_ChoiceList.prototype.makeCommandList;
    Window_ChoiceList.prototype.makeCommandList = function() {
        _Window_ChoiceList_makeCommandList.call(this);
        for (var i = 0; i < this._list.length; i++) {
            this._list[i].name = window.t(this._list[i].name);
        }
    };

    var _Window_Command_addCommand = Window_Command.prototype.addCommand;
    Window_Command.prototype.addCommand = function(name, symbol, enabled, ext) {
        name = window.t(name);
        _Window_Command_addCommand.call(this, name, symbol, enabled, ext);
    };

    var _Window_Help_setItem = Window_Help.prototype.setItem;
    Window_Help.prototype.setItem = function(item) {
        if (item && item.description) {
            this.setText(window.t(item.description));
            return;
        }
        this.setText(item ? window.t(item.name) : '');
    };

    var _Window_Base_drawItemName = Window_Base.prototype.drawItemName;
    Window_Base.prototype.drawItemName = function(item, x, y, width) {
        if (item) {
            var origName = item.name;
            item.name = window.t(origName);
            _Window_Base_drawItemName.call(this, item, x, y, width);
            item.name = origName;
        } else {
            _Window_Base_drawItemName.call(this, item, x, y, width);
        }
    };

})();

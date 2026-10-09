<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Muhammad Abdul Aziz Zulkarnaen | Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;600;900&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #ffffff;
            --accent-blue: #bad7f3; /* Warna biru pastel dari referensi */
            --font-display: 'Archivo Black', sans-serif;
            --font-main: 'Inter', sans-serif;
            --text-dark: #0f172a; /* Warna teks gelap */
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: var(--font-main);
            background-color: #000; /* Latar belakang hitam untuk transisi */
            overflow: hidden; /* Kontrol penuh dengan JavaScript */
            color: #fff;
        }

        .main-container {
            width: 100%;
            height: 100vh;
            position: relative;
        }

        /* Setingan Dasar untuk setiap Halaman (Section) */
        section {
            position: absolute;
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: all 0.9s cubic-bezier(0.85, 0, 0.15, 1);
            opacity: 0;
            visibility: hidden;
            transform: scale(0.95); /* Efek zoom-out saat tidak aktif */
        }

        section.active {
            opacity: 1;
            visibility: visible;
            transform: scale(1); /* Efek zoom-in saat aktif */
            z-index: 10;
        }

        /* =========================================
           STAGE 1: LANDING PAGE (HERO)
           ========================================= */
        #hero {
            /* GANTI 'foto-anda.jpg' DENGAN NAMA FILE FOTO ANDA */
            /* Lapisan gradient putih tipis ditambahkan agar teks gelap lebih terbaca */
            background: linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.1)), 
                        url('IMG_1274.jpg') no-repeat center center; 
            background-size: cover;
            z-index: 1;
        }

        /* Teks Nama Super Besar */
        .hero-title {
            font-family: var(--font-display);
            font-size: clamp(3.5rem, 9vw, 8rem);
            text-align: center;
            line-height: 0.9;
            color: var(--text-dark);
            text-transform: uppercase;
            letter-spacing: -3px;
            margin-top: -50px; /* Sedikit ditarik ke atas */
        }

        .scroll-hint {
            margin-top: 25px;
            font-size: 0.8rem;
            color: var(--text-dark);
            letter-spacing: 4px;
            font-weight: 900;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        /* Navigasi Melayang di Pojok Kanan Bawah */
        .landing-menu {
            position: absolute;
            bottom: 40px;
            right: 40px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            z-index: 20; /* Harus selalu paling depan di halaman hero */
        }

        .menu-item {
            background: var(--accent-blue);
            color: #000;
            width: 220px;
            padding: 16px 20px;
            font-family: var(--font-display);
            font-size: 1rem;
            text-decoration: none;
            transform: skewX(-15deg); /* Efek miring */
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 15px;
            cursor: pointer;
            border: none;
            transition: all 0.3s ease;
            box-shadow: 5px 5px 0px rgba(0,0,0,0.1);
        }

        .menu-item span {
            transform: skewX(15deg); /* Meluruskan kembali simbol + */
            font-size: 1.5rem;
        }

        .menu-item p {
            transform: skewX(15deg); /* Meluruskan kembali teks */
            letter-spacing: 2px;
            margin-top: 3px;
        }

        .menu-item:hover {
            background: #fff;
            color: #000;
            transform: skewX(-15deg) scale(1.05) translateX(-10px);
            box-shadow: 10px 10px 0px rgba(0,0,0,0.2);
        }

        /* =========================================
           STAGE 2: CONTENT PAGES (HALAMAN DALAM)
           ========================================= */
        .content-page {
            background: #0b0b0b; /* Warna hitam elegan */
            color: #fff;
            padding: 50px;
            text-align: center;
        }

        .content-title {
            font-family: var(--font-display);
            font-size: 4rem;
            margin-bottom: 20px;
            color: var(--accent-blue);
            text-transform: uppercase;
        }

        .content-desc {
            font-size: 1.2rem;
            line-height: 1.6;
            max-width: 600px;
            color: #ccc;
        }

        .back-btn {
            margin-top: 60px;
            padding: 15px 30px;
            border: 1px solid var(--accent-blue);
            color: var(--accent-blue);
            background: transparent;
            font-family: var(--font-display);
            cursor: pointer;
            font-size: 0.9rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            transition: 0.3s;
        }

        .back-btn:hover {
            background: var(--accent-blue);
            color: #000;
        }

        /* Responsif untuk HP */
        @media (max-width: 768px) {
            .hero-title { font-size: 2.8rem; margin-top: -100px; }
            .landing-menu { right: 20px; bottom: 20px; }
            .menu-item { width: 180px; padding: 12px; font-size: 0.85rem; }
        }
    </style>
</head>
<body>

    <div class="main-container">
        <section id="hero" class="active">
            
            <h1 class="hero-title">Muhammad Abdul<br>Aziz Zulkarnaen</h1>
            <div class="scroll-hint">SCROLL TO EXPLORE &rarr;</div>
            
            <div class="landing-menu">
                <button class="menu-item" onclick="showPage('about')"><span>+</span><p>ABOUT</p></button>
                <button class="menu-item" onclick="showPage('projects')"><span>+</span><p>PROJECTS</p></button>
                <button class="menu-item" onclick="showPage('skills')"><span>+</span><p>SKILLS</p></button>
                <button class="menu-item" onclick="showPage('contact')"><span>+</span><p>CONTACT</p></button>
            </div>
        </section>

        <section id="about" class="content-page">
            <h2 class="content-title">ABOUT ME</h2>
            <p class="content-desc">Seorang arsitek sistem yang berdedikasi tinggi, memadukan keahlian teknik jaringan dengan desain antarmuka yang estetis dan modern.</p>
            <button class="back-btn" onclick="showPage('hero')">BACK TO HOME</button>
        </section>

        <section id="projects" class="content-page">
            <h2 class="content-title">PROJECTS</h2>
            <p class="content-desc">Mencakup perancangan ulang sistem keamanan, topologi jaringan tingkat lanjut, serta desain identitas visual untuk berbagai institusi.</p>
            <button class="back-btn" onclick="showPage('hero')">BACK TO HOME</button>
        </section>

        <section id="skills" class="content-page">
            <h2 class="content-title">SKILLS</h2>
            <p class="content-desc">Systems Architecture / Network Engineering / UI & UX Design / Photography</p>
            <button class="back-btn" onclick="showPage('hero')">BACK TO HOME</button>
        </section>

        <section id="contact" class="content-page">
            <h2 class="content-title">CONTACT</h2>
            <p class="content-desc">Mari berkolaborasi untuk proyek selanjutnya.<br><br>hello@aziz-zulkarnaen.com</p>
            <button class="back-btn" onclick="showPage('hero')">BACK TO HOME</button>
        </section>
    </div>

    <script>
        // Fungsi untuk navigasi antar halaman dengan animasi
        function showPage(pageId) {
            // Hapus class 'active' dari semua section
            document.querySelectorAll('section').forEach(sec => {
                sec.classList.remove('active');
            });
            
            // Tambahkan class 'active' ke halaman yang dituju
            document.getElementById(pageId).classList.add('active');
        }

        // Fitur tambahan: Scroll mouse untuk masuk ke halaman About (opsional tapi keren)
        window.addEventListener('wheel', (e) => {
            const heroIsActive = document.getElementById('hero').classList.contains('active');
            // Jika user scroll ke bawah di halaman utama, otomatis masuk ke About
            if (e.deltaY > 0 && heroIsActive) {
                showPage('about');
            }
        });
    </script>
</body>
</html>

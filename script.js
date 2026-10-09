<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Muhammad Abdul Aziz Zulkarnaen | Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;600;900&display=swap" rel="stylesheet">
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
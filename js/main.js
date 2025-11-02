// ===============================
// 🌈 Fade-up Animation on Scroll
// ===============================

// Fungsi untuk cek apakah elemen terlihat di viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight - 100) && // muncul 100px sebelum full kelihatan
    rect.bottom >= 0
  );
}

// Fungsi untuk aktifkan animasi
function animateOnScroll() {
  const fadeElements = document.querySelectorAll('.fade-up');
  fadeElements.forEach(el => {
    if (isInViewport(el)) {
      el.classList.add('show');
    }
  });
}

// Jalankan fungsi saat halaman discroll dan saat pertama kali dimuat
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// ===============================
// 🔗 Smooth Scroll Navigation
// ===============================

// Menangani link dengan anchor (contoh: #certificate, #contact)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // biar ga ketutupan navbar
        behavior: 'smooth'
      });
    }
  });
});

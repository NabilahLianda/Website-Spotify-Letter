// Fungsi untuk mainkan audio saat ada interaksi pertama (klik, sentuh, atau scroll)
const startAudioOnInteraction = () => {
  const audio = document.getElementById('lofi');
  audio.play().then(() => {
    console.log("🎵 Music started!");
  }).catch((e) => {
    console.log("⚠️ Autoplay gagal:", e);
  });

  // Hapus semua listener setelah berhasil
  document.removeEventListener('click', startAudioOnInteraction);
  document.removeEventListener('touchstart', startAudioOnInteraction);
  document.removeEventListener('scroll', startAudioOnInteraction);
};

// Pasang ke berbagai jenis interaksi
document.addEventListener('click', startAudioOnInteraction);
document.addEventListener('touchstart', startAudioOnInteraction);
document.addEventListener('scroll', startAudioOnInteraction);


//Tracking
window.addEventListener('DOMContentLoaded', () => {
  fetch('https://script.google.com/macros/s/AKfycbyOyjaGICXwZF7wqDd3jb6USduutfr8da5j8Ej7wxh56syrZvz5gCNuJPrPjoAc1j9EyQ/exec', {
    method: 'POST',
    body: JSON.stringify({
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      language: navigator.language,
      platform: navigator.platform,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      pageURL: window.location.href
    })
  }).catch(err => console.error('Tracking failed:', err));
});

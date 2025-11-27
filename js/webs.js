// En webs.js - reemplaza todo por esto:
document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('video');
  
  // Forzar reproducción en móviles
  videos.forEach(video => {
    video.play().catch(error => {
      console.log('Autoplay bloqueado:', error);
    });
  });
  
  // Reintentar con el primer toque (fallback para iOS)
  document.addEventListener('touchstart', () => {
    videos.forEach(video => video.play());
  }, { once: true });
});
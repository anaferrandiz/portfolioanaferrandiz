// Gestión completa de videos (lazy loading + autoplay móvil)
document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('video[data-src]');
  
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        const source = video.querySelector('source');
        
        // Cargar el video solo cuando el usuario esté cerca
        if (!source.src) {
          source.src = video.dataset.src;
          video.load();
          
          // Reproducir cuando esté listo
          video.addEventListener('loadeddata', () => {
            video.play().catch(error => {
              console.log('Autoplay bloqueado:', error);
            });
          }, { once: true });
        } else {
          // Si ya está cargado, solo reproducir
          video.play();
        }
        
        videoObserver.unobserve(video);
      }
    });
  }, { 
    rootMargin: '100px'
  });
  
  videos.forEach(video => videoObserver.observe(video));
  
  // Reproducir con el primer toque en móvil (por si acaso)
  document.addEventListener('touchstart', () => {
    videos.forEach(video => {
      if (video.querySelector('source').src) {
        video.play();
      }
    });
  }, { once: true });
});
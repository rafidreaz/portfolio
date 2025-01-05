// Initialize AOS animations
AOS.init();

VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
    max: 15,           // Tilt angle limit
    speed: 800,        // Smooth transition speed
    glare: true,       // Enable glare
    'max-glare': 0.3,  // Set maximum glare intensity
    scale: 1.1         // Slight image scale on hover for added smoothness
  });

 

  document.addEventListener('DOMContentLoaded', () => {
    const profilePic = document.getElementById('profile-pic');
    const socialLinks = document.getElementById('social-links');
  
    profilePic.addEventListener('click', () => {
      socialLinks.classList.toggle('active');
    });
  
    document.addEventListener('click', (event) => {
      if (!profilePic.contains(event.target) && !socialLinks.contains(event.target)) {
        socialLinks.classList.remove('active');
      }
    });
  });
  
// Initialize AOS animations
AOS.init(); 

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
  
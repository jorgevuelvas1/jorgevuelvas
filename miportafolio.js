const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('main section');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();         
        const sectionId = link.getAttribute('href');
        sections.forEach(section => {
            if (section.getAttribute('id') !== sectionId.substring(1) && section.getAttribute('id') !== 'social-media') {
                section.style.display = 'none';
            } else {
                section.style.display = 'block';
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

function switchDarkMode() {
    document.body.classList.toggle('dark-mode');
    const darkModeSwitch = document.querySelector('#dark-mode-switch');
    if (document.body.classList.contains('dark-mode')) {
      darkModeSwitch.innerHTML = '🌚 🕯️ 🌃';
    } else {
      darkModeSwitch.innerHTML = '🌞 🌈 🌇';
    }
  }

  window.onload = function() {
    const articlesSection = document.querySelector('#articles');
    const cvSection = document.querySelector('#cv');
    
    articlesSection.style.display = 'none';
    cvSection.style.display = 'none';
};

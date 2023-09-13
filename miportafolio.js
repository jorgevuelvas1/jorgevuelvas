const navButtons = document.querySelectorAll('nav ul .lis');
const sections = document.querySelectorAll('main section');

document.addEventListener('DOMContentLoaded', (event) => {
    const navButtons = document.querySelectorAll('.lis');
    const sections = document.querySelectorAll('main section');

    navButtons.forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();         
            const sectionId = button.getAttribute('data-section');
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
});


function switchDarkMode() {
    document.body.classList.toggle('dark-mode');
    const darkModeSwitch = document.querySelector('#dark-mode-switch');
    if (document.body.classList.contains('dark-mode')) {
        darkModeSwitch.nextElementSibling.style.backgroundColor = "#000";
        darkModeSwitch.nextElementSibling.querySelector('span').style.backgroundColor = "#fff";
    } else {
        darkModeSwitch.nextElementSibling.style.backgroundColor = "#2e2e2e";
        darkModeSwitch.nextElementSibling.querySelector('span').style.backgroundColor = "#4e4";
    }
}

window.onload = function() {
    const articlesSection = document.querySelector('#articles');
    const cvSection = document.querySelector('#cv');

    articlesSection.style.display = 'none';
    cvSection.style.display = 'none';
};

const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

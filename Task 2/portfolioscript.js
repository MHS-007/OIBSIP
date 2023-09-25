document.getElementById("downloadButton").addEventListener("click", function() {
    var pdfUrl = 'My Resume.pdf';
    
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'myresume.pdf';
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
  });


document.getElementById('hire-button').addEventListener('click', function () {
    const contactSection = document.getElementById('contact-section');
    
    if (contactSection) {
        window.scrollTo({
            top: contactSection.offsetTop,
            behavior: 'smooth'
        });
    }
});

function scrollToAboutMe() {
    const aboutMeSection = document.getElementById('aboutme');
    const yOffset = -220;

    if (aboutMeSection) {
        window.scrollTo({
            top: aboutMeSection.offsetTop + yOffset,
            behavior: 'smooth'
        });
    }
}

const aboutMeLink = document.getElementById('about-me-link');
if (aboutMeLink) {
    aboutMeLink.addEventListener('click', scrollToAboutMe);
}


function scrollToEducation() {
    const educationSection = document.getElementById('education');
    const yOffset = -5;

    if (educationSection) {
        window.scrollTo({
            top: educationSection.offsetTop + yOffset,
            behavior: 'smooth'
        });
    }
}

const educationLink = document.getElementById('education-link');
if (educationLink) {
    educationLink.addEventListener('click', scrollToEducation);
}


function scrollToProjects() {
    const projectSection = document.getElementById('projects');
    const yOffset = -5;

    if (projectSection) {
        window.scrollTo({
            top: projectSection.offsetTop + yOffset,
            behavior: 'smooth'
        });
    }
}


const projectLink = document.getElementById('projects-link');
if (projectLink) {
    projectLink.addEventListener('click', scrollToProjects);
}


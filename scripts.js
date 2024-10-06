// Optional JavaScript for additional interactions
// Typewriting effect
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".service p");
    elements.forEach((element) => {
        const text = element.innerHTML;
        element.innerHTML = "";
        let i = 0;
        const typeEffect = setInterval(() => {
            element.innerHTML += text.charAt(i);
            i++;
            if (i > text.length) {
                clearInterval(typeEffect);
            }
        }, 50);
    });
});


// JavaScript for Modal
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('contact-sales-modal');
    var btn = document.getElementById('contact-sales-btn');
    var span = document.getElementsByClassName('close')[0];

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
});


//RESEARCH RESPONSIVE scrollBehavior: 

document.addEventListener('DOMContentLoaded', function () {
    var elements = document.querySelectorAll('.scroll-animation');
    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animate');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    elements.forEach(function (element) {
        observer.observe(element);
    });
});




//RESOURCES
// Event listener for the chat button
document.getElementById('chat-button').addEventListener('click', function() {
    alert('Chat with our support team will be available soon!'); // Placeholder alert for chat functionality
});

// Consultant form submission handler
document.getElementById('consultant-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    alert('Thank you for submitting the form. Our consultant will contact you soon!');
});

// Partner form submission handler
document.getElementById('partner-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    alert('Your partnership request has been submitted!');
});



//HELP CENTER QUESTION
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('#resources .faq-item');

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');
        const answerDiv = item.querySelector('.faq-answer');

        questionButton.addEventListener('click', function() {
            // Close all answers
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.faq-answer').style.display = 'none';
                }
            });

            // Toggle the clicked answer
            if (answerDiv.style.display === 'block') {
                answerDiv.style.display = 'none';
            } else {
                answerDiv.style.display = 'block';
            }
        });
    });
});



// scripts.js
// Function to load section content
function loadSection(section) {
    const mainContent = document.getElementById('main-content');
    const heroSection = document.querySelector('.hero-section');
    const companyInfoSection = document.querySelector('.company-info');

    if (section === 'home') {
        // Show Hero and Company Info sections
        heroSection.style.display = 'block';
        companyInfoSection.style.display = 'block';
        mainContent.innerHTML = ''; // Clear the main content since Home has its own content
    } else {
        // Hide Hero and Company Info sections
        heroSection.style.display = 'none';
        companyInfoSection.style.display = 'none';
        
        // Load the appropriate section content
        fetch(`${section}-section.html`) // This will now correctly fetch 'contacts-section.html'
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                mainContent.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading section:', error);
                mainContent.innerHTML = '<p>Error loading section. Please try again.</p>';
            });
    }
}


// Load the home section by default when the page first loads
document.addEventListener('DOMContentLoaded', () => {
    loadSection('home');
});




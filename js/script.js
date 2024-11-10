// script.js

document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach((question) => {
        question.addEventListener("click", function() {
            const answer = this.nextElementSibling;

            // Toggle the display of the answer
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });
});


// Function to initialize the carousel functionality
function initializeCarousel() {
    let currentIndex = 0; // Keeps track of the currently displayed testimonial
    const testimonials = document.querySelectorAll('.testimonial');

    // Function to show the testimonial at the given index
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'flex' : 'none'; // Show only the active testimonial
        });
    }

    // Show the first testimonial initially
    showTestimonial(currentIndex);

    // Automatically rotate testimonials every 3 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }, 3000); // Adjust the time in milliseconds as needed
}

// Load testimonials from JSON and inject them into the carousel section
document.addEventListener("DOMContentLoaded", function() {
    fetch('testimonials.json') // Fetch testimonials from JSON file
        .then(response => response.json())
        .then(data => {
            const carousel = document.querySelector('.testimonial-carousel');
            
            // Loop through each testimonial and create the HTML structure
            data.forEach((testimonial) => {
                const testimonialDiv = document.createElement('div');
                testimonialDiv.classList.add('testimonial');
                
                testimonialDiv.innerHTML = `
                    <div class="testimonial-content">
                        ${testimonial.photo ? `<img src="${testimonial.photo}" alt="${testimonial.client}'s photo" class="testimonial-photo">` : ''}
                        <div class="testimonial-text">
                            <p>${testimonial.comment}</p>
                            <p><strong>- ${testimonial.client}</strong></p>
                        </div>
                    </div>
                `;
                
                // Append each testimonial div to the carousel
                carousel.appendChild(testimonialDiv);
            });
            
            // Initialize the carousel after testimonials are loaded
            initializeCarousel();
        })
        .catch(error => console.error('Error loading testimonials:', error));
});

// JavaScript for collapsible mobile menu
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    toggleButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
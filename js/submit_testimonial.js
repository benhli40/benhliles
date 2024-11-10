// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    // Handle form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const photo = document.getElementById("photo").files[0]; // Get file object for photo

        // Validate input (simple validation)
        if (!name || !email || !message) {
            alert("Please fill out all required fields.");
            return;
        }

        // Convert photo to Base64 if a photo was uploaded
        if (photo) {
            const reader = new FileReader();
            reader.readAsDataURL(photo);
            reader.onload = function(event) {
                saveTestimonial(name, message, event.target.result); // Save with photo as Base64
                alert("Your testimonial has been submitted! Thank you.");
                form.reset(); // Clear the form
            };
            reader.onerror = function() {
                alert("Failed to read the uploaded photo.");
            };
        } else {
            // Save testimonial without photo
            saveTestimonial(name, message);
            alert("Your testimonial has been submitted! Thank you.");
            form.reset(); // Clear the form
        }
    });

    // Save the testimonial to localStorage
    function saveTestimonial(name, message, photo = null) {
        const testimonials = JSON.parse(localStorage.getItem("testimonials")) || [];
        
        // Create a new testimonial object
        const newTestimonial = {
            name,
            message,
            photo, // Optional: will be null if no photo was uploaded
            date: new Date().toISOString()
        };

        // Add the new testimonial to the list and save it in localStorage
        testimonials.push(newTestimonial);
        localStorage.setItem("testimonials", JSON.stringify(testimonials));
    }
});
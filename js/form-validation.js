/* ============================================
   Contact Form Validation
   Portfolio Website - Aryan Srivastava
   ============================================ */

// ============================================
// DOM Elements
// ============================================
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const submitBtn = document.querySelector('.btn-submit');
const formMessage = document.getElementById('form-message');

// ============================================
// Validation Patterns
// ============================================
const patterns = {
    name: /^[a-zA-Z\s]{2,50}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    subject: /^.{5,100}$/,
    message: /^.{10,1000}$/
};

// ============================================
// Validation Messages
// ============================================
const validationMessages = {
    name: {
        required: 'Name is required',
        pattern: 'Name must be 2-50 characters and contain only letters',
        valid: 'Name looks good!'
    },
    email: {
        required: 'Email is required',
        pattern: 'Please enter a valid email address',
        valid: 'Email looks good!'
    },
    subject: {
        required: 'Subject is required',
        pattern: 'Subject must be 5-100 characters',
        valid: 'Subject looks good!'
    },
    message: {
        required: 'Message is required',
        pattern: 'Message must be 10-1000 characters',
        valid: 'Message looks good!'
    }
};

// ============================================
// Validation Functions
// ============================================
function validateField(input, pattern, messages) {
    const errorElement = document.getElementById(`${input.id}-error`);
    const value = input.value.trim();

    // Remove previous error class
    input.classList.remove('error');
    errorElement.textContent = '';
    errorElement.style.display = 'none';

    // Check if field is empty
    if (value === '') {
        input.classList.add('error');
        errorElement.textContent = messages.required;
        errorElement.style.display = 'block';
        return false;
    }

    // Check pattern match
    if (!pattern.test(value)) {
        input.classList.add('error');
        errorElement.textContent = messages.pattern;
        errorElement.style.display = 'block';
        return false;
    }

    // Field is valid
    input.classList.remove('error');
    return true;
}

// ============================================
// Real-time Validation
// ============================================
function setupRealTimeValidation(input, pattern, messages) {
    input.addEventListener('blur', () => {
        validateField(input, pattern, messages);
    });

    input.addEventListener('input', () => {
        // Remove error styling on input (user is typing)
        if (input.classList.contains('error')) {
            const value = input.value.trim();
            if (value !== '' && pattern.test(value)) {
                input.classList.remove('error');
                document.getElementById(`${input.id}-error`).style.display = 'none';
            }
        }
    });
}

// Initialize real-time validation
setupRealTimeValidation(nameInput, patterns.name, validationMessages.name);
setupRealTimeValidation(emailInput, patterns.email, validationMessages.email);
setupRealTimeValidation(subjectInput, patterns.subject, validationMessages.subject);
setupRealTimeValidation(messageInput, patterns.message, validationMessages.message);

// ============================================
// Validate All Fields
// ============================================
function validateForm() {
    let isValid = true;

    // Validate each field
    if (!validateField(nameInput, patterns.name, validationMessages.name)) {
        isValid = false;
    }

    if (!validateField(emailInput, patterns.email, validationMessages.email)) {
        isValid = false;
    }

    if (!validateField(subjectInput, patterns.subject, validationMessages.subject)) {
        isValid = false;
    }

    if (!validateField(messageInput, patterns.message, validationMessages.message)) {
        isValid = false;
    }

    return isValid;
}

// ============================================
// Show Form Message
// ============================================
function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';

    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// ============================================
// Form Submission Handler
// ============================================
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        if (!validateForm()) {
            e.preventDefault(); // block ONLY if invalid
            showFormMessage('Please fix the errors in the form', 'error');
            return;
        }

        // ✅ allow normal form submission to Formspree
    });
}

// ============================================
// Handle Form Inputs for Real-time Feedback
// ============================================
const formInputs = document.querySelectorAll('.form-input, .form-textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
        input.parentElement.classList.remove('focused');
    });
});

// ============================================
// Character Counter for Message Field (Optional)
// ============================================
if (messageInput) {
    const maxLength = 1000;
    const minLength = 10;

    messageInput.addEventListener('input', () => {
        const length = messageInput.value.length;
        const errorElement = document.getElementById('message-error');
        
        if (length > 0 && length < minLength) {
            errorElement.textContent = `Message must be at least ${minLength} characters (${length}/${minLength})`;
        } else if (length > maxLength) {
            errorElement.textContent = `Message must be less than ${maxLength} characters`;
            messageInput.classList.add('error');
            errorElement.style.display = 'block';
        } else if (length >= minLength && length <= maxLength) {
            messageInput.classList.remove('error');
            errorElement.style.display = 'none';
        }
    });
}

// ============================================
// Accessibility: Keyboard Navigation
// ============================================
contactForm.addEventListener('keydown', (e) => {
    // Allow form submission with Enter key (default behavior)
    // Prevent form submission with Enter in textarea
    if (e.key === 'Enter' && e.target.tagName === 'TEXTAREA') {
        // Allow Enter in textarea for line breaks
        return;
    }
});

// ============================================
// Export validation function for external use
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { validateForm, validateField, patterns, validationMessages };
}





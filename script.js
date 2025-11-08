function switchForm() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    if (loginForm.classList.contains('active')) {
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
    } else {
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
    }
}

// Form submission handlers
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login functionality would be implemented here!');
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const passwords = this.querySelectorAll('input[type="password"]');
    if (passwords[0].value !== passwords[1].value) {
        alert('Passwords do not match!');
        return;
    }
    alert('Sign up functionality would be implemented here!');
});

// Add smooth transitions for input focus
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});
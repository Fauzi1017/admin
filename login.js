import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Supabase configuration
const SUPABASE_URL = 'https://bpzeveffsxawqdbojkfu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwemV2ZWZmc3hhd3FkYm9qa2Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0ODkxOTMsImV4cCI6MjA3MzA2NTE5M30.LzL2-yLVxC3Gh6-a-nF5kAEi3vhc-ENMGctpBbuLdhA';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// DOM elements
const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');
const btnText = document.getElementById('btnText');
const loading = document.getElementById('loading');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');

// Check if user is already logged in
async function checkAuth() {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
        window.location.href = 'dashboard.html';
    }
}

// Show error message
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
}

// Show success message
function showSuccess(message) {
    successMessage.textContent = message;
    successMessage.style.display = 'block';
    errorMessage.style.display = 'none';
}

// Hide messages
function hideMessages() {
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
}

// Set loading state
function setLoading(isLoading) {
    loginBtn.disabled = isLoading;
    btnText.style.display = isLoading ? 'none' : 'inline';
    loading.style.display = isLoading ? 'inline-block' : 'none';
}

// Handle form submission
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    hideMessages();
    setLoading(true);

    const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
    

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            showError(error.message);
        } else {
            showSuccess('Login berhasil! Mengalihkan...');
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1000);
        }
    } catch (error) {
        showError('Terjadi kesalahan saat login. Silakan coba lagi.');
    } finally {
        setLoading(false);
    }
});

// Initialize
checkAuth();

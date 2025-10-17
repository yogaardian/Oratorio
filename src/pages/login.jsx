import React from 'react';
import "../pages/css/auth.css"; // <-- 1. Ubah path import
import Footer from '../components/all-page/footer-page/footer';

function LoginPage() {
  return (
    // 2. Tambahkan wrapper ini
    <div className="auth-page-wrapper"> 
      <div className="auth-container">
        
        {/* --- BAGIAN FORM LOGIN --- */}
        <h1>Masuk dan Mulai Jelajahi Semuanya!</h1>
        <p>Log into your account with your email, or create one below. Quick and easy - promise!</p>
        <form className="auth-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Masukkan email Anda" />
            <input type="password" id="password" name="password" placeholder="Masukkan password Anda" />
          </div>
          <button type="submit" className="btn-primary">Continue</button>
        </form>
        <div className="auth-links">
          <a href="/register">Register Now</a>
          <a href="#">Lupa Sandi?</a>
        </div>
        <div className="separator">
          <span>or continue with</span>
        </div>
        <div className="social-logins">
          <button className="social-btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24" width="24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
          </button>
          <button className="social-btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24" width="24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.85z" fill="#1877F2"/></svg>
          </button>
        </div>
        <p className="legal-text">
          By creating an account, you agree to our <a href="#">Terms & Conditions</a>, <a href="#">Privacy Policy</a> and Agreement with Oratorio.
        </p>

        {/* --- BAGIAN FOOTER --- */}
      <div>
        <Footer />
      </div>

      </div>
    </div>
  );
}

export default LoginPage;

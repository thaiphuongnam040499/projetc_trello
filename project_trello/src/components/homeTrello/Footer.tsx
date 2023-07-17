import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer
        className="bg-light text-center text-lg-start"
        style={{ bottom: 0 }}
      >
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          © 2020 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
    </div>
  );
}

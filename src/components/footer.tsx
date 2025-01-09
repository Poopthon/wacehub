import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {currentYear} WaceHub, All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Built with</span> ❤️ by WaceHub. Hosted on Vercel and protected by Cloudflare.
      </p>
    </footer>
  );
}

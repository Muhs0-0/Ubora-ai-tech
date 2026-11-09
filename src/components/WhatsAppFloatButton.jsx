export default function WhatsAppFloatButton() {
  return (
    <a
      href="https://wa.me/254759383583"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M6 26L7.8 19.6C6.65 17.6 6 15.35 6 13C6 6.37 11.37 1 18 1C24.63 1 30 6.37 30 13C30 19.63 24.63 25 18 25C15.95 25 14 24.5 12.3 23.6L6 26Z"
          fill="white"
        />
        <circle cx="13.5" cy="13" r="1.5" fill="currentColor" />
        <circle cx="18" cy="13" r="1.5" fill="currentColor" />
        <circle cx="22.5" cy="13" r="1.5" fill="currentColor" />
      </svg>
    </a>
  );
}

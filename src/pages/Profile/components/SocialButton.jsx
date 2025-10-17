import React from "react";

const SocialButton = ({ icon: Icon, href, colorClass }) => {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center w-12 h-12 rounded-full text-white hover:scale-110 transition-transform duration-300 shadow-lg ${colorClass}`}
    >
      <Icon size={20} />
    </a>
  );
};

export default SocialButton;

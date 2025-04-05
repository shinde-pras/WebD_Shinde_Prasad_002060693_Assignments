import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ textAlign: "center", padding: "1rem", marginTop: "2rem", background: "#f5f5f5", color: "#555" }}>
      <p>&copy; {currentYear} Job Portal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

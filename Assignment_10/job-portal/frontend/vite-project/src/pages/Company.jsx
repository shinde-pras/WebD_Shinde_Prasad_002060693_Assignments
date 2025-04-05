import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const companies = [
  {
    name: "Google",
    description: "Innovating the web through search and AI.",
    logo: "https://logo.clearbit.com/google.com",
  },
  {
    name: "Microsoft",
    description: "Empowering people through technology.",
    logo: "https://logo.clearbit.com/microsoft.com",
  },
  {
    name: "Amazon",
    description: "Delivering smiles worldwide with smart logistics.",
    logo: "https://logo.clearbit.com/amazon.com",
  },
  {
    name: "Meta",
    description: "Building the future of social connection.",
    logo: "https://logo.clearbit.com/meta.com",
  },
  {
    name: "OpenAI",
    description: "Shaping safe and beneficial artificial general intelligence.",
    logo: "https://logo.clearbit.com/openai.com",
  },
];

const Company = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Header />
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2 style={{ color: "#2e7d32", marginBottom: "40px" }}>Featured Companies</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          {companies.map((company, index) => (
            <div
              key={index}
              style={{
                width: "280px",
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                style={{ width: "80px", height: "80px", marginBottom: "20px" }}
                onError={(e) => (e.target.style.display = "none")}
              />
              <h3 style={{ color: "#1b5e20", fontSize: "1.25rem" }}>{company.name}</h3>
              <p style={{ fontSize: "0.95rem", color: "#444" }}>{company.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Company;

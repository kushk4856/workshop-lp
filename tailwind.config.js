/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Yellow/Gold colors
        "primary-yellow": "#f5b700",
        "secondary-yellow": "#ffc800",

        
        "grey-dark": "#708d6a",
        "grey-medium": "#c6c8c8",
        "grey-light": "#e8e8e8",

  
        "brand-black": "#0f0f0f",
        "brand-dark": "#1a1a1a",

       
        "bg-light": "#f5f5f5",
        "bg-dark": "#0f0f0f",
      },
      fontFamily: {
        // Heading font - Hagrid (Bold/Heavy)
        heading: ["hagrid", "Inter", "system-ui", "sans-serif"],

        // Sub-heading and Body font - Degular (Regular/Medium)
        body: ["degular", "Inter", "system-ui", "sans-serif"],

        // Fallback
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        // Custom typography sizes
        heading: ["4rem", { lineHeight: "1.1", fontWeight: "800" }], // 64pt - Hagrid Heavy
        subheading: ["3rem", { lineHeight: "1.2", fontWeight: "500" }], // 48pt - Degular Medium
        "body-large": ["2rem", { lineHeight: "1.5", fontWeight: "400" }], // 32pt - Degular Regular
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      boxShadow: {
        "glow-yellow": "0 0 20px rgba(245, 183, 0, 0.5)",
        "glow-yellow-lg": "0 0 40px rgba(245, 183, 0, 0.6)",
      },
    },
  },
  plugins: [],
};

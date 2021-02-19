// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "550px",
      // => @media (min-width: 550px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      mdlg: "900px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "108": "27rem",
      },
      screens: {
        print: { raw: "print" },
        // => @media print { ... }
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        "16": "repeat(16, minmax(0, 1fr))",

        // Complex site-specific column configuration
        // footer: "200px minmax(900px, 1fr) 100px",

        // grid-cols-cart-5
        "cart-5": "repeat(4, minmax(0, 50px)) 70px",

        // grid-cols-cart-4
        "cart-4": "repeat(4, minmax(0, 50px))",

        // grid-cols-order  (64 + 192 + 144 + 128 + 72 = 528)
        order: "64px 192px 144px 128px 72px",

        // grid-cols-order-xxs  (40 + 96 + 96 + 80 = 312)
        "order-xxs": "40px 96px 96px 80px",

        // grid-cols-order-xxs1  (40 + 80 + 76 + 70 + 50 = )
        "order-xxs1": "40px 80px 76px 70px 50px",

        // grid-cols-user
        user: "80px 280px 40px 128px",
      },
    },
  },
  variants: {},
  plugins: [],
};

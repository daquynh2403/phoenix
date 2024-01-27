/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "custom-img": "60% 40% 30% 70% / 60% 30% 70% 40%",
      },
      keyframes: {
        morph: {
          "0%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
        },
        slideUp: {
          "0%": {
            transform: "translateY(100px)",
            opacity: "0",
          },
          "50%": {
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: "1",
          },
        },
        fadeLeftIn: {
          "0%": {
            transform: "translateX(-100px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0px)",
            opacity: "1",
          },
        },
        fadeLeftOut: {
          "0%": {
            transform: "translateX(0px)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(-100px)",
            opacity: "0",
          },
        },
        fadeRightIn: {
          "0%": {
            transform: "translateX(100px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0px)",
            opacity: "1",
          },
        },
        slideDown: {
          "0%": {
            transform: "translateY(-50px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: "1",
          },
        },
      },
      animation: {
        morph: "morph 5s ease-in-out infinite",
      },
      supports: {
        "no-scroll-driven-animations": "not(animation-timeline: scroll())",
      },
    },
    variants: {
      extend: {
        translate: ["group-hover", "hover"],
        zIndex: ["group-hover", "hover"],
      },
    },
  },
  plugins: [],
};

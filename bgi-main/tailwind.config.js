/** @type {import('tailwindcss').Config} */
module.exports = { // Note: 'module.exports' is standard for v3 config files
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Covers src/app and src/components
    // Add other paths if your components are outside src/ (e.g., "./components/**/*.{js,ts,jsx,tsx,mdx}")
  ],
  theme: {
    extend: {
      // Your custom screens (breakpoints)
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
        '3xl': '1600px',
        '4xl': '1700px',
      },
      // Your custom font families
      fontFamily: {
        FiraSans: ['Fira Sans', 'sans-serif'],
      },
      // Your custom colors
      colors: {
        PrimaryColor: '#0E376E',           // Use direct hex values here
        PrimaryColor2: '#4d43f9',
        Secondarycolor: '#2FB3E5',
        Secondarycolor2: '#3730a3',
        // ... and so on for all your custom colors
        HeadingColor: '#1e1b4b',
        HeadingColor2: '#09162f',
        TextColor: '#b3b8e0',
        TextColor2: '#8c94b3',
        BodyBg: '#e9eafe',
        DarkBg: '#1e1b4b',
        BodyBg2: '#0f172a',
        BodyBg3: '#1d1d7c',
        BodyBg4: '#f4f8f9',
        BorderColor: '#d9ddff',
        BorderColor2: '#ffffff33',
      },
      // Your custom keyframes
      keyframes: {
        movebtn: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        // ... all other keyframes ...
        rotational: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        rotate: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      // Your custom animations
      animation: {
        movebtn: 'movebtn 3s linear infinite',
        wiggle: 'wiggle 5s ease-in-out infinite',
        rotational: 'rotational 10s linear infinite',
        rotate: 'rotate 20s linear infinite',
        // Use camelCase in the config, Tailwind will convert to kebab-case for classes
        zoomInOut: 'zoomInOut 2s alternate infinite',
        dance2: 'dance2 3s alternate infinite',
        dance3: 'dance3 2s alternate infinite',
        dance4: 'dance4 10s alternate infinite',
        dance5: 'dance5 10s alternate infinite',
        dance7: 'dance7 4s alternate infinite',
        swing: 'swing 1s ease-in-out 1s forwards infinite alternate',
        headerSlideDown: 'headerSlideDown 500ms ease-in-out 0s normal none 1 running',
      },
      // Your custom box shadows
      boxShadow: {
        cases: '0px 10px 15px rgba(187, 187, 187, 0.2)',
        shade: '0px 0px 20px rgba(187, 187, 187, 0.2)',
        shades: '0px 5px 40px rgba(189, 202, 202, 0.35)',
        // Rename 'shadow' to avoid conflict with default Tailwind shadows
        customShadow: '0px 30px 50px rgba(152,178,240,0.5)',
      },
      // Your custom drop shadows
      dropShadow: { 'custom-shadow': '0px 10px 40px rgba(12, 110, 109, 0.1)' },
      lineHeight: {}, // If this was empty, leave it, or define specific values
    },
  },
  plugins: [],
};
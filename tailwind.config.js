/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}"],
    theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            serif: ['Merriweather', 'ui-serif', 'Georgia'],
            mono: ['Fira Code', 'ui-monospace', 'monospace'],
            saira: ['Saira', 'ui-sans-serif', 'system-ui'],
            
          },
        },
      },
    plugins: [],
  }
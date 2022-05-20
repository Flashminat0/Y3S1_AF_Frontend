module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    important: '#__next',
    theme: {
        extend: {},
        fontFamily: {
            sans: ["Signika", "sans-serif"],
        }
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}

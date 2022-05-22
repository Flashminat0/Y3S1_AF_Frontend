module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    important: ['#__next', 'headlessui-portal-root'],
    theme: {
        extend: {},
        fontFamily: {
            sans: ['Signika', 'sans-serif'],
        },
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
}

// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#FED700',
                secondary:'#F4F4FA'
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
    ],
}
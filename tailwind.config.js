// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#F59E0B',
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
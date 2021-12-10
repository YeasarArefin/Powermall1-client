// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#11A0DB',
                secondary:'#F4F4FA'
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
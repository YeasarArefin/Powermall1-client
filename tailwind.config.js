// tailwind.config.js
module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#fc3c3c',
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
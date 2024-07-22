/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                'wine-primary': '#ddc3a5',
                'wine-secondary': '#201e20',
                'wine-tertiary': '#e0a96d',
            },
        },
    },
    plugins: [],
};

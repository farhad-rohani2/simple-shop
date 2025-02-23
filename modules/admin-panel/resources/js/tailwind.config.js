/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.vue", "../views/**/*.blade.php"],
    theme: {
        extend: {
            typography: ({ theme }) => ({
                blueGray: {
                    css: {
                        '--tw-prose-body': '#686e7d',
                    },
                },
            }),
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
    ],
};

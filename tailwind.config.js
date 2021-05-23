module.exports = {
    mode: 'jit',
    purge: {
        preserveHtmlElements: false,
        content: [
            './**/*.html',
        ]
    },
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                eldoria: {
                    header: '#5A0009',
                    background: '#1B2833',
                    accent: '#11838B',
                    input: '#B6D1D2'
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

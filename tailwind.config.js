module.exports = {
    content: ["./src/**/*.tsx", "./index.html"],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                'xs': '320px'
            },
            colors: {
                principle: {
                    300: '#005DFE'
                },
                brand: {
                    300: '#FFFFFF'
                },
                action: {
                    300: '#B7990D',
                    500: '#927a0a'
                }
            },
            fontFamily: {
                textMeOne: ['"textmeone"'],
                lobster: ['"lobster"'],
                montserrat: ['"montserrat"'],
                josefinSans: ['"josefinSans"']
            },
            animation: {
                zoom: 'zoom 1.5s ease-out infinite',
                hover: 'hover 1.5s ease-in-out',
                'direction-right': 'direction-right 3s ease-in-out infinite',
                'direction-left': 'direction-left 3s ease-in-out infinite',
            },
            keyframes: {
                zoom: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.3)' }
                },
                hover: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.1)' }
                },
                'direction-right': {
                    '0%, 100%': { transform: 'translateX(-50%)' },
                    '50%': { transform: 'translateX(0.4px)' }
                },
                'direction-left': {
                    '0%, 100%': { transform: 'translateX(50%)' },
                    '50%': { transform: 'translateX(-0.4px)' }
                }
            }
        },
    },
    plugins: [],
}
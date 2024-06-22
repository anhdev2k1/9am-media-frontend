/* eslint-disable @typescript-eslint/no-explicit-any */

import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette'
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        play: ['Montserrat', 'sans-serif']
      },
      backgroundColor: {
        primary: '#efefef'
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        }
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        moveTop: {
          from: { transform: 'translateY(20px)' },
          to: { transform: 'translateY(-20px)' }
        },
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%'
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%'
          }
        },
        sayHi: {
          from: {
            transform: 'rotateX(20deg)'
          },
          to: {
            transform: 'rotateX(-20deg)'
          }
        },
        wave: {
          '0%': {
            transform: "rotate(0.0deg)"
        },
        
        "10%": {
            transform: "rotate(14.0deg)"
        },
        "20%": {
            transform: "rotate(-8.0deg)"
        },
        "30%": {
            transform: "rotate(14.0deg)"
        },
        "40%": {
            transform: "rotate(-4.0deg)"
        },
        "50%": {
            transform: "rotate(10.0deg)"
        },
        "60%": {
            transform: "rotate(0.0deg)"
        },
        "100%": {
            transform: "rotate(0.0deg)"
        },
        }
      },
      scaleAnimate: {
        "50%": {
          transform: "scale(.95)"
        },
      
      "100%": {
          transform: "scale(1)"
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        moveTop: 'moveTop 3s ease-out alternate infinite',
        aurora: 'aurora 60s linear infinite',
        sayHi: 'sayHi 5s ease-out alternate infinite',
        wave: 'wave 2.5s infinite',
        scaleAnimate: 'scaleAnimate 1s infinite'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), addVariablesForColors]
}
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
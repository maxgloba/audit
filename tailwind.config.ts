import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],       // ~12px
      sm: ['0.875rem', { lineHeight: '1.25rem' }],  // ~14px
      base: ['1rem', { lineHeight: '1.5rem' }],     // ~16px
      lg: ['1.125rem', { lineHeight: '1.75rem' }],  // ~18px
      xl: ['1.25rem', { lineHeight: '1.75rem' }],   // ~20px
      '2xl': ['1.5rem', { lineHeight: '2rem' }],    // ~24px
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // ~30px
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // ~36px
      '5xl': ['3rem', { lineHeight: '1' }],            // ~48px
      '6xl': ['3.75rem', { lineHeight: '1' }],          // ~60px
      '7xl': ['4.5rem', { lineHeight: '1' }],           // ~72px
      '8xl': ['6rem', { lineHeight: '1' }],             // ~96px
      '9xl': ['8rem', { lineHeight: '1' }],             // ~128px
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      smMax: { max: '575px' },
      mdMax: { max: '767px' },
      lgMax: { max: '991px' },
      xlMax: { max: '1199px' },
    },
    extend: {
      fontFamily: {
        serif: ['"Source Serif 4"', 'serif'],
        sans: ['"Roboto Condensed"', 'sans-serif']
      },
      colors: {
        'indigo': colors.indigo,
        'gray': colors.gray,
        'black': colors.black,
        'white': colors.white,
        'zinc': colors.zinc,
        'neutral': colors.neutral,
        'rose': colors.rose,
        'orange': colors.orange,
        'emerald': colors.emerald,
        'fuchsia': colors.fuchsia,
        'font-family-serif': '"Source Serif 4", serif',
        'font-family-sans': '"Roboto Condensed", sans-serif',
      },
    },
  },
  plugins: [],
}

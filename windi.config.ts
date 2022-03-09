import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,

  plugins: [
    typography(),
  ],
  theme: {
    screens: {
      print: { raw: 'print' },
      mobile: { raw: '(max-width: 21cm)' },
      morprint: { raw: 'print, (max-width: 21cm)' },
      tiny: { raw: '(max-width: 11cm)' },
    },
    extend: {
      fontSize: {
        paragraph: '15px',
        subtitle: '14px',
        title: '18px',
        headline: '14px',
      },
      lineHeight: {
        'leading-custom': '22px',
      },
    },
  },
})

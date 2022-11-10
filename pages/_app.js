import { ThemeProvider } from 'next-themes'
import { fuchsia } from 'tailwindcss/colors'
import NextNProgress from "nextjs-progressbar"
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  return [
    <ThemeProvider attribute='class' >
      <NextNProgress color={fuchsia[500]} height={5} />
      <Component {...pageProps} />
    </ThemeProvider>
  ]
}

export default MyApp

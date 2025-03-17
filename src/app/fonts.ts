import { Geist, Geist_Mono, Kameron, Libre_Baskerville } from "next/font/google";


export const libre = Libre_Baskerville({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
})

export const kameron = Kameron({
  variable: "--font-kameron",
  subsets: ['latin'],
  display: 'swap',

})

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

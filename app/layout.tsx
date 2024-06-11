import Link from "next/link"
import Head from "./head"
import "@/styles/global.css"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Link href="/">
          <h1 className="text-3x1 text-blue-500 underline font-bold">Ghita's blog</h1>
        </Link>
        <p className="text-slate-300">Welcome to my tech blog.</p>
      </div>
    </header>
  )

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-6 py-6 text-center text-slate-400">
        <br />
        <h3>Developed by Ghita</h3>
      </div>
    </footer>
  )

  return (
    <html lang="en">
      <body>
        <div className="mx-auto border-blue-500 max-w-2xl">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sree Vardhan Reddy — Software Engineer",
  description:
    "Software Engineer with production experience at DevRev. Shipped 60+ PRs across a large-scale Nx monorepo. Skilled in TypeScript, React, Python, Docker, and CI/CD.",
  openGraph: {
    title: "Sree Vardhan Reddy — Software Engineer",
    description:
      "Software Engineer with production experience at DevRev. Shipped 60+ PRs across a large-scale Nx monorepo.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sree Vardhan Reddy — Software Engineer",
    description:
      "Software Engineer with production experience at DevRev. TypeScript, React, Python, Docker, CI/CD.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

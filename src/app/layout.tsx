import type { Metadata } from "next";
import { Inter, Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Januka Karunakaran | Software Engineer Intern | Full Stack Developer",
  description:
    "Portfolio of Januka Karunakaran – IT undergraduate at University of Moratuwa (CGPA: 3.62/4.00) with hands-on expertise in full-stack development, React.js, Next.js, Spring Boot, MongoDB, and RESTful APIs. Available for Software Engineering & Full Stack Developer Internships.",
  keywords: [
    "Januka Karunakaran",
    "Software Engineer Intern",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Spring Boot",
    "MongoDB",
    "University of Moratuwa",
    "IT undergraduate",
    "Portfolio",
  ],
  authors: [{ name: "Januka Karunakaran", url: "https://github.com/januka-karunakaran" }],
  openGraph: {
    title: "Januka Karunakaran | Software Engineer Intern",
    description:
      "Full Stack Developer | IT Undergraduate at University of Moratuwa | Building modern web applications with React, Next.js, Spring Boot & MongoDB.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Januka Karunakaran | Software Engineer Intern",
    description: "Full Stack Developer & IT undergraduate building modern web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

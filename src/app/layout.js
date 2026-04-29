import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rakib Khan | Cloud & DevOps Engineer",
  description:
    "Portfolio of Rakib Khan — Cloud & DevOps Engineer, Site Reliability Engineer, and Full Stack Developer. 7+ years of experience scaling systems on AWS, Kubernetes, and CI/CD.",
  keywords: [
    "DevOps Engineer",
    "SRE",
    "Cloud Engineer",
    "AWS",
    "Kubernetes",
    "Terraform",
    "Full Stack Developer",
    "Rakib Khan",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen" style={{ backgroundColor: "var(--color-bg-primary)" }}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Throct - Technology Solutions That Move",
  description: "Cutting-edge software development, cloud solutions, cybersecurity, and AI/ML services. We build technology that transforms businesses.",
  keywords: "software development, cloud solutions, cybersecurity, AI, machine learning, tech agency",
  openGraph: {
    title: "Throct - Technology Solutions That Move",
    description: "Cutting-edge software development, cloud solutions, cybersecurity, and AI/ML services.",
    url: "https://throct.com",
    siteName: "Throct",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="noise antialiased">
        {children}
      </body>
    </html>
  );
}

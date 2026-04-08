import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "FirstDollar — Zero-to-Revenue Playbook for Solo SaaS Founders",
  description: "The 30-day challenge that takes you from idea to paying customer. Cohort community, Traction Score tracking, and a proven playbook — all in one place.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

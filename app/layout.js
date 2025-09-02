import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Robin's Touch Senior Care",
  description: "Compassionate non-medical caregiver in Denver Metro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-graybg text-brand-charcoal">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
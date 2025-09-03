import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

export const metadata = {
  title: "Robin’s Touch Senior Care",
  description: "Compassionate non-medical senior care in Denver, CO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-slate-900">
        <Header />
        {/* single spacer for the sticky/fixed header height */}
        <main className="pt-20 md:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

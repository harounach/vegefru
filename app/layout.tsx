import "@/app/ui/global.css";
import Header from "@/app/ui/navigation/Header";
import Footer from "@/app/ui/navigation/Footer";
import { poppins } from "@/app/ui/fonts";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import "@/app/ui/global.css";
import Header from "@/app/ui/navigation/Header";
import Footer from "@/app/ui/navigation/Footer";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

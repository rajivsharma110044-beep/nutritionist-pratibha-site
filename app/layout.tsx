import "./globals.css";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor"; // Ensure this matches your cursor file name

export const metadata = {
  title: "Nutritionist Pratibha | Clinical Dietitian",
  description: "Expert clinical nutrition for PCOS, pregnancy, weight management, and holistic health.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 'scroll-smooth' helps with standard anchor links, while 'cursor-none' hides the default cursor for our custom one
    <html lang="en" className="scroll-smooth">
      <body className="cursor-none bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col">
        
        {/* Our modern custom cursor */}
        <Cursor />
        
        {/* The Navbar sits at the very top of every page */}
        <Navbar />
        
        {/* This renders the content of whatever page you are currently on */}
        <main className="flex-grow">
          {children}
        </main>

      </body>
    </html>
  );
}
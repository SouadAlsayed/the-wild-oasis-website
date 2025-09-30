import Logo from "@/app/components/Logo";
import Navigation from "@/app/components/Navigation";

import "@/app/_styles/globals.css";

export const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  );
}

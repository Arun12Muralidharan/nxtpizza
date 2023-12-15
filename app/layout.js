import NavBar from "./NavBar";
import "./globals.css";

export const metadata = {
  title: "Nxt Pizza",
  description: "Nxt gen online pizza",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

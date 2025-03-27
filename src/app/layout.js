import "./globals.css";

export const metadata = {
  title: "Bordex",
  description:
    "Optimiza tus procesos con Bordex la herramienta ideal para el control eficiente de inventarios.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

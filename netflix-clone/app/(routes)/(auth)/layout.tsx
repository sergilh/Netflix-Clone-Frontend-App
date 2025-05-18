
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="es">
        <body
          className={`  bg-zinc-900`}
            >
                <h1>AuthLayout</h1>
          {children}
        </body>
      </html>
    );
  }
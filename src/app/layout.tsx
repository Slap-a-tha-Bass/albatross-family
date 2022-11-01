import '@styles/css/styles.css';
import { Inter } from '@next/font/google';
import Header from '@components/nav/header';

const inter = Inter();

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Next.js</title>
      </head>
      <body className="container">
        <Header />
        {children}
      </body>
    </html>
  );
}

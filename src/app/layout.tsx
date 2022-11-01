import '@styles/css/styles.css';
import Header from '@components/nav/header';

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
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

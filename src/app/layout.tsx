import '@styles/css/styles.css';
import Header from '@components/nav/header';

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <head>
        <title>albatross family</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

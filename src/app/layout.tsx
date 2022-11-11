import '@styles/css/styles.css';
import Header from '@components/nav/header';
import Footer from '@components/nav/footer';

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className='grid'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright © {currentYear} | Website by Pariah Projects</p>
    </footer>
  );
}

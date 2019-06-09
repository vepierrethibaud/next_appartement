import Link from 'next/link';
import "../css/style.css"

const Header = () => (
  <nav>
    <Link href="/">
      <a className="logo">Loca'<span>part</span></a>
    </Link>
    
    <div>
      <Link href="/">
        <a className="nav-margin">Home</a>
      </Link>
      <Link href="/about">
        <a className="nav-margin">About</a>
      </Link>
    </div>
  </nav>
);

export default Header;
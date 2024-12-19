import Link from "next/link";
const Header = () => {
  return (
    <header className="py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <ul className="flex gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

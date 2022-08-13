import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/home">Home</Link>
      <Link href="/login">login</Link>
    </nav>
  );
}

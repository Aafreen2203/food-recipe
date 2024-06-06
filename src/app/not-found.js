import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>404|Page NOT FOUND.</h1>
      <Link href={"/"}>Go to Home Page</Link>
    </div>
  );
}

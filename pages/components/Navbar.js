import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row space-x-4 p-3 bg-cyan-200">
      <Link href="/">Home</Link>
      <Link href="about">About</Link>
      <Link href="profile">Profile</Link>
    </div>
  );
};

export default Navbar;

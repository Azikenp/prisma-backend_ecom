import { Nav, NavLink } from "@/components/Nav";

export const dynamic = "force-dynamic";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/products">Products</NavLink>
        <NavLink href="/orders">My Orders</NavLink>
      </Nav>
      <div className="container p-[2rem] my-6">{children}</div>
    </>
  );
}

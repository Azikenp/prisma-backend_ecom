import {Nav} from "@/components/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        hr
      </Nav>
      <div className="container my-6"></div>
    </>
  );
}

import SideNav from "../ui/components/sidenav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div>
        <SideNav />
      </div>

      {/* Main content */}
      <div className="w-4/5 p-4">{children}</div>
    </div>
  );
}

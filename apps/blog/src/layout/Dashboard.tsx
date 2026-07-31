import { Outlet } from "@tanstack/react-router";

export default function Dashboard() {
  return (
    <>
      <header>Header</header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

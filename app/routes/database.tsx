import { Outlet } from "@remix-run/react";

export default function DatabaseRoute() {
  return (
    <div>
      <h1>Database Search 🔎</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

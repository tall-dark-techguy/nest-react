import { Link, Outlet } from "react-router-dom";
import { Button } from "../ui/button";

export default function RootLayout() {
  return (
    <>
      <main className="bg-neutral-100 min-h-screen py-4 px-4">
        <header className="max-w-6xl mx-auto p-2 bg-white rounded-full">
          <nav className="flex items-center justify-center gap-x-4">
            <Link to="/">
              <Button variant="link">Home</Button>
            </Link>

            <Link to="/signup">
              <Button variant="link">Sign up</Button>
            </Link>

            <Link to="/login">
              <Button variant="link">Login</Button>
            </Link>
          </nav>
        </header>

        <Outlet />
      </main>
    </>
  );
}

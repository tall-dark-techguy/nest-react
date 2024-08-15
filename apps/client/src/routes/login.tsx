import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export default function LoginRoute() {
  return (
    <>
      <section className="px-6 py-16 max-w-6xl mx-auto bg-white mt-4">
        <div className="space-y-4 max-w-md mx-auto">
          <article className="pb-4">
            <h1 className="text-3xl font-extrabold">Welcome back, Chief.</h1>
            <p className="text-neutral-600">Login to your account.</p>
          </article>

          <div>
            <Label>Email</Label>
            <Input placeholder="Enter email address" />
          </div>

          <div>
            <Label>Password</Label>
            <Input placeholder="Enter password" />

            <div className="flex justify-end mt-2 tracking-tight">
              <Link to="/login">Forgot password?</Link>
            </div>
          </div>

          <Button className="w-full">Log in</Button>
        </div>

        <p className="text-center mt-8 tracking-tight">
          <Link to="/signup">I don't have an account</Link>
        </p>
      </section>
    </>
  );
}

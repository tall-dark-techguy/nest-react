import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignupRoute() {
  const [firstName, setFirstName] = useState<string>();
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = async () => {
    setSubmitting(true);

    try {
      const response = await fetch("/api/signup", {
        method: "post",
        body: JSON.stringify({ firstName }),
      });
      const responseJSON = await response.json();
      alert(responseJSON.message);
    } catch (error) {
      alert("Could not create your account. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="px-6 py-16 max-w-6xl mx-auto bg-white mt-4">
        <div className="space-y-4 max-w-md mx-auto">
          <article className="pb-4">
            <h1 className="text-3xl font-extrabold">Get started.</h1>
            <p className="text-neutral-600">Create your free account.</p>
          </article>

          <div className="grid grid-cols-2 gap-x-4">
            <div>
              <Label>First Name</Label>
              <Input
                value={firstName || ""}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter first name"
              />
            </div>

            <div>
              <Label>Last Name</Label>
              <Input placeholder="Enter last name" />
            </div>
          </div>

          <div>
            <Label>Email</Label>
            <Input placeholder="Enter email address" />
          </div>

          <div>
            <Label>Password</Label>
            <Input placeholder="Enter password" />
          </div>

          <Button
            onClick={handleSubmit}
            className="w-full"
            disabled={submitting}
          >
            {submitting ? "Please wait..." : "Create account"}
          </Button>
        </div>

        <p className="text-center mt-8 tracking-tight">
          <Link to="/login">Already have an account?</Link>
        </p>
      </section>
    </>
  );
}

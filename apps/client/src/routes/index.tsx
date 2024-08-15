import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PexelImg from "../assets/images/pexel.jpg";
import { useEffect, useState } from "react";

export default function RootRoute() {
  const [data, setData] = useState<{ username?: string; fullName?: string }>();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/user");
      const { data } = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <section className="p-6 max-w-6xl mx-auto bg-white rounded-lg mt-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold mb-4">Welcome to the Root</h2>
          <p className="max-w-2xl mx-auto mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            perferendis autem esse, molestiae veritatis odit quidem quo
            voluptatibus et. Nisi nam sint distinctio! Unde ad a tenetur culpa,
            molestias dolores?
          </p>

          <p className="text-neutral-500">
            {data?.fullName} @{data?.username}
          </p>
        </div>

        <div className="flex items-center gap-x-4 justify-center mb-12">
          <Link to="/signup">
            <Button>Get started</Button>
          </Link>

          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
        </div>

        <figure className="max-w-2xl mx-auto">
          <img src={PexelImg} alt="" className="w-full rounded-xl" />
        </figure>
      </section>
    </>
  );
}

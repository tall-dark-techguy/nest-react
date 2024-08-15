import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layouts/root";

const routes = import.meta.glob("./routes/*.tsx", { eager: true });

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: Object.entries(routes).map(([path, module]) => {
      const routePath = path.match(/\.\/routes\/(.*)\.tsx$/)?.[1] || "";
      const Element = (module as { default: React.ComponentType }).default;
      return {
        path: routePath === "index" ? "/" : `/${routePath.toLowerCase()}`,
        element: <Element />,
      };
    }),
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

import {
  Links,
  LiveReload,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesHref from "~/styles/global.css?url";
import { useEffect } from "react";
import { useFormBuilderStore } from "~/store/useFormBuilderStore";
import BuilderSidebar from "~/components/BuilderSidebar";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesHref },
];

export default function App() {
  const theme = useFormBuilderStore((state) => state.theme);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix Form Builder</title>
        <Links />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="flex flex-col sm:flex-row min-h-screen">
          <BuilderSidebar />
          <main className="flex-1 bg-white dark:bg-gray-900 p-4 sm:p-8 transition-colors duration-300">
            <Outlet />
          </main>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

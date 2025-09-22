import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);

  if (url.pathname.startsWith("/.well-known/")) {
    return new Response("Not Found", { status: 404 });
  }

  return json({ message: "Route not found" }, { status: 404 });
};

export default function CatchAll() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">404</h1>
        <p className="mb-8 text-gray-600">Page not found</p>
        <a
          href="/"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => [
  { title: "NoteFlow - Your Digital Notes" },
];

export default function Index() {
  const user = useOptionalUser();

  console.log(user, "==user==");
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="mb-4 text-6xl font-bold text-white md:text-8xl">
              NoteFlow
            </h1>
            <p className="mb-8 text-xl text-gray-200 md:text-2xl">
              Organize your thoughts, capture your ideas
            </p>
          </div>

          <div className="mx-auto mb-12 max-w-2xl">
            <p className="text-lg leading-relaxed text-gray-300">
              A beautiful, intuitive note-taking application built with modern
              web technologies. Create, edit, and manage your notes with ease.
            </p>
          </div>

          {user ? (
            <div className="space-y-4">
              <Link
                to="/notes"
                className="inline-flex items-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-indigo-900 shadow-lg transition-colors duration-200 hover:bg-gray-100"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Go to My Notes
              </Link>
              <p className="text-gray-300">Welcome back, {user.email}!</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/login"
                className="inline-flex items-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-indigo-900 shadow-lg transition-colors duration-200 hover:bg-gray-100"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                Sign In
              </Link>
              <Link
                to="/join"
                className="inline-flex items-center rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-indigo-900"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
                Get Started
              </Link>
            </div>
          )}
        </div>

        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">
              Fast & Simple
            </h3>
            <p className="text-gray-300">
              Create and edit notes with lightning speed
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Secure</h3>
            <p className="text-gray-300">Your notes are safe and private</p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Beautiful</h3>
            <p className="text-gray-300">Enjoy a clean and modern interface</p>
          </div>
        </div>
      </div>
    </div>
  );
}

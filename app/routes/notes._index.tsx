import { Link } from "@remix-run/react";

export default function NoteIndexPage() {
  return (
    <div className="rounded-lg border bg-white p-12 text-center shadow-sm">
      <div className="mx-auto max-w-md">
        <svg
          className="mx-auto mb-6 h-16 w-16 text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <h3 className="mb-2 text-lg font-medium text-gray-900">
          Welcome to NoteFlow
        </h3>
        <p className="mb-6 text-gray-500">
          Select a note from the sidebar to view it, or create a new note to get
          started.
        </p>
        <Link
          to="new"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Create your first note
        </Link>
      </div>
    </div>
  );
}

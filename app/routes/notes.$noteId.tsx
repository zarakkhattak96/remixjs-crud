import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  isRouteErrorResponse,
  useActionData,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import invariant from "tiny-invariant";

import { deleteNote, getNote, updateNote } from "~/models/note.server";
import { requireUserId } from "~/session.server";

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const userId = await requireUserId(request);
  invariant(params.noteId, "noteId not found");

  const note = await getNote({ id: params.noteId, userId });
  if (!note) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ note });
};

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const userId = await requireUserId(request);
  invariant(params.noteId, "noteId not found");

  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "delete") {
    await deleteNote({ id: params.noteId, userId });
    return redirect("/notes");
  }

  if (intent === "update") {
    const title = formData.get("title");
    const body = formData.get("body");

    if (typeof title !== "string" || title.length === 0) {
      return json(
        { errors: { body: null, title: "Title is required" } },
        { status: 400 },
      );
    }

    if (typeof body !== "string" || body.length === 0) {
      return json(
        { errors: { body: "Body is required", title: null } },
        { status: 400 },
      );
    }

    await updateNote({ id: params.noteId, title, body, userId });
    return redirect(`/notes/${params.noteId}`);
  }

  return null;
};

export default function NoteDetailsPage() {
  const data = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <div className="rounded-lg border bg-white shadow-sm">
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            {data.note.title}
          </h2>
          <div className="flex space-x-2">
            <Form method="post" className="inline">
              <input type="hidden" name="intent" value="delete" />
              <button
                type="submit"
                className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                onClick={(e) => {
                  if (!confirm("Are you sure you want to delete this note?")) {
                    e.preventDefault();
                  }
                }}
              >
                <svg
                  className="mr-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Delete
              </button>
            </Form>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="prose prose-lg max-w-none">
          <div className="whitespace-pre-wrap leading-relaxed text-gray-700">
            {data.note.body}
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <Form method="post" className="space-y-4">
            <input type="hidden" name="intent" value="update" />

            <div>
              <label
                htmlFor="edit-title"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Edit Title
              </label>
              <input
                id="edit-title"
                name="title"
                type="text"
                defaultValue={data.note.title}
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="Enter note title..."
              />
              {actionData?.errors?.title ? (
                <div className="mt-2 text-sm text-red-600">
                  {actionData.errors.title}
                </div>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="edit-body"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Edit Content
              </label>
              <textarea
                id="edit-body"
                name="body"
                rows={8}
                defaultValue={data.note.body}
                className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="Write your note content here..."
              />
              {actionData?.errors?.body ? (
                <div className="mt-2 text-sm text-red-600">
                  {actionData.errors.body}
                </div>
              ) : null}
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Update Note
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (error instanceof Error) {
    return <div>An unexpected error occurred: {error.message}</div>;
  }

  if (!isRouteErrorResponse(error)) {
    return <h1>Unknown Error</h1>;
  }

  if (error.status === 404) {
    return <div>Note not found</div>;
  }

  return <div>An unexpected error occurred: {error.statusText}</div>;
}

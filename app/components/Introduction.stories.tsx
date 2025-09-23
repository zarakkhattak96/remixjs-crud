import type { Meta, StoryObj } from "@storybook/react-vite";

const Introduction = () => {
  return (
    <div className="mx-auto max-w-4xl p-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          NoteFlow - Remix CRUD App
        </h1>
        <p className="text-xl text-gray-600">
          Welcome to the Storybook for <strong>NoteFlow</strong>, a modern
          note-taking application built with Remix.js.
        </p>
      </div>

      <div className="mb-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            🎯 About This App
          </h2>
          <p className="mb-4 text-gray-700">
            NoteFlow is a full-stack CRUD application that allows users to:
          </p>
          <ul className="list-inside list-disc space-y-2 text-gray-700">
            <li>
              <strong>Create</strong> new notes with rich text editing
            </li>
            <li>
              <strong>Read</strong> and view existing notes
            </li>
            <li>
              <strong>Update</strong> note content and titles
            </li>
            <li>
              <strong>Delete</strong> notes they no longer need
            </li>
          </ul>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            🛠️ Tech Stack
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <strong>Frontend:</strong> Remix.js, React, TypeScript
            </li>
            <li>
              <strong>Styling:</strong> Tailwind CSS
            </li>
            <li>
              <strong>Database:</strong> Prisma ORM with SQLite
            </li>
            <li>
              <strong>Authentication:</strong> Session-based auth with bcrypt
            </li>
            <li>
              <strong>Testing:</strong> Cypress for E2E tests
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-12 rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900">
          📚 Component Library
        </h2>
        <p className="mb-4 text-gray-700">
          This Storybook showcases the reusable components used throughout the
          application:
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">
              Core Components
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>RichTextEditor</strong> - Simple text editor for note
                content
              </li>
              <li>
                <strong>NoteCard</strong> - Display component for individual
                notes
              </li>
              <li>
                <strong>Button</strong> - Consistent button component with
                variants
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">
              Features
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Interactive Controls</strong> - Test component props in
                real-time
              </li>
              <li>
                <strong>Accessibility Testing</strong> - Built-in a11y
                validation
              </li>
              <li>
                <strong>Responsive Design</strong> - Test components at
                different screen sizes
              </li>
              <li>
                <strong>Documentation</strong> - Auto-generated docs from your
                stories
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            🚀 Getting Started
          </h2>
          <ol className="list-inside list-decimal space-y-2 text-gray-700">
            <li>
              <strong>View Components:</strong> Browse the component library in
              the sidebar
            </li>
            <li>
              <strong>Test Props:</strong> Use the Controls panel to modify
              component properties
            </li>
            <li>
              <strong>Check Accessibility:</strong> Review a11y issues in the
              Accessibility panel
            </li>
            <li>
              <strong>View Docs:</strong> Read component documentation in the
              Docs tab
            </li>
          </ol>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            📖 Development
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <strong>Start Storybook:</strong>{" "}
              <code className="rounded bg-gray-100 px-2 py-1 text-sm">
                pnpm run storybook
              </code>
            </li>
            <li>
              <strong>Build Storybook:</strong>{" "}
              <code className="rounded bg-gray-100 px-2 py-1 text-sm">
                pnpm run build-storybook
              </code>
            </li>
            <li>
              <strong>Start App:</strong>{" "}
              <code className="rounded bg-gray-100 px-2 py-1 text-sm">
                pnpm run dev
              </code>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 rounded-lg bg-gray-50 p-6 text-center">
        <p className="italic text-gray-600">
          This Storybook is automatically updated as you develop new components
          and features.
        </p>
      </div>
    </div>
  );
};

const meta: Meta<typeof Introduction> = {
  title: "Introduction",
  component: Introduction,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Welcome: Story = {};

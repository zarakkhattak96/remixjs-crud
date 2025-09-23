import type { Meta, StoryObj } from "@storybook/react-vite";

interface NoteCardProps {
  title: string;
  content: string;
  createdAt: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

const NoteCard = ({
  title,
  content,
  createdAt,
  onEdit,
  onDelete,
}: NoteCardProps) => {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex items-start justify-between">
        <h3 className="truncate pr-4 text-lg font-semibold text-gray-900">
          {title}
        </h3>
        <div className="flex space-x-2">
          {onEdit && (
            <button
              onClick={onEdit}
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              Edit
            </button>
          )}
          {onDelete && (
            <button
              onClick={onDelete}
              className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
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
          )}
        </div>
      </div>
      <p className="mb-4 line-clamp-3 text-sm text-gray-700">{content}</p>
      <div className="text-xs text-gray-500">Created: {createdAt}</div>
    </div>
  );
};

const meta: Meta<typeof NoteCard> = {
  title: "Components/NoteCard",
  component: NoteCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The title of the note",
    },
    content: {
      control: "text",
      description: "The content of the note",
    },
    createdAt: {
      control: "text",
      description: "Creation date of the note",
    },
    onEdit: {
      action: "edit clicked",
      description: "Callback when edit button is clicked",
    },
    onDelete: {
      action: "delete clicked",
      description: "Callback when delete button is clicked",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "My First Note",
    content:
      "This is a sample note with some content to demonstrate how the note card looks.",
    createdAt: "2024-01-15",
    onEdit: () => console.log("Edit clicked"),
    onDelete: () => console.log("Delete clicked"),
  },
};

export const LongTitle: Story = {
  args: {
    title: "This is a Very Long Note Title That Should Be Truncated",
    content:
      "This note has a very long title to test how the component handles text truncation.",
    createdAt: "2024-01-15",
    onEdit: () => console.log("Edit clicked"),
    onDelete: () => console.log("Delete clicked"),
  },
};

export const LongContent: Story = {
  args: {
    title: "Note with Long Content",
    content:
      "This note has a lot of content to demonstrate how the component handles longer text. The content should be truncated with a line clamp to maintain a consistent card height. This is particularly useful when displaying multiple notes in a grid or list layout.",
    createdAt: "2024-01-15",
    onEdit: () => console.log("Edit clicked"),
    onDelete: () => console.log("Delete clicked"),
  },
};

export const ReadOnly: Story = {
  args: {
    title: "Read-Only Note",
    content: "This note card is in read-only mode with no action buttons.",
    createdAt: "2024-01-15",
  },
};

export const MinimalActions: Story = {
  args: {
    title: "Note with Edit Only",
    content: "This note only has an edit button, no delete option.",
    createdAt: "2024-01-15",
    onEdit: () => console.log("Edit clicked"),
  },
};

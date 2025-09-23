import type { Meta, StoryObj } from "@storybook/react-vite";

import { RichTextEditor } from "./BlockNoteEditor";

const meta: Meta<typeof RichTextEditor> = {
  title: "Components/RichTextEditor",
  component: RichTextEditor,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    initialContent: {
      control: "text",
      description: "Initial content of the editor",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the editor",
    },
    editable: {
      control: "boolean",
      description: "Whether the editor is editable",
    },
    onChange: {
      action: "changed",
      description: "Callback function when content changes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Write your note content here...",
    editable: true,
  },
};

export const WithInitialContent: Story = {
  args: {
    initialContent:
      "This is some initial content in the editor. You can edit this text.",
    placeholder: "Write your note content here...",
    editable: true,
  },
};

export const ReadOnly: Story = {
  args: {
    initialContent:
      "This content cannot be edited because the editor is in read-only mode.",
    placeholder: "Write your note content here...",
    editable: false,
  },
};

export const Empty: Story = {
  args: {
    initialContent: "",
    placeholder: "Start typing your note...",
    editable: true,
  },
};

export const LongContent: Story = {
  args: {
    initialContent: `This is a longer example of content that demonstrates how the editor handles multiple lines of text.

You can see that it maintains proper spacing and formatting.

The editor will automatically expand to accommodate longer content, making it easy to write detailed notes.

This is particularly useful for:
- Meeting notes
- Project documentation
- Personal journaling
- Creative writing

The textarea will grow as needed to fit the content.`,
    placeholder: "Write your note content here...",
    editable: true,
  },
};

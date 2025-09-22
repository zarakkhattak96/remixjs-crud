import React from "react";

interface RichTextEditorProps {
  initialContent?: string;
  onChange?: (content: string) => void;
  placeholder?: string;
  editable?: boolean;
}

function SimpleTextEditor({
  initialContent = "",
  onChange,
  placeholder = "Write your note content here...",
  editable = true,
}: RichTextEditorProps) {
  return (
    <div className="min-h-[300px] rounded-md border border-gray-300 bg-white">
      <div className="p-4">
        <textarea
          value={initialContent}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          disabled={!editable}
          className="min-h-[200px] w-full resize-none border-none bg-transparent text-gray-900 placeholder-gray-500 outline-none"
          style={{ minHeight: "200px" }}
        />
      </div>
    </div>
  );
}

export function RichTextEditor(props: RichTextEditorProps) {
  return <SimpleTextEditor {...props} />;
}

export default RichTextEditor;

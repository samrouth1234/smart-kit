import React, { useState } from "react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (
    type: "text" | "number" | "image" | "radio",
    label: string,
    placeholder: string
  ) => void;
}

interface FormField {
  id: number;
  type: "text" | "number" | "image" | "radio";
  value: string | File | null | number;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, onConfirm }) => {
  const [fieldType, setFieldType] = useState<FormField["type"]>("text");
  const [label, setLabel] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>("");

  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm(fieldType, label, placeholder);
    console.log("fieldType", fieldType);
  };

  return (
    <article className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <section className="bg-white p-4 rounded shadow-lg w-1/4">
        <h2 className="text-2xl font-bold mb-2">Add New Field</h2>
        <div className="mb-4">
          {fieldType === "radio" || fieldType === "image" ? (
            <section>
              {/* Label */}
              <label
                htmlFor="label-file"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Label
              </label>
              <input
                id="label-file"
                type="text"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
              />
            </section>
          ) : (
            <section>
              {/* Label */}
              <label
                htmlFor="label-file"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Label
              </label>
              <input
                id="label-file"
                type="text"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
              />
              {/* Placehoder */}
              <label
                htmlFor="placeholder-file"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Placehoder
              </label>
              <input
                id="placeholder-file"
                type="text"
                value={placeholder}
                onChange={(e) => setPlaceholder(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
              />
            </section>
          )}

          {/* Field Types */}
          <label
            htmlFor="fieldType"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Field Type:
          </label>
          <select
            id="fieldType"
            value={fieldType}
            onChange={(e) => setFieldType(e.target.value as FormField["type"])}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="image">Image</option>
            <option value="radio">Radio</option>
          </select>
        </div>
        <div className="mt-4 space-x-2">
          <button
            onClick={handleConfirm}
            className="bg-blue-500 text-white p-2 rounded w-24"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white p-2 rounded w-24"
          >
            No
          </button>
        </div>
      </section>
    </article>
  );
};

export default Dialog;

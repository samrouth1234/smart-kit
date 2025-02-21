import { useState } from "react";
import Dialog from "./Dialog";

interface FormField {
  id: number;
  type: "text" | "number" | "image" | "radio";
  label: string;
  placeholder: string;
  value: string | File | null | number;
}

const FormBuilder = () => {
  const [fields, setFields] = useState<FormField[]>([]);
  const [dialogs, setDialogs] = useState<boolean>(false);

  /**
   * Handle adding a new field using the type selected from the dialog.
   * @param selectedType - The field type chosen in the dialog.
   * @param label - The custom label for the field.
   * @param placeholder - The custom placeholder for the field.
   */
  const handleAddField = (
    selectedType: FormField["type"],
    label: string,
    placeholder: string
  ) => {
    const newField: FormField = {
      id: Date.now(),
      label,
      placeholder,
      type: selectedType,
      value: selectedType === "image" ? null : "",
    };
    setFields([...fields, newField]);
    setDialogs(false);
  };

  /**
   * Handle removing a field.
   * @param id - The id of the field to remove.
   */
  const handleRemoveField = (id: number) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  /**
   * Handle changing the field type.
   * @param id - The id of the field.
   * @param newType - The new field type.
   */
  const handleTypeChange = (id: number, newType: FormField["type"]) => {
    setFields(
      fields.map((field) =>
        field.id === id
          ? { ...field, type: newType, value: newType === "image" ? null : "" }
          : field
      )
    );
  };

  /**
   * Handle the value change of a field.
   * @param id - The id of the field.
   * @param event - The change event.
   */
  const handleValueChange = (
    id: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const field = fields.find((field) => field.id === id);
    if (field) {
      let newValue: string | File | null = "";
      if (field.type === "image") {
        newValue = event.target.files ? event.target.files[0] : null;
      } else {
        newValue = event.target.value;
      }
      setFields(
        fields.map((field) =>
          field.id === id ? { ...field, value: newValue } : field
        )
      );
    }
  };

  /**
   * Handle form submission.
   * @param event - The form event.
   */
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted:", fields);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-4">
        <h2 className="text-xl font-bold mb-4">Dynamic Input Fields</h2>
        {fields.length > 0 ? (
          fields.map((field) => (
            <div key={field.id} className="mb-4">
              <div className="mb-1 font-bold">{field.label}</div>
              <select
                value={field.type}
                onChange={(e) =>
                  handleTypeChange(
                    field.id,
                    e.target.value as FormField["type"]
                  )
                }
                className="mr-2 p-1 border rounded"
              >
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="image">Image</option>
                <option value="radio">Radio</option>
              </select>
              {field.type === "image" ? (
                <input
                  type="file"
                  onChange={(e) => handleValueChange(field.id, e)}
                  className="p-1 border rounded"
                />
              ) : field.type === "radio" ? (
                <input
                  type="radio"
                  value={field.value as string}
                  onChange={(e) => handleValueChange(field.id, e)}
                  className="p-1 border rounded"
                />
              ) : (
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={field.value as string}
                  onChange={(e) => handleValueChange(field.id, e)}
                  className="p-1 border rounded"
                />
              )}
              <button
                type="button"
                onClick={() => handleRemoveField(field.id)}
                className="bg-red-500 text-white p-1 rounded ml-2"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <h1>Please Create Form</h1>
        )}
        <div className="mt-4 space-x-2">
          <button
            type="button"
            onClick={() => setDialogs(true)}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Add Field
          </button>
          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Submit
          </button>
        </div>
      </form>
      <Dialog
        isOpen={dialogs}
        onClose={() => setDialogs(false)}
        onConfirm={handleAddField}
      />
    </div>
  );
};

export default FormBuilder;

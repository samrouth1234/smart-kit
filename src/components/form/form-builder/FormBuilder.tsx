import { useState } from "react";

interface FormField {
  id: number;
  type: "text" | "number" | "image" | "radio";
  value: string | File | null | number;
}

const FormBuilder = () => {
  const [fields, setFields] = useState<FormField[]>([]);

  /**
   * it is used to handle the add field
   * @returns void
   */
  const handleAddField = () => {
    const newField: FormField = { id: Date.now(), type: "text", value: "" };
    setFields([...fields, newField]);
  };

  /**
   * it is used to handle the remove field
   * @param id
   */
  const handleRemoveField = (id: number) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  /**
   * it is used to handle the type change
   * @param id
   * @param newType
   * @returns void
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

  /***
   * funciton using to handle the value change
   * @param id
   * @param event
   * @returns void
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
   * it is used to handle the form submit
   * @param event
   * @returns void
   */
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted:", fields);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="p-4">
        <h2 className="text-xl font-bold mb-4">Dynamic Input Fields</h2>
        {fields.length > 0 ? (
          fields.map((field) => (
            <div key={field.id} className="mb-4">
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
            onClick={handleAddField}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Add Field
          </button>
          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default FormBuilder;

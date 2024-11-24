import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import { CATEGORIES } from "./categories";

const AdminPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: CATEGORIES.UI_ELEMENTS,
    rating: 0,
    price: "",
    description: "",
    code: "",
    previewCode: "",
  });

  const fieldsConfig = [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "category",
      label: "Category",
      type: "select",
      options: Object.values(CATEGORIES),
      required: true,
    },
    {
      name: "rating",
      label: "Rating",
      type: "number",
      min: 0,
      max: 5,
      step: 0.1,
      required: true,
    },
    {
      name: "price",
      label: "Price",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true,
    },
    {
      name: "code",
      label: "Component Code",
      type: "textarea",
      className: "font-mono h-48",
      required: true,
    },
    {
      name: "previewCode",
      label: "Preview Code (JSX)",
      type: "textarea",
      className: "font-mono h-48",
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "components"), {
        ...formData,
        rating: Number(formData.rating),
        createdAt: new Date().toISOString(),
      });

      setFormData({
        title: "",
        category: CATEGORIES.UI_ELEMENTS,
        rating: 0,
        price: "",
        description: "",
        code: "",
        previewCode: "",
      });

      alert("Component added successfully!");
    } catch (error) {
      console.error("Error adding component:", error);
      alert("Error adding component");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const renderField = (field) => {
    switch (field.type) {
      case "text":
      case "number":
        return (
          <input
            key={field.name}
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            className={`w-full bg-gray-700 rounded-md px-4 py-2 text-white ${
              field.className || ""
            }`}
            {...field}
          />
        );
      case "textarea":
        return (
          <textarea
            key={field.name}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            className={`w-full bg-gray-700 rounded-md px-4 py-2 text-white ${
              field.className || ""
            }`}
            {...field}
          />
        );
      case "select":
        return (
          <select
            key={field.name}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-md px-4 py-2 text-white"
            required={field.required}
          >
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Add New Component</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {fieldsConfig.map((field) => (
            <div key={field.name}>
              <label className="block mb-2">{field.label}</label>
              {renderField(field)}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 font-medium"
          >
            Add Component
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;

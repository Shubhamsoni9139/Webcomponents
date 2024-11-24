import React from "react";
import { Star } from "lucide-react";

const ComponentCard = ({ component, onClick }) => (
  <div
    onClick={onClick}
    className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer group hover:ring-2 hover:ring-blue-500 transition-all"
  >
    <div className="p-6 border-b border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">{component.title}</h3>
        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
          {component.category}
        </span>
      </div>
      <p className="text-gray-400 text-sm mb-4">{component.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 mr-1" />
          <span className="text-gray-300">{component.rating}</span>
        </div>
        <span className="text-xl font-bold text-blue-400">
          {component.price}
        </span>
      </div>
    </div>
    <div className="p-4 bg-gray-900/50">
      <div
        dangerouslySetInnerHTML={{ __html: component.previewCode }}
        className="transform scale-90 group-hover:scale-95 transition-transform"
      />
    </div>
  </div>
);

export default ComponentCard;

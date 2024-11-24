import React from "react";
import { Copy, Check } from "lucide-react";

const ComponentDetails = ({ component, onBack, onCopyCode, copiedCode }) => (
  <div className="max-w-4xl mx-auto">
    <div className="flex items-start justify-between mb-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">{component.title}</h1>
        <p className="text-gray-400">{component.description}</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
          {component.category}
        </span>
        <span className="text-2xl font-bold text-blue-400">
          {component.price}
        </span>
      </div>
    </div>

    {/* Preview Section */}
    <div className="bg-gray-800 rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Preview</h2>
      <div
        dangerouslySetInnerHTML={{ __html: component.previewCode }}
        className="bg-gray-900 p-4 rounded-lg"
      />
    </div>

    {/* Code Section */}
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Code</h2>
        <button
          onClick={() => onCopyCode(component.code)}
          className="flex items-center gap-2 px-3 py-1 bg-gray-700 rounded-lg hover:bg-gray-600"
        >
          {copiedCode ? (
            <>
              <Check className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy code
            </>
          )}
        </button>
      </div>
      <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
        <code className="text-gray-300">{component.code}</code>
      </pre>
    </div>
  </div>
);

export default ComponentDetails;

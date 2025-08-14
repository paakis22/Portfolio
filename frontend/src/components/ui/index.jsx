import React from "react";

// Button Component
export function Button({ children, className = "", variant, ...props }) {
  let baseClass = "px-4 py-2 rounded font-medium transition ";
  if (variant === "outline") {
    baseClass += "border border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent";
  } else {
    baseClass += "bg-emerald-600 text-white hover:bg-emerald-700";
  }
  return (
    <button {...props} className={`${baseClass} ${className}`}>
      {children}
    </button>
  );
}

// Card Component
export function Card({ children, className = "" }) {
  return <div className={`p-4 bg-white shadow rounded ${className}`}>{children}</div>;
}

// Badge Component
export function Badge({ children, className = "" }) {
  return (
    <span className={`px-2 py-1 rounded-full bg-emerald-100 text-emerald-800 ${className}`}>
      {children}
    </span>
  );
}

// Dialog Components (simplified)
export function Dialog({ children }) {
  return <div className="relative">{children}</div>;
}

export function DialogTrigger({ children }) {
  return <>{children}</>;
}

export function DialogContent({ children, className = "" }) {
  return (
    <div className={`p-4 bg-white rounded shadow-lg ${className}`}>
      {children}
    </div>
  );
}

export function DialogHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

export function DialogTitle({ children }) {
  return <h3 className="text-xl font-bold">{children}</h3>;
};

// Input Component
export function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${className}`}
    />
  );
};

// Textarea Component
export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      {...props}
      className={`w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${className}`}
    />
  );
}
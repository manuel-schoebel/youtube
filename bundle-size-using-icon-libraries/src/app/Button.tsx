"use client";

import React from "react";

export interface IButton {
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: IButton) {
  return (
    <button
      onClick={onClick}
      className="h-10 px-4 py-2 bg-gray-600 text-black-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    >
      {children}
    </button>
  );
}

export { Button };

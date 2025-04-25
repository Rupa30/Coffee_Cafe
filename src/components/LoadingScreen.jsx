import React from "react";

export default function LoadingScreen() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-yellow-500"></div>
    </div>
  );
}

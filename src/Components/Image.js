import React from "react";

const Image = () => {
  return (
    <div className="relative mx-2">
      <img
        src="https://images.unsplash.com/photo-1595115724770-d07936ff5d74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
        alt="loading..."
        className="w-full h-96 object-cover blur duration-1000 bg-slate-500 hover:blur-none hover:duration-1000"
      />
    </div>
  );
};

export default Image;

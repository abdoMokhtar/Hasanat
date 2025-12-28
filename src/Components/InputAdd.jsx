import React from "react";

const InputAdd = ({ inputRef, Add, Word }) => {
  return (
    <div className="input w-full h-fit flex gap-2.5 justify-center min-w-[300px]  grow">
      <input
        name="Add"
        className="bg-[var(--card-background)] w-9/10 max-w-lg p-4 rounded-xl shadow-[var(--shadow)] border-2 border-[var(--accent-color)] outline-none "
        ref={inputRef}
      />
      <button
        className="px-4 py-2 shadow-[var(--shadow)] bg-[var(--accent-color)] rounded-xl text-[var(--text-color-dark)] hover:bg-[var(--primary-color)] hover:text-[var(--text-color-light)] transition-colors"
        onClick={() => {
          let val = inputRef.current.value;
          if (val) {
            Add(val);
            inputRef.current.value = "";
          }
        }}
      >
        {Word}
      </button>
    </div>
  );
};

export default InputAdd;

import React from 'react';

export default function InputAuth(props) {
  const { title } = props;
  return (
    <div className="mb-4">
      <label htmlFor={title + '-input'} className="text-white font-thin">
        {title}
      </label>
      <input
        type="text"
        id={title + '-input'}
        name={title}
        className="w-full rounded p-2 mt-1 border-2 bg-navy-secondary text-white focus:text-black focus:outline-none focus:bg-slate-50"
      />
    </div>
  );
}

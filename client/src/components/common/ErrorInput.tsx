import React from 'react';

interface ErrorInputProps {
    status: boolean;
}

const ErrorInput = ({ status }: ErrorInputProps) => {
  return (
    <div
      className={`${status ? 'scale-y-100' : 'scale-y-0 '} text-red-700 text-center absolute  rounded-md top-0 shadow-[0_0_5px_-3px] max-w-[60%] w-full max-h-11 h-full origin-top duration-200 `}
    >
      <div>
          Invalid username or password
      </div>
    </div>
  );
};

export default ErrorInput
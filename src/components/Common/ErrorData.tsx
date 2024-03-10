import React from "react";

import { ErrorIllustration } from "../Illustrations";

interface ErrorDataProps {
  title: string;
}

const ErrorData: React.FC<ErrorDataProps> = ({ title }) => {
  return (
    <div className="flex flex-col gap-4">
      <ErrorIllustration className="h-40 w-full" />
      <p className="text-center text-xs text-blue-gray-500">{title}</p>
    </div>
  );
};

export default ErrorData;

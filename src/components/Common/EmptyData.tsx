import React from "react";

import { NoDataIllustration } from "../Illustrations";

interface EmptyDataProps {
  title: string;
}

const EmptyData: React.FC<EmptyDataProps> = ({ title }) => {
  return (
    <div className="flex flex-col gap-4">
      <NoDataIllustration className="h-40 w-full" />
      <p className="text-center text-xs text-blue-gray-500">{title}</p>
    </div>
  );
};

export default EmptyData;

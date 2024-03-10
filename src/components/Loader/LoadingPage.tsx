import { LoaderCircleIcon } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="flex h-svh w-full items-center justify-center">
      <LoaderCircleIcon className="h-20 w-20 animate-spin text-primary" />
    </div>
  );
};

export default LoadingPage;

import { Skeleton } from "@/components/Skeleton";

import { Card, CardContent } from "..";

const CollectionCardSkeleton = () => {
  return (
    <Card className="bg-gray-10 mx-auto w-full max-w-[369px] sm:max-w-none">
      <CardContent className="flex">
        <Skeleton className="h-[100px] w-[100px] rounded-[10px]" />

        <div className="ml-4 mt-2 flex flex-grow flex-col gap-2">
          <Skeleton className="h-4 w-full pt-2" />
          <Skeleton className="h-4 w-full pt-2" />

          <div className="mt-auto flex justify-between">
            <Skeleton className="h-10 w-full pt-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CollectionCardSkeleton;

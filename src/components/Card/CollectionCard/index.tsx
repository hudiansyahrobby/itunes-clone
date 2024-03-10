import React from "react";

import { Card, CardContent, CardDescription, CardImage, CardTitle } from "..";
import { Badge } from "../../Badge";
import { CurrencyDolarIcon, PlayCircleIcon } from "../../Icon";

interface CollectionCardProps {
  title: string;
  author: string;
  genre: string;
  price: number;
  image: string;
  url: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ author, genre, price, title, image, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card className="mx-auto w-full max-w-[369px] sm:max-w-none">
        <CardContent className="flex w-full">
          <div className="relative">
            <CardImage src={image} height={100} width={100} />
            <PlayCircleIcon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform" />
          </div>

          <div className="ml-4 flex flex-grow flex-col">
            <div>
              <CardDescription className="pt-2">{author}</CardDescription>
              <CardTitle>{title}</CardTitle>
            </div>

            <div className="mt-auto flex justify-between">
              <Badge>{genre}</Badge>

              <div className="flex items-center gap-2">
                <CurrencyDolarIcon />
                <span className="text-xs font-bold tracking-[0.43px] text-yellow lg:text-sm">{price || 0}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

export default CollectionCard;

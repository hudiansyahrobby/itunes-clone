import { useSearchParams } from "react-router-dom";

import CollectionCard from "@/components/Card/CollectionCard";
import CollectionCardSkeleton from "@/components/Card/CollectionCard/CollectionCardSkeleton";
import EmptyData from "@/components/Common/EmptyData";
import ErrorData from "@/components/Common/ErrorData";
import { NO_IMAGE } from "@/constants/common";
import { SEARCH_PARAMS_KEY } from "@/constants/searchParams";
import MainLayout from "@/layouts/MainLayout";
import { useSearchCollection } from "@/modules/collection/hook";
import { TCollectionResponse } from "@/modules/collection/type";

const CollectionListPage = () => {
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get(SEARCH_PARAMS_KEY.SEARCH);

  const { data, isLoading, isError, error } = useSearchCollection({
    term: searchQuery,
    entity: "allTrack,album,allArtist",
  });

  const collectionList = data?.data?.results || [];

  const isCollectionEmpty = collectionList?.length === 0;

  const getViewUrl = (collection: TCollectionResponse) => {
    if (collection.wrapperType === "artist") {
      return collection.artistLinkUrl;
    } else if (collection.wrapperType === "collection") {
      return collection.collectionViewUrl;
    } else if (collection.wrapperType === "track") {
      return collection.trackViewUrl;
    }

    return "";
  };

  return (
    <MainLayout className="bg-white-10">
      <h1 className="mb-[38px] mt-[42px] text-center text-sm tracking-[0.5px] text-dark lg:text-base">
        Search result for : <strong className="text-lg text-primary-40 lg:text-xl">{searchQuery}</strong>
      </h1>

      <div className="mx-[15px] mb-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {(() => {
          if (isLoading) {
            return (
              <>
                <CollectionCardSkeleton />
                <CollectionCardSkeleton />
                <CollectionCardSkeleton />
                <CollectionCardSkeleton />
                <CollectionCardSkeleton />
                <CollectionCardSkeleton />
              </>
            );
          } else if (isError) {
            return <ErrorData title={error.message} />;
          } else {
            return (
              <>
                {isCollectionEmpty ? (
                  <EmptyData title="There is no data to be shown for this search" />
                ) : (
                  collectionList?.map((item) => {
                    return (
                      <CollectionCard
                        key={item.trackId}
                        author={item.artistName}
                        genre={item.primaryGenreName}
                        price={item.trackPrice}
                        title={item.trackName}
                        image={item.artworkUrl100 || NO_IMAGE}
                        url={getViewUrl(item) || ""}
                      />
                    );
                  })
                )}
              </>
            );
          }
        })()}
      </div>
    </MainLayout>
  );
};

export default CollectionListPage;

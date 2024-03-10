import { useQuery } from "@tanstack/react-query";

import { ENDPOINTS } from "@/constants/endpoints";
import { getCollections } from "@/modules/collection/api";
import { searchCollectionRequest } from "@/modules/collection/type";

export const useSearchCollection = (params: searchCollectionRequest) => {
  return useQuery({ queryKey: [ENDPOINTS.COLLECTION.SEARCH, params], queryFn: () => getCollections(params) });
};

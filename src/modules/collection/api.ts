import { ENDPOINTS } from "@/constants/endpoints";
import Axios from "@/libs/axios";
import { TCollectionResponse, searchCollectionRequest } from "@/modules/collection/type";
import { ListResponse } from "@/modules/common/type";

export const getCollections = (params: searchCollectionRequest): Promise<ListResponse<TCollectionResponse>> => {
  return Axios.get(ENDPOINTS.COLLECTION.SEARCH, {
    params,
  });
};

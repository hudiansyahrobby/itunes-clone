import React from "react";
import { createBrowserRouter, json, redirect } from "react-router-dom";

import { ROUTE } from "@/constants/route";
import { SEARCH_PARAMS_KEY } from "@/constants/searchParams";

const HomePage = React.lazy(() => import("@/pages/Home"));
const CollectionListPage = React.lazy(() => import("@/pages/CollectionList"));

export const router = createBrowserRouter([
  {
    path: ROUTE.HOME.DEFAULT,
    element: <HomePage />,
  },
  {
    path: ROUTE.COLLECTION.SEARCH,
    element: <CollectionListPage />,
    loader: ({ request }) => {
      const url = new URL(request.url);
      const searchTerm = url.searchParams.get(SEARCH_PARAMS_KEY.SEARCH);

      if (!searchTerm) {
        return redirect(ROUTE.HOME.DEFAULT);
      }

      return json(null);
    },
  },
]);

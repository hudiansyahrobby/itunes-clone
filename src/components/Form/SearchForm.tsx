import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { ROUTE } from "@/constants/route";
import { SEARCH_PARAMS_KEY } from "@/constants/searchParams";

import { Button, ButtonProps } from "../Button";
import { Input } from "../Input/TextInput";

interface SearchFormProps {
  buttonVariant?: ButtonProps["variant"];
  onSuccess?: () => void;
}
const SearchForm = ({ buttonVariant = "primary", onSuccess }: SearchFormProps) => {
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get(SEARCH_PARAMS_KEY.SEARCH);

  const [search, setSearch] = useState(searchQuery);
  const navigate = useNavigate();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();

    onSuccess?.();

    navigate({
      pathname: ROUTE.COLLECTION.SEARCH,
      search: `?q=${search}`,
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <form onSubmit={onSearch} className="mb-[26px] mt-auto flex w-full flex-col gap-[15px]">
      <Input defaultValue={search || ""} placeholder="Artist / Album / Title" onChange={onChange} />
      <Button variant={buttonVariant} size="full" onClick={onSearch} type="submit">
        Search
      </Button>
    </form>
  );
};

export default SearchForm;

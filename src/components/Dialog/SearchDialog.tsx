import { useState } from "react";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from ".";
import SearchForm from "../Form/SearchForm";
import { SearchIcon } from "../Icon";

const SearchDialog = () => {
  const [open, setOpen] = useState(false);

  const onSearchSuccess = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="focus-within:ring-0 focus:ring-0">
        <SearchIcon />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-[27px]">Search</DialogTitle>
          <DialogDescription>
            <SearchForm buttonVariant="tersiery" onSuccess={onSearchSuccess} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;

import { Link } from "react-router-dom";

import { ROUTE } from "@/constants/route";

import SearchDialog from "../Dialog/SearchDialog";
import { LogoTextIcon } from "../Icon";
import { Sidebar } from "../Sidebar";

const Navbar = () => {
  return (
    <div className="flex h-[60px] items-center justify-between rounded-bl-[19%] rounded-br-[19%] bg-primary-main-gradient px-[15px]">
      <Sidebar />

      <Link to={ROUTE.HOME.DEFAULT}>
        <LogoTextIcon className="text-white" />
      </Link>

      <SearchDialog />
    </div>
  );
};

export default Navbar;

import React from "react";
import SearchBar from "./SearchBar";
import CategoryList from "./CategoryList";
import BlogList from "./BlogList";
import Wrapper from "../../components/ui/Wrapper";

export default function SideBar() {
  return (
    <>
      <aside className="flex flex-col gap-5 w-96  max-sm:flex-row max-sm:w-full  max-xsm:!flex-col">
        <CategoryList />
        <BlogList />
      </aside>
    </>
  );
}

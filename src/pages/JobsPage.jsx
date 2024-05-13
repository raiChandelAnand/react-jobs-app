import React, { useState } from "react";
import JobListings from "../components/JobListings";
import SearchBar from "../components/SearchBar";

const JobsPage = () => {
  const [find, setFind] = useState("");
  const onTypedSearchInputChange = (searchInput) => {
    setFind(searchInput);
  };

  return (
    <>
      <section className="bg-blue-50 px-4 py-6">
        <SearchBar typedSearchInput={onTypedSearchInputChange} />
        <JobListings findJobSearchInput={find} />
      </section>
    </>
  );
};

export default JobsPage;

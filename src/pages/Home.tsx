import React, { useState } from "react";
import SearchComp from "../components/SearchComp";
import axios from "axios";

const Home = () => {
  const [search, setSearch] = useState<string>("");

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/products/search?q`${}
      )
    } catch (error) {}
  };
  return (
    <div>
      <SearchComp />
    </div>
  );
};

export default Home;

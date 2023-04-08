import React, { useState } from "react";
import SearchComp from "../components/SearchComp";
import axios from "axios";
import {
  fetchFail,
  fetchStart,
  getSuccessProduct,
} from "../features/productsSlice";
import { useAppDispatch } from "../app/hooks";

export interface Products {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
const Home = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();

  const getData = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/products/search?q=${search}`
      );
      console.log(data.products);
      dispatch(getSuccessProduct(data.products));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <SearchComp />
    </div>
  );
};

export default Home;

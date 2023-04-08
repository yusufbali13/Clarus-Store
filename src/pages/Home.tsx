import React, { useEffect, useState } from "react";
import SearchComp from "../components/SearchComp";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  fetchFail,
  fetchStart,
  getSuccessProduct,
} from "../features/productsSlice";
import { EventFunc, Products } from "../models/models";
import Card from "../components/Card";

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  const { loading, error, productsList } = useAppSelector(
    (state) => state.products
  );

  const getData = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get<Products>(
        `https://dummyjson.com/prodsucts/search?q=${search}`
      );
      console.log(data.products);
      dispatch(getSuccessProduct(data.products));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  console.log(error);
  useEffect(() => {
    getData();
  }, [search]);

  // const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   setSearch(e.target.value)
  // }
  const handleChange: EventFunc = (e) => {
    setSearch(e.target.value);
  };

  const handleAdd = {product}=> {
    if(favorites filter(item=> item.id === productsReducer.id).length))
  }

  return (
    <div>
      <SearchComp handleChange={handleChange} />
      {loading ? (
        error ? (
          <div>
            <p className="text-center text-red-600">Something went wrong...</p>
          </div>
        ) : (
          <div>
            <p className="text-center text-red-600">Products loading...</p>
          </div>
        )
      ) : (
        <div className="flex justify-center items-center flex-wrap gap-5 p-5">
          {productsList.map((item) => (
            {productsList.map((item)=> <Card key={}>)}<Card key={item.id} />
          ))}
        </div>
      )}
      {/* {loading ? (
        <div>
          <p className="text-center text-red-600">Products loading...</p>
        </div>
      ) : error ? (
        <div>
          <p className="text-center text-red-600">Something went wrong...</p>
        </div>
      ) : (
        <div>
          {productsList.map((item) => (
            <p>{item.title}</p>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default Home;

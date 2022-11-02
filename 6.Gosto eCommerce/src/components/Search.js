import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../redux/fetchers";
import Spinner from "./Spinner"
import './Search.sass';


function Search() {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')
  const { products, isLoading } = useSelector(state => state.search)

  function searchHandeler(e) {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    dispatch(searchProducts(inputValue))
  }, [dispatch, inputValue])

  return (
    <>
      <div className="main__search form-group d-flex">
        <label htmlFor="find-product">All Categories</label>
        <input id="find-product" name="find-product"
          type="text"
          placeholder="Search Products..."
          className="mb-0"
          value={inputValue}
          onChange={searchHandeler}
        />
        <FontAwesomeIcon icon={faSearch} />
      </div>
      {products.length > 0 &&
        <div className="search-results p-3">
          {isLoading ?
            <Spinner /> :
            products.map(item =>
              <div key={item.id} className="search-item py-2 d-flex align-items-center justify-content-center">
                <img src={item.thumbnail} alt="search-product" className="me-3" />
                <p className="text-gray">{item.title} </p>
              </div>
            )}
        </div>
      }
    </>

  );
}

export default Search;

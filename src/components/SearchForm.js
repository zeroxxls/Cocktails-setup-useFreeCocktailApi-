import React from 'react'
import { useEffect } from "react"
import { useGlobalContext } from '../context'

const SearchForm = () => {
  useEffect(() => {
        searchValue.current.focus();
      }, []);
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  const {setSearchTerm}= useGlobalContext();
  const searchValue = React.useRef("");
  const searchCocktail=()=>{
    setSearchTerm(searchValue.current.value);
  }
  return (
    <section className="section-search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
        <label htmlFor="name">search your favorite cocktail</label>
        <input
        type='text'
        id='name'
        ref={searchValue}
        onChange={searchCocktail}
        />

        </div>
      </form>
    </section>
  )
}

export default SearchForm

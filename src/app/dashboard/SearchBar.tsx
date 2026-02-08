import React, { useState } from 'react'
import Input from "../../components/Input";
const SearchBar = ({search, setSearch}: {search: string; setSearch: React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <Input type="text" placeholder='Search...' Icon='search' value={search} onChange={e => setSearch(e.target.value)} />
  )
}

export default SearchBar
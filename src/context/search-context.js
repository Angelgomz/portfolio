import { createContext, useState } from 'react'
export const SearchContext = createContext();
export const SearchFormProvider =  ({children}) => {
   const [searchValue, setSearchValue] = useState("")
    return (
        <SearchContext.Provider value={{
            searchValue,
            setSearchValue, 
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchFormProvider;
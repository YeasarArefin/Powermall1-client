import { useState } from 'react'

const useSearch = () => {
    const [searchItems,setSearchItems] = useState([])
    return { searchItems, setSearchItems}
}

export default useSearch

'use client';
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
    const [searchText, setSearchText] = useState("");

    return (
        <div className='pb-2 border-b-2 border-[#E3E6E8]'>
            <div className='flex items-center gap-2 bg-[#E3E6E8] rounded-xl px-2 py-3'>
                <CiSearch size="24px" />
                <input
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className='bg-transparent outline-none w-full' type="text" placeholder='Search or start new chat' />
            </div>
        </div>
    )
}

export default SearchBar
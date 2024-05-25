"use client";
import React, { useState } from "react";

const SearchResultList = ({ results, onResultClick }) => {
    return (
        <div id="search-result" className="w-full bg-white flex flex-col shadow-md rounded-md mt-4 max-h-36 overflow-y-auto">
            <ul>
                {results.map((result, id) => (
                    <li 
                        key={id}
                        className="px-2 py-2 hover:bg-gray-300"
                    >
                        {result.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResultList;

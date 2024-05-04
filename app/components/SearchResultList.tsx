"use client";
import React, { useState } from "react";

const SearchResultList = ({ results, onResultClick }) => {
    return (
        <div id="search-result">
            <ul>
                {results.map((result, id) => (
                    <li
                        key={id}
                        className="search-result-list"

                    >
                        {result.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResultList;

"use client";
import React, { useEffect, useState } from 'react'
import FilterBar from '../components/FilterBar';
import PropertyList from '../components/PropertyList';
import { mockData } from '../data/data';

const LandingPage = () => {
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [displayedProperties, setDisplayedProperties] = useState(mockData);
    const [noDataFound, setNoDataFound] = useState(false);

    const handleFilter = filteredData => {
        setFilteredProperties(filteredData);
    };

    useEffect(() => {
        if (filteredProperties.length === 0) {
            setDisplayedProperties(mockData); // Display all data when no filters are applied
        } else {
            setDisplayedProperties(filteredProperties);
        }
    }, [filteredProperties]);

    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-[20px] font-bold lg:text-[30px]'>Filter properties to rent</h2>
            <p className='text-[10px] lg:text-[16px]'>Please select Date betweeen <span className='font-semibold'>19 Aug 2023</span> or <span className='font-semibold'>20 Aug 2023</span> Beacause of data limitation</p>
            <FilterBar properties={mockData} onFilter={handleFilter} />
            {displayedProperties.length > 0 && (
                <PropertyList filteredProperties={displayedProperties} />
            )}
        </div>
    )
}

export default LandingPage

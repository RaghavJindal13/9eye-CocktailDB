import React, {useEffect, useState} from 'react';
import './filterMenu.scss';
import Filter from './filter'

import { getAlcoholic, getGlasses, getCategories } from '../../apiCalls/fetch';

const FilterMenu = () => {
  const [alcoholic, setAlcoholic] = useState([]);
  const [glasses, setGlasses] = useState([]);
  const [categories, setCategories] = useState([]);

  

  useEffect(() => {
    getAlcoholic().then(data => setAlcoholic(data.drinks));
  }, []);

  useEffect(() => {
    getGlasses().then(data => setGlasses(data.drinks));
  }, []);

  useEffect(() => {
    getCategories().then(data => setCategories(data.drinks));
  }, []);

 

  const handleChange = data => {
    console.log("filter clicked")
  };

  return(
    <nav id="filterMenu" className='onFP'>
      <h1>Find a Cocktail?</h1>
      
      <Filter 
        filterType='category'        
        filterOptions={categories}
        handleChange={handleChange}
      />

      <Filter 
        filterType='alcoholic'
        filterOptions={alcoholic}
        handleChange={handleChange}
      />

      <Filter 
        filterType='glass' 
        filterOptions={glasses}
        handleChange={handleChange}
      />

    </nav>
  )
};

export default FilterMenu;
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'

const LetNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/catagories')
    .then(response => response.json())
    .then(data =>setCategories(data))
    .catch(error=>console.error(error))
  }, [])
  return (
    <div>
      <h4>All Categories</h4>
      <div className="text-black">
        {
          categories.map(category =><p key={category.id}>
          <Link to={`/category/${category.id}`} className='text-decoration-none text-black ps-3'>{category.name}</Link></p>)
        }
      </div>
    </div>
  );
};

export default LetNav;
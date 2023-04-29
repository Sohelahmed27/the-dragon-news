// eslint-disable-next-line no-unused-vars
import React from 'react';
import {useParams, useLoaderData} from 'react-router-dom'
import NewsCard from '../Home/NewsCard/NewsCard';

const Category = () => {
  const categoryNews = useLoaderData();
  const {id} = useParams();
  return (
    <div>
     {id &&  <h1>This is category:{categoryNews.length}</h1>}
      {
        categoryNews.map(news =><NewsCard  
        key={news._id}
        news={news}></NewsCard>)
      }
    </div>
  );
};

export default Category;
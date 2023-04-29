// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import {useLoaderData, Link} from 'react-router-dom'
import EditorInsights from '../EditorInsights/EditorInsights';

const News = ({params}) => {
  const news = useLoaderData(); 
  const {_id, title, details, thumbnail_url, category_id} = news;
  return (
    <div>
      <Card >
      <Card.Img style={{height:"411px"}} variant="top" src={thumbnail_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}>
        <Button variant="danger"><FaArrowLeft></FaArrowLeft>All news in this category</Button></Link>
      </Card.Body>
    </Card>
    <div className="mt-4">
        <EditorInsights></EditorInsights>
    </div>
    </div>
  );
};

export default News;
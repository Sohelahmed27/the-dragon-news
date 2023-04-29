// eslint-disable-next-line no-unused-vars
import moment from 'moment';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaBookmark, FaEye, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import {Link} from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const NewsCard = ({news}) => {
  // eslint-disable-next-line react/prop-types
  const {_id, title, details, thumbnail_url, author, rating, total_view} = news;
  return (
    <div>
       <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
      <Image style={{ height:'40px'}} src={author.img} roundedCircle />
      <div className='ps-3 flex-grow-1' >
        <p className='my-0'><small>{author.name}</small></p>
        <p><small>{moment(author.published_date).format('YYYY-MM-DD')}</small></p>
      </div>
      <div>
        <FaBookmark></FaBookmark> <FaShareAlt></FaShareAlt>
      </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src= {thumbnail_url}/>
        <Card.Text>
         {details.length <250 ? <>{details}</>: <>{details.slice(0,250)}...<Link to={`/news/${_id}`}>Read more</Link></>}
        </Card.Text>
      
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1">
        <Rating
         placeholderRating={rating.number}
         readonly
  emptySymbol={<FaRegStar></FaRegStar>}
  placeholderSymbol={<FaStar className='text-warning'></FaStar>}
  fullSymbol={<FaStar></FaStar>}>

        </Rating>
        <span>{rating.number}</span></div>
        <div><FaEye></FaEye>{total_view}</div>
      </Card.Footer>
    </Card>
    </div>
  );
};

export default NewsCard;
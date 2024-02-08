import React from 'react';
import { Rate } from 'antd';


const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Rating = ({rating, setRating, isRating, rate}) => {

  return isRating ? (
    <Rate disabled value={rate}/>
  ) : (
    <Rate tooltips={desc}
    onChange={(value) => setRating(value)}
    value={rating}
    />
  
  );
}

export default Rating
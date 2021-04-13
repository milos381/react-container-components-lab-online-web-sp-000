
import React from 'react';

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map((review) => {return <div key={review.headline}><h2>{review.headline}</h2><h3>{review.byline}</h3><a href={review.link.url}>{'visit page on NYTimes!'}</a><p>{review.summary_short}</p></div>})}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
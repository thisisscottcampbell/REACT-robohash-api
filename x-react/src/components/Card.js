import React from 'react';

const Card = ({ name, id, email }) => {
	return (
		<div
			className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"
			onClick={() => alert(`you clicked on ${name}`)}
		>
			<img src={`https://robohash.org/${id}?200X200`} alt="alt" />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;

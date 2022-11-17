import React from 'react';
import ContentRowCard from './ContentRowCard'
import GenresinDB from './GenresInDB';

let moviesinDB = {
	title: 'Movies In Database',
	color: 'primary',
	quantity: '21',
	icon: 'fas fa-film fa-2x'

}
let totalAwards = {
	title: 'Total Awards',
	color: 'success',
	quantity: '79',
	icon: 'fas fa-award fa-2x'
}
let actorsQuantity = {
	title: 'Actors quantity',
	color: 'warning',
	quantity: '49',
	icon: 'fas fa-user fa-2x'
	
}

let cardProps = [moviesinDB, totalAwards, actorsQuantity];

function ContentRowMovies(props){
	return(
		<>
			{/*<!-- Content Row Movies-->*/}
<div className="row">
		{cardProps.map((card, i) =>{
			return <ContentRowCard {...card} key={i} />
		})}

</div>
{/*<!-- End movies in Data Base -->*/}
		</>
	)
}

export default ContentRowMovies;
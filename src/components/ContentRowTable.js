import React from "react";
import ContentTableRow from "./ContentTableRow";


let row01 ={
	title: 'Billie Elliot',
	length: '123',
	rating: '5',
	genre:['Drama', 'Accion'],
	awards: '2'
}
let row02 ={
	title: 'Alicia en el Pais de las Maravillas',
	length: '142',
	rating: '5',
	genre:['Drama', 'Accion'],
	awards: '2'
}

let tableMovies= [row01 , row02];

function ContentRowTable(props){
    return(
        <>
		<table class="table table-striped">
		<thead>
			<tr>
				<th>Titulo</th>
				<th>Duracion</th>
				<th>Rating</th>
				<th>Genero</th>
				<th>Premios</th>
			</tr>
		</thead>
		<tbody>
			{tableMovies.map((card, i) =>{
			return <ContentTableRow {...card} key={i} />
		})}
		</tbody>
		</table>
        </>
    )
}



export default ContentRowTable;
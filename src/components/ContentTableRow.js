import React from "react";



function ContentTableRow(props){
    return(
			<tr>
				<td> {props.title} </td>
				<td> {props.length} </td>
				<td> {props.rating} </td>
				<td> <ul>
				{props.genre.map((genre,i) =>{
					return <li key={i}> {genre} </li>
				})}
				</ul> </td>
				<td> {props.awards} </td>
				
			</tr>
    )
}


export default ContentTableRow;
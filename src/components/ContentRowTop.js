import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import LasMovieinDB from './LastMovieinDB';
import GenresInDB from './GenresInDB';
function ContentRowTop(props){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>

					<ContentRowMovies/>
				
					<div className="row">
						<LasMovieinDB/>
						<GenresInDB/>
					</div>
				</div>
        </React.Fragment>
    )

}


export default ContentRowTop;
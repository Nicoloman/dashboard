import React from "react";

function ContentRowCard(props){
    return(
        <>
<div className="col-md-4 mb-4">
	<div className={`card border-left-${props.color} shadow h-100 py-2`}>
		<div className="card-body">
			<div className="row no-gutters align-items-center">
				<div className="col mr-2">
					<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.title}</div>
					<div className="h5 mb-0 font-weight-bold text-gray-800">{props.quantity}</div>
				</div>
				<div className="col-auto">
					<i className={`${props.icon} text-gray-300`}></i>
				</div>
			</div>
		</div>
	</div>
</div>
        </>
    )
}
ContentRowCard.propTypes ={

}

ContentRowCard.defaultProps = {
	title: 'Error',
	color: 'danger',
	quantity: '0',
	icon: "fas fa-exclamation-triangle"
	
}

export default ContentRowCard;
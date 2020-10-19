type response = {
	checkout:{
		redirect: string,
		result?: string
		order:{
			orderId:string,
			status:string
		}
	}
}

const OrderSuccess = ( { response }:{ response: response } ) => {

	if ( ! response ) {
		return null;
	}

	const responseData = response.checkout;

	window.location.href = responseData.redirect;

	return (
		<div className="container">
			{ 'success' === responseData.result ? (
				<div>
					<h2>Order no: { responseData.order.orderId } </h2>
					<p>Status : { responseData.order.status }</p>
				</div>
			): ''}
		</div>
	)
};

export default OrderSuccess;

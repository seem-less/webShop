import { Fragment } from 'react';
import CheckoutCartItem from "./CheckoutCartItem";

type yourOrderProps = {
	products:Array<any>,
	totalProductsPrice : string,
}

const YourOrder = ( { cart }:{cart:yourOrderProps} ) => {

	return (
		<Fragment>
			{ cart ? (
				<Fragment>
					{/*Product Listing*/}
					<table className="table table-hover">
						<thead>
						<tr className="blackseed-cart-head-container">
							<th className="blackseed-cart-heading-el" scope="col"/>
							<th className="blackseed-cart-heading-el" scope="col">Product</th>
							<th className="blackseed-cart-heading-el" scope="col">Total</th>
						</tr>
						</thead>
						<tbody>
						{ cart.products.length && (
							cart.products.map( item => (
								<CheckoutCartItem key={ item.productId } item={ item } />
							) )
						) }
						{/*Total*/}
						<tr className="">
							<td className=""/>
							<td className="blackseed-checkout-total">Subtotal</td>
							<td className="blackseed-checkout-total">{ cart.totalProductsPrice }</td>
						</tr>
						<tr className="">
							<td className=""/>
							<td className="blackseed-checkout-total">Total</td>
							<td className="blackseed-checkout-total">{ cart.totalProductsPrice }</td>
						</tr>
						</tbody>
					</table>
				</Fragment>
			) : '' }
		</Fragment>
	)
};

export default YourOrder;

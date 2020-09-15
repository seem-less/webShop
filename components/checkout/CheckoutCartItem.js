const CheckoutCartItem = ( { item } ) => {

	return (
		<tr className="blackseed-cart-item" key={ item.productId }>
			<td className="blackseed-cart-element">
				<img width="64" src={ item.image.sourceUrl } srcSet={ item.image.srcSet } alt={item.image.title}/>
			</td>
			<td className="blackseed-cart-element">{ item.name }</td>
			<td className="blackseed-cart-element">{ item.totalPrice }</td>
		</tr>
	)
};

export default CheckoutCartItem;

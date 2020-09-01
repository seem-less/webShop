const Product = (props) => {

    const {product} = props;
    return (
        <div key={product.id} className="card mb-3">
            <h3 className="card-header">{product.name}</h3>
            <div className="card-body">
                <h5 className="card-title">{product.price}</h5>
            </div>
            <img src={product.images[0].src} alt={product.name} />
        </div>
    )
}

export default Product


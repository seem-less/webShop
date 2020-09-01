const Product = (props) => {

    const {product} = props;
    return (
        <div className="card col-3 mb-3">
            <h3 className="card-header">{product.name}</h3>
            <img src={product.images[0].src} alt={product.name} />
            <div className="card-body">
                <h6 className="card-subtitle text-center">{product.price}</h6>
                <a href="" className="btn btn-primary">View</a>
            </div>
        </div>
    )
}

export default Product


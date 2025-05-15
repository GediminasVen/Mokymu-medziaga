import './Product.css'

const Product = (props) => {
    let product = props.product

    return (
        <div className='productContainer'>
            <div className='product-info'>
                <h4>{product.name}</h4>
                <p>Price: {product.price}</p>
                <p>Amount: {product.amount}</p>
            </div>

            <button>Delete</button>
            {/* <Button title="Delete" action={deleteProduct} /> */}


        </div>
    )
}

export default Product
import React from 'react'
function Products({ product, addToCart }) {
    return (
        <div className='flex' style={{display:'flex',flexDirection:'row',marginTop:'80px'}}>{
            product.map((productitem, productIndex) => {
                return (
                    <div style={{ width: '50%' }} >
                        <div className='product-item'>
                            <img src={productitem.url} width="70%" />
                            <p>{productitem.name} | {productitem.category}</p>
                            <p>{productitem.seller}</p>
                            <p>Rs.{productitem.price}</p>
                            <button onClick={() => addToCart(productitem)}>Add Cart</button>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}
export default Products;
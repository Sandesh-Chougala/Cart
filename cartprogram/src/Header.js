import React from 'react';
function Header(props) {
    return (
        <div className='flex shopping-cart' style={{display:'flex',flexDirection:'row',opacity:'0.6'}}>
            <div onClick={() => props.handleShow(false)} style={{fontSize:'40px',color:'red',marginLeft:'620px'}}>ShoppingCart</div>
            <div onClick={() => props.handleShow(true)} style={{fontSize:'30px',marginLeft:'500px',color:'red' }}> Cart
                <sup>{props.count}</sup>
            </div>
        </div>
    )
}
export default Header;
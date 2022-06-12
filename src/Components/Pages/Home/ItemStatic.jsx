import React from 'react';

function ItemStatic(props) {
  return (
    <>
        <div className="image-item">
            <img src={props.items.image} alt="" />
            <h2>{props.items.title}</h2>
            <p>{props.items.subtitle}</p>
        </div>
    </>
  )
}

export default ItemStatic;
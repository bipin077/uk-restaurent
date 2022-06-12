import React from 'react';

function ItemStatic(props) {
  return (
    <>
        <div className="image-item">
            <img src={require(props.items.image)} alt="sdfasdd" />
            <h2>{props.items.title}</h2>
            <p>{props.items.subtitle}</p>
        </div>
    </>
  )
}

export default ItemStatic;

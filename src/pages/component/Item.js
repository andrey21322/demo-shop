import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} alt={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)}/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.descr}</p>
        <div className='price-and-plus'> 
            <b>{this.props.item.price} грн</b> 
            <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
        </div>
        
      </div>
    )
  }
}

export default Item
import React, { Component } from 'react'

export class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'chairs',
                    name: 'Стулья'
                },
                {
                    key: 'table',
                    name: 'Столы'
                }
            ]
        }
    }

    render() {
    return (
        <div className='categories'>
            {this.state.categories.map(el => (
                <div onClick={() => this.props.chooseCategory(el.key)} key={el.name} className={`${el.key == this.props.activeCategory ? 'active' : ''}`}> {el.name} </div>
            ))}
        </div>
    )
  }
}

export default Category
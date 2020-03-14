import React, { Component } from 'react';
import './Pos.css';

class Post extends Component {
    render() {
        return (
            <div className='borda'>
                <div className="pk">
                    <h1>Bulbasaur</h1>
                    <span>#001</span>
                </div>

                <div className="pk">
                    <h1>Ivysaur</h1>
                    <span>#002</span>
                </div>

                <div className="pk">
                    <h1>Venosaur</h1>
                    <span>#003</span>
                </div>
            </div>
            
        )
    }
}

export default Post;
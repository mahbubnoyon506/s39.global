import React from 'react';
import './button.css'

const TopButton = (props) => {
    return (
        <div>
            <button class="top-login">{props.children}</button>
        </div>
    );
};

export default TopButton;
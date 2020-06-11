import React from 'react'

const Icon = (props) => {
    const {color, size, viewBox} = props
    return (
        <svg
            fill={color}
            height={size}
            width={size}
            viewBox={viewBox}
        >
            {props.children}
        </svg>
    )
}

export default Icon;

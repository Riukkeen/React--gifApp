import React from 'react'

export const GifGridItem = ({ id, title, url }) => {

    return (
        <div className="box animate__animated animate__fadeIn">
            <p className="box__title" >{title}</p>
            <img className="box__img" src={url} alt={title} />
        </div>
    )
}

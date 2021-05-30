import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';


const GifExpertApp = () => {

    // const categories = ['One puch', 'Samurai X', 'Dragon ball']

    const [categories, setCategories] = useState(['hunterxhunter']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'HunterXHunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories={setCategories} />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                        className="container"
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp;

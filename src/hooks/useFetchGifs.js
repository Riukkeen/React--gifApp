import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    /*useEfect lo utilizamos para que se ejecute la función solo en el
      primer renderizado*/
    useEffect(() => {

        getGifs(category)
            .then(imgs => {
                setState({

                    data: imgs,
                    loading: false

                });
            });

    }, [category]);


    return state;

}

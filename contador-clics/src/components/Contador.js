import React from 'react';
import '../stylesheets/contador.css'

function Contador({ numClics }) {
    return (
        <div className='contador'>
            { numClics }
        </div>
    );
}

export default Contador;
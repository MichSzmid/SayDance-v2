import React from 'react';

const Rules = () => {
    function unrevealContent() {
        console.log('oxynXD')
    }
    return( 
        <section className="content rules">
            <p className="content-title">Regulamin</p>
            <div className="rules-content" onClick={unrevealContent}>
                <h2>↓ Rozwiń ↓</h2>
                <h3>( kliknij dwukrotnie, aby ukryć )</h3>
            </div>
        </section>
    )
};

export default Rules;
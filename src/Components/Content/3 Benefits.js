import React from 'react';

import Zabawa from '../../Images/4 Korzysci/dobra_zabawa.svg'
import Odkrywanie from '../../Images/4 Korzysci/odkrywanie_siebie.svg'
import Chwila from '../../Images/4 Korzysci/chwila_dla_ciebie.svg'
import Poprawa from '../../Images/4 Korzysci/poprwa_ciala.svg'

const Benefits = () => {
    return( 
        <section className="content benefits background-image">
            <h1 className="content-title">Wyjątkowe korzyści</h1>
            <p>Naszym marzeniem było stworzenie miejsca,
                w którym poczujesz komfort bycia sobą. 
                To kawałek tanecznego nieba. Chcemy Wam pokazać,
                że każdy z nas jest ważny, że czasami jest ciężko,
                ale warto poświecić dla siebie ten czas.
                Kroki to najmniejsza część tańca,
                to przyjemność z odrobiną chęci przezwyciężenia trudności i otworzenia się na siebie.
                <br/><br/>
                <span style={{fontWeight:"bold"}}>
                    Zapraszamy do naszego świata!
                </span>
            </p>
            <div className="benefits-icons">
                <div className="benefits-icon-item background-image" style={{backgroundImage: `url(${(Zabawa)})` }}>
                    Dobra <br/> zabawa
                </div>
                <div className="benefits-icon-item background-image" style={{backgroundImage: `url(${(Odkrywanie)})` }}>
                    Odkrywanie <br/> siebie
                </div>
                <div className="benefits-icon-item background-image" style={{backgroundImage: `url(${(Chwila)})` }}>
                    Chwila tylko <br/> dla Ciebie
                </div>
                <div className="benefits-icon-item background-image" style={{backgroundImage: `url(${(Poprawa)})` }}>
                    Poprawa ciała <br/> i ducha
                </div>
            </div>
            <div className="background-image floating-image" style={{right:"10%",top:"25%"}}>

            </div>
        </section>
    )
};

export default Benefits;
import React from 'react';

const About = () => {
    return( 
        <section className="content about background-image">
            <p className="content-title">O nas</p>
            <div className="about-text" style={{float:"left"}}>
                <p className="content-title" style={{float:"left",margin:"0 0 0 20px"}}>Kasia</p>
                <a style={{textAlign:"left"}}>Instruktorka poświęcona w pełni swojej pracy, 
                    dusza artystki, wrażliwa na piękno z wielkim sercem do ludzi i zwierząt.
                    To pozytywnie zakręcona kobietka, czego będziecie mogli doświadczyć na jej zajęciach.
                    Od dziecka związana z tańcem. Dzięki swojej tanecznej przygodzie miała okazję mieszkać w Hiszpanii i na Białorusi. 
                    Tancerka najwyższej klasy tanecznej, dalej możecie ją spotkać na turniejach sportowego tańca towarzyskiego. 
                    Jej druga pasja to makijaż i holistyczne podejście do życia. Studiuje psychologie w biznesie.
                </a>
            </div>
            <div className="about-text"style={{float:"right"}}>
                <p className="content-title" style={{float:"right", margin:"0 20px 0 0"}}>Kamila</p>
                <a style={{textAlign:"right"}}>Instruktorka o niewielkich rozmiarach, ale wielkim sercu do tańca! 
                    To Po prostu równa babka z zamiłowaniem do tego co robi! 
                    U niej na zajęciach śmiechu nie ma końca. Od najmłodszych lat związana z tańcem. 
                    Na swoim koncie posiada wiele sukcesów w sportowym tańcu towarzyskim. 
                    Tancerka najwyższej klasy tanecznej, a teraz podróżuje po całej Polsce tańcząc na deskach teatru Castello. 
                    Jej druga pasja jest fitness i prowadzenie zdrowego trybu życia. Odbyła studia na kierunku coaching.
                </a>
            </div>
        </section>
    )
};

export default About;
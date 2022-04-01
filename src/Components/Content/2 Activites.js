import React from 'react';
import UIButton from '../UI-Elements/UIButton'

import Saylove from '../../Images/3 Zajecia/Saylove.svg'
import Saywoman from '../../Images/3 Zajecia/Saywoman.svg'
import Saylatino from '../../Images/3 Zajecia/Saylatino.svg'
import Sayfitness from '../../Images/3 Zajecia/Sayfitness.svg'
import Saydance from '../../Images/3 Zajecia/Saydance.svg'
import Sayparty from '../../Images/3 Zajecia/Sayparty.svg'

function Activities() {
    const activities = [
        {
          key:1,
          name:"Pierwszy Taniec",
          bgimg:require('../../Images/3 Zajecia/Pierwszytaniec.png'),
          hashimg:Saylove,
          text:[<p>
          Podczas nauki stawiamy przede wszystkim na:
          <span>Naturalność</span>, bo w tańcu najważniejsze są emocje, <span>Wyjątkowość</span>, bo każdy z nas jest inny, 
          <span> Oryginalność</span>, bo na każdego z Was mamy inny pomysł. <span>Niepowtarzalność</span>, bo każdy taniec jest jedyny w swoim rodzaju.<br/><br/>
          <span>Sprawimy, że będzie magicznie!</span></p>
          ],
        },
        {
          key:2,
          name:"Sensual",
          bgimg:require('../../Images/3 Zajecia/Sensual.png'),
          hashimg:Saywoman,
          text:[
            <p>Sensual to czas tylko dla Ciebie. Poczujesz się zmysłowo i kobieco, pozwolisz Sobie na więcej.
          Zgaszone światło, muzyka tworząca klimat, to ten moment kiedy możesz spróbować wszystkiego bez oceny innych, brzmi idealnie, prawda?
          Daj się wprowadzić do tego pięknego świata, nie pożałujesz.</p>
          ],
        },
        {
          key:3,
          name:"Latino",
          bgimg:require('../../Images/3 Zajecia/Latino.png'),
          hashimg:Saylatino,
          text:[
            <p>Latino przeniesie Was w gorący klimat salsy
          i bachaty, energicznej cha chy, zmysłowej rumby
          lub skocznego jive’a. <br/><br/>
          <span>Te zajęcia to istne szaleństwo.<br/>
          Z równie wybuchowymi instruktorkami!</span></p>
          ],
        },  {
          key:4,
          name:"Fitness",
          bgimg:require('../../Images/3 Zajecia/Fitness.png'),
          hashimg:Sayfitness,
          text:[
            <p>Taniec i Fitness - połączenie dwóch zajęć w jednym.<br/><br/>
          <span>45 minut gorących, tanecznych rytmów z Kasią + 45 minut fitnessowego wycisku z Kamilą = 100% satysfakcji i dumy!</span></p>
          ],
        },  
        {
          key:5,
          name:"Taniec w parach",
          bgimg:require('../../Images/3 Zajecia/Taniec_w_parach.png'),
          hashimg:Saydance,
          text:[
            <p>Chcesz się nauczyć tańczyć, czeka cię impreza czy po prostu chcesz spędzić przyjemnie czas we dwoje
          To idealne zajęcia dla Ciebie.
          Odkryjemy podstawy tańca użytkowego, towarzyskiego, gorące rytmy salsy i bachaty oraz tajniki prowadzenia w parze.</p>
          ],
        },  
        {
          key:6,
          name:"Party",
          bgimg:require('../../Images/3 Zajecia/Party.png'),
          hashimg:Sayparty,
          text:[
            <p>Wieczór Panienski, babski comber, dzień kobiet, walentynki, urodziny!
            Pomożemy Wam zorganizować niezapomniany wieczór!
            Idealny pomysł na oryginalny i nietuzinkowy prezent z nauką tańca. 
            W ofercie latino, burlesque, Sexy dance, pin-up, a może masz swój pomysł? <span>Zaproponuj nam.</span></p>
          ],
        },
    ];

  return (
    <div className="App">
      <section className="content activities background-image">
        <p className="content-title">Nasze zajęcia</p>
         <div className="activities-grid">
            {activities.map((Acti)=>(
                <div key={Acti.key} className={'activity background-image'} style={{backgroundImage: `url(${(Acti.bgimg)})` }}>
                  <div className="background-image activity-poster">
                    <h3>{Acti.name}</h3>
                    <img src={Acti.hashimg} alt="xD"/>
                  </div>
                  <div className="activity-text">
                    <h2>{Acti.name}</h2>
                    {Acti.text}
                    <UIButton text="Zapisz się" margin="auto"/>
                  </div>
                </div>
            ))}
        </div> 
      </section>
    </div>
  );
}

export default Activities;

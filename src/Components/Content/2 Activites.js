import React from 'react';
import UIButton from '../UI-Elements/UIButton'

function Activities() {
    const activities = [
        {
          key:1,
          name:"Pierwszy Taniec",
          bgimg:require("../../Images/3 Zajecia/Pierwszytaniec.png"),
          hashimg:require("../../Images/3 Zajecia/#Saylove.svg"),
          text:`Podczas nauki stawiamy przede wszystkim na:
          Naturalność, bo w tańcu najważniejsze są emocje, Wyjątkowość, bo każdy z nas jest inny,
          Oryginalność, bo na każdego z Was mamy inny pomysł. Niepowtarzalność, bo każdy taniec jest jedyny w swoim rodzaju. Sprawimy, że będzie magicznie!`
        },  {
          key:2,
          name:"Sensual",
          bgimg:require("../../Images/3 Zajecia/Sensual.png"),
          hashimg:require("../../Images/3 Zajecia/#Saywoman.svg"),
          text:`Sensual to czas tylko dla Ciebie. Poczujesz się zmysłowo i kobieco, pozwolisz Sobie na więcej.
          Zgaszone światło, muzyka tworząca klimat, to ten moment kiedy możesz spróbować wszystkiego bez oceny innych, brzmi idealnie, prawda?
          Daj się wprowadzić do tego pięknego świata, nie pożałujesz.`,
        },  {
          key:3,
          name:"Latino",
          bgimg:require("../../Images/3 Zajecia/Latino.png"),
          hashimg:require("../../Images/3 Zajecia/#Saylatino.svg"),
          text:`Latino przeniesie Was w gorący klimat salsy
          i bachaty, energicznej cha chy, zmysłowej rumby
          lub skocznego jive’a. Te zajęcia to istne szaleństwo.
          Z równie wybuchowymi instruktorkami! `,
        },  {
          key:4,
          name:"Fitness",
          bgimg:require("../../Images/3 Zajecia/Fitness.png"),
          hashimg:require("../../Images/3 Zajecia/#Sayfitness.svg"),
          text:`Taniec i Fitness - połączenie dwóch zajęć w jednym.

          45 minut gorących, tanecznych rytmów z Kasią + 45 minut fitnessowego wycisku z Kamilą = 100% satysfakcji i dumy!`,
        },  {
          key:5,
          name:"Taniec w parach",
          bgimg:require("../../Images/3 Zajecia/Taniec_w_parach.png"),
          hashimg:require("../../Images/3 Zajecia/#Saydance.svg"),
          text:`Chcesz się nauczyć tańczyć, czeka cię impreza czy po prostu chcesz spędzić przyjemnie czas we dwoje
          To idealne zajęcia dla Ciebie.
          Odkryjemy podstawy tańca użytkowego, towarzyskiego, gorące rytmy salsy i bachaty oraz tajniki prowadzenia w parze.`,
        },  {
          key:6,
          name:"Party",
          bgimg:require("../../Images/3 Zajecia/Party.png"),
          hashimg:require("../../Images/3 Zajecia/#Sayparty.svg"),
          text:`Wieczór Panienski, babski comber, dzień kobiet, walentynki, urodziny!
          Pomożemy Wam zorganizować niezapomniany wieczór!
          Idealny pomysł na oryginalny i nietuzinkowy prezent z nauką tańca. 
          W ofercie latino, burlesque, Sexy dance, pin-up, a może masz swój pomysł? Zaproponuj nam.`,
        },
    ];

  return (
    <div className="App">
      <div className="content activities background-image">
        <p className="content-title">Nasze zajęcia</p>
         <div className="activities-grid">
            {activities.map((Acti)=>(
                <div key={Acti.key} className={'activity background-image grid'+Acti.key} style={{backgroundImage: `url(${(Acti.bgimg)})` }}>
                  <h3>{Acti.name}</h3>
                  <div className="activity-poster">
                  <div className="activity-text">
                    <h2>{Acti.name}</h2>
                    <p>{Acti.text}</p>
                  </div>
                    <UIButton text="Zapisz się" margin="auto"/>
                  </div>
                </div>
            ))}
        </div> 
      </div>
    </div>
  );
}

export default Activities;

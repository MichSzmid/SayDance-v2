import React from 'react';

function Activities() {
    const activities = [
        {
          key:1,
          name:"PIERWSZY TANIEC",
          bgimg:"../../Images/3 Zajecia/Pierwszytaniec.png",
          hashimg:'../../Images/3 Zajecia/Saylove.svg',
        },  {
          key:2,
          name:"SENSUAL",
          bgimg:"../../Images/3 Zajecia/Sensual.png",
          hashimg:'../../Images/3 Zajecia/Saywoman.svg',
        },  {
          key:3,
          name:"LATINO",
          bgimg:"../../Images/3 Zajecia/Latino.png",
          hashimg:'../../Images/3 Zajecia/Saylatino.svg',
        },  {
          key:4,
          name:"FITNESS",
          bgimg:"../../Images/3 Zajecia/Fitness.png",
          hashimg:'../../Images/3 Zajecia/Sayfitness.svg',
        },  {
          key:5,
          name:"TANIEC W PARACH",
          bgimg:"../../Images/3 Zajecia/Taniec_w_parach.png",
          hashimg:'../../Images/3 Zajecia/Saydance.svg',
        },  {
          key:6,
          name:"PARTY",
          bgimg:"../../Images/3 Zajecia/Party.png",
          hashimg:'../../Images/3 Zajecia/Sayparty.svg',
        },
    ];

  return (
    <div className="App">
      <div className="content activities background-image">
        <p className="content-title">Nasze zajęcia</p>
        <div className="activities-grid">
            {activities.map((Acti)=>(
                <div key={Acti.key} className={'activity grid'+Acti.key}>{Acti.name}</div>
            ))}
          {/* <div className="grid1">x</div>
          <div className="grid2">n</div>
          <div className="grid3">x</div>
          <div className="grid4">x</div>
          <div className="grid5">x</div>
          <div className="grid6">x</div> */}
        </div>
      </div>
    </div>
  );
}

export default Activities;

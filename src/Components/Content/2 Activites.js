import React from 'react';

function Activities() {
    const activities = [
        {
            key:1,
            name:"PIERWSZY TANIEC",
            bgimg:"../../Images/3 Zajecia/Pierwszytaniec.png",
            hashimg:'../../Images/3 Zajecia/Saylove.svg',
        },
    ];

  return (
    <div className="App">
      <div className="content activities background-image">
        <p className="content-title">Nasze zajęcia</p>
        <div className="activities-grid">
            {activities.map((Acti)=>(
                <div className={'activity grid'+Acti.key}>{Acti.name}</div>
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

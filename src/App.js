import React from 'react';

import About from './Components/Content/1 About'
import Activities from './Components/Content/2 Activites';
import Benefits from './Components/Content/3 Benefits'
import Timetable from './Components/Content/4 Timetable'
import Rules from './Components/Content/5 Rules'
import Footer from './Components/Content/6 Footer'

function App() {
  return (
    <div className="App">
      <About />
      <Activities/>
      <Benefits />
      <Timetable />
      <Rules />
      <Footer />
    </div>
  );
}

export default App;

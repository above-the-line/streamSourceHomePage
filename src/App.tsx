import React from 'react';
import './App.css';
import FrontPageSlider from './components/frontPageSlider';
import { cards } from './data/siteData';

function App() {
  return (
    <div>
      <FrontPageSlider cards={cards} />
    </div>
  );
}

export default App;

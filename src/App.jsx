import { useState } from 'react';
import  Startgame from './Components/Startgame.jsx'
import Gameplay from './Components/Gameplay.jsx';

function App() {
  const [Isgameplay,Setgameplay]=useState(false);
  const togglegameplay = ()=> {
    Setgameplay((prev) => !prev);
  };

  return (
    <>
      {
      Isgameplay? <Gameplay/> : <Startgame toggle={togglegameplay}/>
      }
      
      </>
  );

}
export default App;

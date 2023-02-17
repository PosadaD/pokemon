import { useState } from 'react';
import './App.css';
import fighter1 from "./img/fighter1.png"
import fighter2 from "./img/fighter2.png"


 
function App() {

  const [figth1, setfight1] = useState({
    name:"Juan",
    life: 100,
    level: Math.floor(Math.random() * (100 - 10 + 1) + 10)
  })

  const [figth2, setfight2] = useState({
    name:"Pedro",
    life:100,
    level: Math.floor(Math.random() * (100 - 10 + 1) + 10)
  })

  function Attack(){
    var damage1 = Math.floor(figth2.level * Math.random());
    var actualLife = figth1.life-damage1;
    setfight1({...figth1, life:actualLife});
    if(actualLife <= 0){
      setfight1({...figth1, life:0});
    }

    if(actualLife > 0){
      setTimeout(counterAttack, 900);
      function counterAttack(){
        var fighter1Choice = Math.floor(Math.random() * (2 - 1 + 1) + 1)
        if(fighter1Choice === 1){
          var damage2 = Math.floor(figth1.level * Math.random());
          var actualLife = figth2.life-damage2;
          setfight2({...figth2, life:actualLife});
          if(actualLife <= 0){
            setfight2({...figth2, life:0});
          }
        }
        else if(fighter1Choice === 2){
          var health1 = Math.floor((figth1.level/2) * Math.random());
          var actualhealth = figth1.life+health1;
          setfight1({...figth1, life:actualhealth});
          if(actualhealth >= 100){
            setfight1({...figth1, life:100});
          }
        }
      }
    }
    else{
      setfight1({...figth1, life:0})
    }
  }

  function Health(){
    var health2 = Math.floor((figth2.level/2) * Math.random());
    var actualhealth = figth2.life+health2;
    setfight2({...figth2, life:actualhealth});
    if(actualhealth >= 100){
      setfight2({...figth2, life:100});
    }

    if(figth1.life > 0){
      setTimeout(counterAttack, 900);
      function counterAttack(){
        var fighter1Choice = Math.floor(Math.random() * (2 - 1 + 1) + 1)
        if(fighter1Choice === 1){
          var damage2 = Math.floor(figth2.level * Math.random());
          var actualLife = figth2.life-damage2;
          setfight2({...figth2, life:actualLife});
          if(actualLife <= 0){
            setfight2({...figth2, life:0});
          }
        }
        else if(fighter1Choice === 2){
          var health1 = Math.floor((figth1.level/2) * Math.random());
          var actualhealth = figth1.life + health1;
          setfight1({...figth1, life:actualhealth});
          if(actualhealth >= 100){
            setfight1({...figth1, life:100});
          }
        }
      }
    }
    else{
      setfight1({...fighter1, life:0})
    }
  }

  return (
    <div className='mainContainer'>
      <div className='battleContainer'>
        <div className='fighter1'>
          <div className='arrayContainer'>
            <p><b>{figth1.name}</b></p>
            <div className='lifeBar' style={{width:`${figth1.life}%`, justifyContent: figth1.life <= 10? "flex-start":"flex-end", color: figth1.life <= 5? "black":"white"}}>{`${figth1.life}%`}</div>
            <p>{`LEVEL: ${figth1.level}`}</p>
          </div>
          <img src={fighter1} alt=""></img>
        </div>
        <div className='fighter2'>
          <div className='arrayContainer'>
            <p><b>{figth2.name}</b></p>
            <div className='lifeBar' style={{width:`${figth2.life}%`, justifyContent: figth2.life <= 10? "flex-start":"flex-end", color: figth2.life <= 5? "black":"white"}}>{`${figth2.life}%`}</div>
            <p>{`LEVEL: ${figth2.level}`}</p>
          </div>
          <img src={fighter2} alt=""></img>
        </div>
      </div>
      <div className='optionsContainer'>
        <div className='textButton'>
          <h3>What would you like to do?</h3>
        </div>
        <div className='buttonsOption'>
          <button onClick={Attack}>Attack</button>
          <button onClick={Health}>Health</button>
        </div> 
      </div>
      <div className='resultContainer'style={{display: figth1.life === 0? "flex":"none"}}>
        <div>
          <h2>You won!</h2>
          <button onClick={() =>{window.location.reload()}}>Restart</button>
        </div>
      </div>
      <div className='resultContainer'style={{display: figth2.life === 0? "flex":"none"}}>
        <div>
          <h2>You lose!</h2>
          <button onClick={() =>{window.location.reload()}}>Restart</button>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import BasicForm from './BasicForm';
import EndPage from './EndPage';
import {useState} from 'react';
import callAPI from './callAPI.js';


const App = () => {
    var [startGame, setStartGame] = useState(false);
    var [Values, setValues] = useState({
        name: '',
        email: '',
        phone: ''
      });

    if (startGame === false) {
        return (
        
            <div>
                <BasicForm  newValues = {setValues} startInd = {setStartGame}/>
            </div>
        );
    } else {
        callAPI("crossborderamjad","","","","","","","","","",Values.name,Values.email,Values.phone,"","","","","","","")
        console.log(Values.name,Values.email,Values.phone);
        return (
            
            <div>
                <EndPage/>
            </div>
        );

    }
}

export default App;




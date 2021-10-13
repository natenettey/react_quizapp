import Home from './Home'
import QuizPortal from './Quiz/QuizPortal'
import { useState} from 'react'

function App (prop)
{

  const [ nameState, setNameState ] = useState( false )
  const [namePassed, setNamePassed] = useState();
  const nameSubmissionHandler = (name) =>
  { 
    if ( name )
    { 
      setNameState( true )
      setNamePassed(name);
    
      
    }
     
  }
  return (
    <div>
      {!nameState && <Home onEnter={nameSubmissionHandler} />}
      { nameState && <QuizPortal passedname={namePassed}  />}
    </div>
  );
  
}

export default App;

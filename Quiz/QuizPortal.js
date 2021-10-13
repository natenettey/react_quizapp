import { useState } from 'react'
import classes from './QuizPortal.module.css'
import Modal from '../UI/Modal'

const questionsArray = [
  {
    question: "Pick the correct Javascript Framework from the following?",
    answer1: {
      option: "Sass",
      value: 0
    },
    answer2: {
      option: "Laravel",
      value: 0
    },
    answer3: {
      option: "React.JS",
      value: 1
    },
    answer4: {
      option: "Bootstrap 5",
      value: 0
    }
  },

  {
    question: "Pick the odd one out of the following",
    answer1: {
      option: "Software development",
      value: 1
    },
    answer2: {
      option: "Data Science",
      value: 0
    },
    answer3: {
      option: "Forensic Accounting",
      value: 1
    },
    answer4: {
      option: "Artificial Intelligence",
      value: 0
    }
  },

  {
    question: "Pick the correct NodeJS Framework from the following?",
    answer1: {
      option: "Expresso JS",
      value: 0
    },
    answer2: {
      option: "Espress JS",
      value: 0
    },
    answer3: {
      option: "Ecpress JS",
      value: 1
    },
    answer4: {
      option: "Express JS",
      value: 1
    }
  },

  {
    question: "Which of the following is not a programming language",
    answer1: {
      option: "R",
      value: 0
    },
    answer2: {
      option: "HTML",
      value: 1
    },
    answer3: {
      option: "Python",
      value: 0
    },
    answer4: {
      option: "JavaScript",
      value: 0
    }
  },

  {
    question: "Which if the following compares two values in Javascript",
    answer1: {
      option: "=",
      value: 0
    },
    answer2: {
      option: "===",
      value: 1
    },
    answer3: {
      option: "====",
      value: 0
    },
    answer4: {
      option: "=>",
      value: 0
    }
  },
];

let scoreArray = []


const QuizPortal = (prop) =>
{ 
    const [ questionState, setQuestionState ] = useState( 0 )
    
    
    // const submitHandler = ( event ) =>
    // { 
    //     event.preventDefault();
    //   setStateQuestionState( questionState + 1 )
      
    //   // console.log( "value", radioState );
    //   event.target.checked = false
    // }

    const acceptValue = (value) =>
    { 
     //accept the value and move the next question
      console.log( value )
      scoreArray.push( value )
      console.log(scoreArray)
      setQuestionState( questionState + 1 )
    
    }
  const getTotal = ( total, current ) => { return total + current }
  
  if ( questionState === questionsArray.length ) return <Modal>
      <h2>You scored </h2>
    <p>{scoreArray.reduce(getTotal, 0)}</p>
    <h2>Out Of  { questionsArray.length} Questions</h2> 
  </Modal>

    return (
      
     
      <div className={ classes[ "quiz-section" ] }>
        <div className={ classes[ "quiz-section__one" ] }>
          <h2>Hello, { prop.passedname}</h2>
          <div>
          <p>
            {questionsArray[ questionState ].question}
          </p>
          </div>
        <button onClick={ acceptValue.bind( null, questionsArray[ questionState ].answer1.value ) }>{ questionsArray[ questionState ].answer1.option }</button>
        <button onClick={ acceptValue.bind( null, questionsArray[ questionState ].answer2.value ) }>{ questionsArray[ questionState ].answer2.option }</button>
        <button onClick={ acceptValue.bind( null, questionsArray[ questionState ].answer3.value ) }>{ questionsArray[ questionState ].answer3.option }</button>
        <button onClick={ acceptValue.bind( null, questionsArray[ questionState ].answer4.value ) }>{ questionsArray[ questionState ].answer4.option }</button>
        </div>
       </div>
      
      
    );

        // <p>Hello, { prop.passedname}</p>questionState === questionsArray.length
    
}

export default QuizPortal

/* <form onSubmit={submitHandler}>
        <p>{questionsArray[questionState].question}</p>
       <div>
          <h1>Radio Button Demo.</h1>
          <div className="radio-btn-container">
            <div className="radio-btn">
              <label><input type="radio" name="option" checked={radioState ===questionsArray[ questionState ].answer1.value } onChange={ setRadioState.bind( null, questionsArray[ questionState ].answer1.value ) } /> { questionsArray[ questionState ].answer1.option}</label>
                  </div>
              
            </div>

            <div className="radio-btn">
              <input type="radio" name="option" onChange={setRadioState.bind(null, questionsArray[questionState].answer2.value)} checked={radioState ===questionsArray[ questionState ].answer2.value }/>
              { questionsArray[ questionState ].answer2.option}
            </div>

            <div className="radio-btn">
             <input type="radio" name="option" onChange={setRadioState.bind(null, questionsArray[questionState].answer3.value)} checked={radioState ===questionsArray[ questionState ].answer3.value }/>
              { questionsArray[ questionState ].answer3.option}
            </div>
                
          </div>
        
        <button>Next</button>
      </form> */






//  <form onSubmit={submitHandler}>
//         <p>{questionsArray[questionState].question}</p>
       
//           <h1>Radio Button Demo.</h1>
//           <div className="radio-btn-container">
//             <div className="radio-btn" onClick={acceptValue.bind(null, questionsArray[questionState].answer1.value)}>
//               <input type="radio" value={radioState} name="tripType" checked={radioState === questionsArray[questionState].answer1.value} />
//               One-way
//             </div>

//             <div className="radio-btn" onClick={acceptValue.bind(null, questionsArray[questionState].answer2.value)}>
//               <input type="radio" value={radioState} name="tripType" checked={radioState === questionsArray[questionState].answer2.value} />
//               Somn Diffren
//             </div>

//             <div className="radio-btn" onClick={acceptValue.bind(null, questionsArray[questionState].answer3.value)} >
//               <input type="radio" value={radioState} name="tripType" checked={radioState === questionsArray[questionState].answer3.value} />
//               Multi-City
//             </div>
                
//           </div>
        
//         <button>Next</button>
//       </form>
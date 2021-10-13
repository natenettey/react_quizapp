import classes from './Home.module.css'
import HomeForm from './HomeForm'

const Home = (props) =>
{ 
  const forwardingHandler = (name) =>
  { 
    props.onEnter(name)
  }
    return (
      <div className={classes["home-section"]}>
        <div className={classes["home-section__one"]}>
          <div className={classes["home-section__text"]}>
            <h1>Quiz App</h1>
            <h3>Enter your name to begin</h3>
            <HomeForm onStart={forwardingHandler} />
          </div>
        </div>
      </div>
    );
    
}

export default Home
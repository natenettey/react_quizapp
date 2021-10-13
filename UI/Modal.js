import ReactDOM from 'react-dom'
import classes from './Modal.module.css'
import { Fragment} from 'react'

                  
const selection = document.getElementById('overlay')
const BackDrop = () =>
{
    return <div className={ classes.backdrop}></div>;
}

const OverLay = ( props ) =>
{ 
    return (
      <div className={classes.modal}>
        <div className={classes.text_div}>{props.children}</div>
      </div>
    );
}



const Modal = (props) =>
{ 
    return (
      <div>
            { ReactDOM.createPortal( <BackDrop/>, selection ) }
            { ReactDOM.createPortal( <OverLay>{ props.children}</OverLay>, selection)}
            </div>
    )
}

export default Modal
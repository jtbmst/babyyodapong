import React from 'react';
import logo from './logo.svg';
import './App.css';
import { css } from '@emotion/css';

interface SecondButtonProps {
  otherButtonCount:number;
}

export class SecondButton extends React.Component<SecondButtonProps, any>{

  state = {
    clickCount:0,
  }

  componentDidMount(){

  }

  componentDidUpdate(){

  }

  componentWillUnmount(){

  }

  clickedButton = ()=>{
    this.setState({
      clickCount:(this.state.clickCount + 1)
    })
  }

  render(){
    return <button 
      className={css`
        background-color:yellow;
      `}
      onClick={this.clickedButton}>
      Some text {this.state.clickCount} || otherbutton: {this.props.otherButtonCount}
      </button>
  }
}


interface AppProps{
  initialCount:number;
}

export function App(props:AppProps): JSX.Element {
  const [count, setCount]:[number, React.Dispatch<React.SetStateAction<number>>] = React.useState(props.initialCount);

  React.useEffect(()=>{




    return ()=>{

    }

  })


  return (
    <div className="App" >
      <button onClick={()=>{
        // alert('something') 
        setCount(count+1);
      }} >Click Me {count}</button>
      
      <SecondButton otherButtonCount={count} />
    
    </div>
  );
}

// export App;

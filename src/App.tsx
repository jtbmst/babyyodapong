import React from 'react';
import logo from './logo.svg';
import './App.css';
import { css } from '@emotion/css';
import { observable,computed } from 'mobx';
import { observer } from 'mobx-react';

interface SecondButtonProps {
  otherButtonCount:number;
  onClick:()=>void;
}


export class GeneralStore {
  @observable breadStock = 5;
  @observable gallonsOfWater = 10;

  @computed get totalNumberOfStock(){

    return this.breadStock + this.gallonsOfWater;
  }


  render = observer((props:{configure:boolean})=>{
    const [ someState, setSomeState ] = React.useState(1);

    return (
      <div>
        {props.configure ? (<div>CONFIGURE</div>) : (
          <>
            <div>
            Bread: {this.breadStock}
            </div>
            <div>
              Water: {this.gallonsOfWater}
            </div>
            <br/>
            <div>
              TotalStock: {this.totalNumberOfStock}
            </div>
          </>
        )}
        
      </div>
    )
  })

}


@observer
export class SecondButton extends React.Component<SecondButtonProps, any>{

  // state = {
  //   clickCount:0,
  // }
  @observable clickCount = 0;
  // @observable myStore = new GeneralStore();

  componentDidMount(){
    
  }

  componentDidUpdate(){

  }

  componentWillUnmount(){

  }

  clickedButton = ()=>{
    // this.setState({
    //   clickCount:(this.clickCount + 1)
    // })
    this.clickCount = this.clickCount + 1;
    this.props.onClick();
  }

  render(){
    return <button 
      className={css`
        background-color:yellow;
      `}
      onClick={this.clickedButton}>
      Some text {this.clickCount} || otherbutton: {this.props.otherButtonCount}
      </button>
  }
}


const MyComp = observer((props:any)=><div>{props.generalStore.totalNumberOfStock}</div>)

interface AppProps{
  initialCount:number;
}

export const App = observer((props:AppProps): JSX.Element => {
  const [count, setCount]:[number, React.Dispatch<React.SetStateAction<number>>] = React.useState(props.initialCount);

  const { current:myGeneralStore }  = React.useRef(new GeneralStore());
  /*

  [
    myGeneralStore,
    setter myGeneralStor
  ]


  myArray[0]
  myArray[1]
  */

  React.useEffect(()=>{
    window['myGeneralStore'] = myGeneralStore;
  })


  return (
    <div className="App" >
      <button 
      onClick={()=>{
        // alert('something') 
        setCount(count+1);
      }} 
      >
        Click Me {count}
      </button>
      
      <SecondButton onClick={()=>{
        myGeneralStore.breadStock++;
      }} otherButtonCount={count} />
    
      
      
      <myGeneralStore.render configure={false}/>

      <myGeneralStore.render configure={false}/>

      <MyComp generalStore={myGeneralStore} />

    </div>
  );
});

// export App;

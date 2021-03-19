import React from 'react';
import { observer } from 'mobx-react';
import { css } from '@emotion/css';
import { observable } from 'mobx';
import { Start } from './pages/Start';


interface AppProps{

}

export const App = observer((props:AppProps): JSX.Element => {


  return (
    <div className={S.app()}>
      <GameFrame />
    </div>
  );
});

@observer
class GameFrame extends React.Component{

  @observable currentPage = <Start />;

  

  render(){
    return (
      <div className={S.frame()}>
        {this.currentPage}
      </div>
    )
  }
}

const S = {
  app: ()=>css`
    display:grid;
    place-items:center;
    height:100vh;
    background-color:#333;
    color:white;
  `,
  frame:()=>css`
    width: 500px;
    height:800px;
    background-color:#666;
    position:relative;
  `
}
import React from 'react';
import { observer } from 'mobx-react';
import { css } from '@emotion/css';
import { observable } from 'mobx';
import { Start } from './pages/Start';
import { RenderStore } from './RenderStore';
import { Play } from './pages/Play';


interface AppProps{

}

export const App = observer((props:AppProps): JSX.Element => {

  const [ store ] = React.useState(new GameFrame())


  return (
    <div className={S.app()}>
      <store.render />
    </div>
  );
});


class GameFrame extends RenderStore{

  @observable startPage = new Start();
  @observable playPage = new Play();
  @observable currentPage:RenderStore = this.startPage;

  constructor(){
    super();
    window['GameFrameStore'] = this;

    this.startPage.events.startWasClicked = ()=>{
      this.currentPage = this.playPage;
    }
  }

  render(){
    return (
      <div className={S.frame()}>
        <this.currentPage.render />
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
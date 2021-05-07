import * as React from 'react';
import { observer } from "mobx-react";
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { css } from '@emotion/css';
import { observable } from 'mobx';
import { RenderStore } from '../RenderStore';


export class Start extends RenderStore{


  @observable inputValue = '';

  constructor(){
    super();
    window['Start'] = this;
  }

  onStartClicked = ()=>{
    alert('start was clicked')
    this.events.startWasClicked();
  }

  onLeaderboardClicked = ()=>{
    alert('leaderboard was clicked')
  }

  onInputChanged = (event:React.BaseSyntheticEvent)=>{
    this.inputValue = event.target.value;
  }

  events = {
    startWasClicked:()=>{}
  }

  render(){
    return (
      <div className={S.start()}>
        <h1>BabyYodaPong</h1>
        <div className={S.spacer()} />
        <div className={S.actionContainer()}>
          <Input value={this.inputValue} onChange={this.onInputChanged} />
          <Button label='Start' onClick={this.onStartClicked} />
          <Button label='Leaderboard' onClick={this.onLeaderboardClicked}/>
        </div>
      </div>
    )
  }
}

const S = {
  start:()=>css`
    display:flex;
    width:100%;
    height:100%;
    flex-direction:column;
    align-items:center;
  `,
  spacer:()=>css`
    flex-grow:1;
  `,
  actionContainer:()=>css`
    flex-grow:1;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
  `
}
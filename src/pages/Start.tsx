import * as React from 'react';
import { observer } from "mobx-react";
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { css } from '@emotion/css';

@observer
export class Start extends React.Component{

  render(){
    return (
      <div className={S.start()}>
        <h1>BabyYodaPong</h1>
        <div className={S.spacer()} />
        <Input />
        <Button />
        <Button  />
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
  `
}
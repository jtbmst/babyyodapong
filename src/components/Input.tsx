import * as React from 'react';
import { observer } from "mobx-react";

@observer
export class Input extends React.Component{

  render(){
    return (
      <input type='text' ></input>
    )
  }
}

const S = {

}
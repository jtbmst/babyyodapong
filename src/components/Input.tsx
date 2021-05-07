import * as React from 'react';
import { observer } from "mobx-react";

interface InputProps{
  value:string;
  onChange:(event:React.SyntheticEvent)=>void;
}
@observer
export class Input extends React.Component<InputProps>{

  render(){
    return (
      <input type='text' value={this.props.value} onChange={this.props.onChange} ></input>
    )
  }
}

const S = {

}
import * as React from 'react';
import { observer } from "mobx-react";

interface ButtonProps{
  label:string;
  onClick:()=>void;
}
@observer
export class Button extends React.Component<ButtonProps>{

  render(){
    return (
      <button onClick={this.props.onClick}>
        {this.props.label}
      </button>
    )
  }
}

const S = {

}
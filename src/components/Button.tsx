import * as React from 'react';
import { observer } from "mobx-react";

@observer
export class Button extends React.Component{

  render(){
    return (
      <button>Click Me</button>
    )
  }
}

const S = {

}
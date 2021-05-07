import * as React from 'react';
import { observer } from 'mobx-react';


export class RenderStore{


    constructor(){
        const R = this.render.bind(this);
        this.render = observer((props:any)=>R(props));
    }

    render(props:any){
        return <></>
    }

}
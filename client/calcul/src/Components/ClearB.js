import React, {Component} from 'react';
import './clearbutton.css';

class ClearB extends Component {

    render(){
        return(
            <div className="clearUp"
            onClick={()=> this.props.handleClear()}
            >Clear
                {this.props.children}
            </div>
        )
    }

};

export default ClearB;
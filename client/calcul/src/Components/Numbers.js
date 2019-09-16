import React, {Component} from 'react'
import { Button } from 'reactstrap';

class Numbers extends Component {
    numberClicked = e => {
        this.props.numberClicked(e.target.name);
    }
    render(){
        return( 
            <div>
                <Button className="number" name="1" onClick={this.numberClicked}
                >1
                </Button>
                
                <Button className="number" name="2" onClick={this.numberClicked}
                >2
                </Button>
                
                <Button className="number" name="3" onClick={this.numberClicked}
                >3
                </Button>
                
                <Button className="number" name="4" onClick={this.numberClicked}
                >4
                </Button>
                
                <Button className="number" name="5" onClick={this.numberClicked}
                >5
                </Button>
                
                <Button className="number" name="6" onClick={this.numberClicked}
                >6
                </Button>
                
                <Button className="number" name="7" onClick={this.numberClicked}
                >7
                </Button>
                
                <Button className="number" name="8" onClick={this.numberClicked}
                >8
                </Button>
                
                <Button className="number" name="9" onClick={this.numberClicked}
                >9
                </Button>
                
                <Button className="number" name="+" onClick={this.numberClicked}
                >+
                </Button>
                
                <Button className="number" name="=" onClick={this.numberClicked}
                
                >=</Button>

            </div>
        )
    }

}
export default Numbers;

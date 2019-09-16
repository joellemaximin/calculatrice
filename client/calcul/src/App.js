import React, { Component } from 'react';
import './App.css';
import ClearB from './Components/ClearB';
import Numbers from './Components/Numbers';
import Ouput from './Components/Ouput';
import update from 'react-addons-update';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        input: {
          valueA: "",
           valueB: "",
           operation: ""
        },
      
      result: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSumbit = this.onSumbit.bind(this);
    this.inputValidation = this.inputValidation.bind(this);
  }

  handleInputChange(event)
	{
		var newState = {input:{}};
		newState.input[event.target.name] = {$set: event.target.value};

		this.setState(update(this.state, newState));
  }
  
  componentDidMount(){
    this.fetchData();
    console.log(this.fetchData)
  }

  fetchData(){
    let that = this;
    fetch('/add'+ '?a=' + this.state.input.valueA + '&b=' + this.state.input.valueB, {method: "GET"})
    .then(res => res.json())
      .then(res =>  {
         var newState = {};
				newState["result"] = {$set: res.result};

				this.setState(update(this.state, newState));
		      return true;
      })
    return false
    //.catch(error => console.log('erreurs me voilàà', error))
  }

  
	inputValidation()
	{
		var valueA = this.state.input.valueA;
		var valueB = this.state.input.valueB;
		var operation = this.state.input.operation;
		if(valueA === "" || valueB === "" )
		{
			alert("Must provide a number A or a number B");
			return false;
		}
		if(operation==="")
		{
			alert("Must provide an operation");
			return false;
		}
		return true;
	}

  onSumbit(e)
	{
		e.preventDefault();
		console.log(this.state.input);
		
		if(!this.inputValidation())
		{
			return false;
		}
		// fill all hidden values
		var params = {
			valueA: this.state.input.valueA,
			valueB: this.state.input.valueB
		};
		
		this.fetchData()
			.then(res => {
		        var newState = {};
				newState["result"] = {$set: res.result};

				this.setState(update(this.state, newState));
		        return true;
      		})
      		.catch(error => {
      			throw error;
    	});
	}

  numberClicked = numberName => {
    if(numberName === '='){
      this.calculate()
    } else {
      this.setState({
        result: this.state.result + numberName
      })
    }
  }


  calculate = () => {
    this.setState({
      result: eval(this.state.result)
    })
  }
  mustClear = () => {
    this.setState({result: ""})
  }


  render() {
    console.log(this.state.result)
    console.log(this.state.input.valueA)
    console.log(this.state.input.valueB)


    return (
      <div className="App">
        <h2>Calculate</h2>
        <div id="calcContainer">
          <form id="calcForm">
            <span className="calc-input-instruction">The first number:</span><input type="number" name="valueA" onChange={this.handleInputChange} required="required"/><br/>
            <div>
                <input type="radio" id="operation1" name="operation" value="ADD" onChange={this.handleInputChange} />
                <label className="calc-label">+</label>
            </div>
            <span className="calc-input-instruction">The second number:</span><input type="number" name="valueB" onChange={this.handleInputChange} required="required"/><br/>
            
                <button id="calcBtn" onClick={this.onSumbit}>Calculate</button>
          </form>
          <div>
            <span id="calcResult">Result: {this.state.result}</span>
          </div>
        </div>
        <Ouput result={this.state.result} />
        <Numbers numberClicked={this.numberClicked} />
        <ClearB
          handleClear={this.mustClear}
        />
      </div>
    );
  }
}
export default App;

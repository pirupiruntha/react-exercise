import React from "react";
import ReactDOM from "react-dom";

class CountCharacters extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            message:''
        };
    }
    onMessageChange(text){
        this.setState({
            message:'message has'+text.length+'number of characters'
        });
    }
    render() {
        return <div>
            <h2> Count Characters component...</h2>
            <p>
                <label>Enter Message : <input type="text" onChange={e=>this.onMessageChange(e.target.value)}/></label>
            </p>
            <p>
                <label>{this.state.message}</label>
            </p>
        </div>
    }
}
class Employee extends React.Component{
    state={counter:0};
    addEmployee=()=>{                                           //function
        this.setState({counter:this.state.counter+1});
        // alert("Adding a new employee");
        //alert("Add employee button is clicked"+this.counter+"times");
    }
    render() {
        return <div>
            <h2> Welcome to react component......</h2>
            <p>
                <button onClick={this.addEmployee}>Add Employee</button>
            </p>
            <p>
                <label>Add employee button is clicked : <b>{this.state.counter+1}</b>times</label>
            </p>
        </div>
    }

}

const element =<CountCharacters></CountCharacters>

ReactDOM.render(element,document.getElementById("root"));
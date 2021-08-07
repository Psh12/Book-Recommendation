import React, {Component} from 'react';
import './ResultPage.css';

class ResultPage extends Component {

    addBook = async (book_number)=>{
      
      const response = await fetch('http://localhost:5000/results', {
        method: "POST",
        headers:{"token": localStorage.token,"Content-Type": "application/json"},
        body: JSON.stringify({book_number})
      })
     
    }

  render() {
    return (
        <div>
          <center>
            <h1> {this.props.location.state.book.title} </h1>
            <div className="box-container">
              <div className="box-child">
                <img style={{height: 200}} src= {this.props.location.state.book.link} alt="result"/>
                <button onClick = {()=>this.addBook(this.props.location.state.book.book_number)}>click to Add</button>
              </div>
              <div className="box-child">
                <p>Target Audience: {this.props.location.state.book.demographic}</p>
                <p>Synopsis: {this.props.location.state.book.synopsis}</p>
              </div>
            </div>
            
          </center>
        </div>
    );
  }
}

export default ResultPage;
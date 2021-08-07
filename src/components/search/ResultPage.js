import React, {Component} from 'react';
import Recommendations from './Recom.js';
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
            <div class="box-container">
              <div class="box-thumb">
                <img style={{height: 200}} src= {this.props.location.state.book.link} alt="result"/>
                <button onClick = {()=>this.addBook(this.props.location.state.book.book_number)}>click to Add</button>
              </div>
              <div class="box-content">
                <div>Author: {this.props.location.state.book.author}</div>
                
                <div>Target Audience: {this.props.location.state.book.demographic}</div>
                <br></br>
                <div>Synopsis: {this.props.location.state.book.synopsis}</div>
              </div>
            </div>
            
          </center>
          <br></br>
          <center>
            <Recommendations bookgen = {this.props.location.state.book.genre} bookdem = {this.props.location.state.book.demographic} booktitle = {this.props.location.state.book.title}/>
          </center>
        </div>
    );
  }
}

export default ResultPage;
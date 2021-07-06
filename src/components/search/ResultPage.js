import React, {Component} from 'react';
import './ResultPage.css';

class ResultPage extends Component {

  render() {
    return (
        <div>
          <center>
            <h1> {this.props.location.state.book.title} </h1>
            <div class="box-container">
              <div class="box-child">
                <img style={{height: 200}} src= {this.props.location.state.book.link} alt="result"/>
              </div>
              <div class="box-child">
                <div>Author: {this.props.location.state.book.author}</div>
                <div>Genre: {this.props.location.state.book.genre}</div>
                <div>Target Audience: {this.props.location.state.book.demographic}</div>
              </div>
            </div>
          </center>
        </div>
    );
  }
}

export default ResultPage;
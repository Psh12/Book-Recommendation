import React, {Component} from 'react';

class ResultPage extends Component {
  render() {
    return (
        <div>
          <center>
            <h1> /*Book Tile*/ </h1>
            <div id='box'>
              <div>Title: {this.props.title}</div>
              <div>Author: {this.props.author}</div>
              <div>Genre: {this.props.genre}</div>
              <div>Target Audience: {this.props.demographic}</div>
            </div>
          </center>
        </div>
    );
  }
}

export default ResultPage;

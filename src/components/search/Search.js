import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

const books = [
  {
    "id": 1,
    "title":"Eragon",
    "author":"Christopher Paolini",
    "genre":"Fantasy",
    "demographic":"Young Adult",
    "link": "https://images-na.ssl-images-amazon.com/images/I/51uuWGQyLSL._SX330_BO1,204,203,200_.jpg\n"
  },
  {
    "id": 2,
    "title":"Pride and Prejudice",
    "author":"Jane Austen",
    "genre":"Historical Fiction",
    "demographic":"Adult",
    "link": "https://m.media-amazon.com/images/I/51tiK-eB3JL.jpg\n"
  },
  {
    "id": 3,
    "title":"Clifford the Big Red Dog",
    "author":"Norman Bridwell",
    "genre":"Fiction",
    "demographic":"Children",
    "link": "https://images-na.ssl-images-amazon.com/images/I/71lgBdNFjyL.jpg\n"
  }
]

function searchingFor(term){
  return function(x){
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      books: books,
      term: "",
    }

    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event){
    this.setState({ term: event.target.value })
  }

  render() {
    const {term, books} = this.state;
    const isTermBlank = term;

    return (
      <div className="App">
        <div style={{backgroundColor: '#121212', color: 'white'}}>
          <div style={{textAlign: 'center', padding: '20px'}}>
            <h1>Book Search</h1>
            {
            /*
            <Link to='/toggle'>
              <button className='btns'>Toggle</button>
            </Link>
            */
            }
          </div>
          <form>
            <input type="text" onChange={this.searchHandler} value={term}/>
          </form>
          <br/>
        </div>
       <center>
      { isTermBlank.length > 1 &&
        books.filter(searchingFor(term)).map(book => 
          <div key={book.id}>
            <Link to={{pathname: "/results", 
              state: {
                book: book,
              }
              }} className="falseh1"> {book.title} </Link>
          </div>
        )
      }
      </center>
      </div>
    );
  }
}

export default Search;
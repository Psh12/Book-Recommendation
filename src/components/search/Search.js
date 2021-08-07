import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

const books = [
  {
    "book_number": ' 978-0-545-21578-7',
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
          <div key={book.book_number}>
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
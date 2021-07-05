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
    "link": "http://localhost:3000/books/Eragon\n"
  },
  {
    "id": 2,
    "title":"Pride and Prejudice",
    "author":"Jane Austen",
    "genre":"Historical Fiction",
    "demographic":"Adult",
    "link": "http://localhost:3000/books/Pride_and_Prejudice\n"
  },
  {
    "id": 3,
    "title":"Clifford the Big Red Dog",
    "author":"Norman Bridwell",
    "genre":"Fiction",
    "demographic":"Children",
    "link": "http://localhost:3000/books/Clifford_the_Big_Red_Dog\n"
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
    const {term, people} = this.state;

    return (
      <div className="App">
        <div style={{backgroundColor: '#121212', color: 'white'}}>
          <div style={{textAlign: 'center', padding: '20px'}}>
            <h1>Book Search</h1>
            <Link to='/toggle'>
              <button className='btns'>Toggle</button>
            </Link>
          </div>
          <form>
            <input type="text" onChange={this.searchHandler} value={term}/>
          </form>
          <br/>
        </div>
       <center>
      {
        books.filter(searchingFor(term)).map(book => 
              <div key={book.id}>
                <a className="falseh1" href={book.link}> {book.title} </a>
              </div>
            )
      }
      </center>
      </div>
    );
  }
}

export default Search;
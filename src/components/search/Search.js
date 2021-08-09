import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './Search.css';



function searchingFor(term){
  return function(x){
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      books: [],
      term: "",
    }

    this.searchHandler = this.searchHandler.bind(this);
  }

  getBooks = async()=>{
    const response = await fetch('http://localhost:5000/books',{
      method: "GET",
    });

    const parseRes = await response.json();
   
    this.setState({books: parseRes});
   
  }

  componentDidMount(){
    this.getBooks();
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
      { isTermBlank.length > 1 &&
        books.filter(searchingFor(term)).map(book => 
          <div key={book.book_number}>
            <Link to={{pathname: "/results", state: {book: book,} }} className="falseh1"> 
              <div className="post-container">                
                <div className="post-thumb">
                  <img src={book.link} alt="book cover"/>
                </div>
                <div className="post-content">
                  <div><h3>{book.title}</h3></div>
                  <div><p>{book.author}</p></div>
                </div>
              </div>
            </Link>
          </div>
        )
      }
      </center>
      </div>
    );
  }
}

export default Search;
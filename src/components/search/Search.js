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
    "link": "https://images-na.ssl-images-amazon.com/images/I/71lgBdNFjyL.jpg\n",
    "synopsis": "Emily Elizabeth loves her huge dog Clifford even though he is far from perfect."
  },
  {
    "book_number": '978-0-547-92822-2',
    "title":"The Hobbit",
    "author":"J.R.R. Tolkien",
    "genre":"Fantasy",
    "demographic":"Teenagers",
    "link": "https://coverart.oclc.org/ImageWebSvc/oclc/+-+3597429966_140.jpg?SearchOrder=+-+OT,OS,TN,GO,FA\n",
    "synopsis": "Smaug certainly looked fast asleep, almost dead and dark, with scarcely a snore more than a whiff of unseen steam, when Bilbo peeped once more from the entrance. He was just about to step out on to the floor when he caught a sudden thin and piercing ray of red from under the drooping lid of Smaug's left eye. He was only pretending to sleep! He was watching the tunnel entrance! Whisked away from his comfortable, unambitious life in his hobbit-hole in Bag End by Gandalf the wizard and a band of dwarves, Bilbo Baggins finds himself caught up in a plot to raid the treasure hoard of Smaug the Magnificent, a large and very dangerous dragon. Although quite reluctant to take part in this quest, Bilbo surprises even himself by his resourcefulness and his skill as a burglar!"
  },
  {
    "book_number": '978-0-747-53274-3',
    "title":"Harry Potter and the Philosopher Stone",
    "author":"J.K. Rowling",
    "genre":"Fantasy",
    "demographic":"Young Adult",
    "link": "https://coverart.oclc.org/ImageWebSvc/oclc/+-+242672384_140.jpg?SearchOrder=+-+OT,OS,TN,GO,FA\n",
    "synopsis": "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!"
  },
  {
    "book_number": '978-1-5355-3466-6',
    "title":"A Study in Scarlet",
    "author":"Arthur Conan Doyle",
    "genre":"Mystery",
    "demographic":"Young Adult",
    "link": "https://coverart.oclc.org/ImageWebSvc/oclc/+-+380259254_140.jpg?SearchOrder=+-+OT,OS,TN,GO,FA\n",
    "synopsis": "In London, Dr John Watson convalesces, after his disastrous Afghan war experiences. Sharing rooms with an enigmatic, new acquaintance, Sherlock Holmes, their quiet bachelor life at 221B Baker Street is short-lived. A dead man is discovered in a grimy house in south-east London. His face contorted with horror and hatred. On the wall, the word 'rache' - German for 'revenge' - is written in blood, yet there are no wounds on the victim or signs of a struggle. Watson's head is in a whirl, but the formidable Holmes relishes the challenge - and a famous investigative partnership begins."
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
              <div class="post-container">                
                <div class="post-thumb">
                  <img src={book.link} alt="book cover"/>
                </div>
                <div class="post-content">
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
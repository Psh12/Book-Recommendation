import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Toggle.css';

const books = [
  {
    "book_number": 978-0-440-24073-0,
    "title":"Eragon",
    "author":"Christopher Paolini",
    "genre":"Fantasy",
    "demographic":"Young Adult",
    "link": "https://images-na.ssl-images-amazon.com/images/I/51uuWGQyLSL._SX330_BO1,204,203,200_.jpg\n",
    "synopsis": "In a land where dragons have all but disappeared, a young boy finds a dragon egg and discovers that he is destined to be its rider and defend his homeland against the evil king who now reigns."
  },
  {
    "book_number": 978-0-14-143951-8,
    "title":"Pride and Prejudice",
    "author":"Jane Austen",
    "genre":"Historical Fiction",
    "demographic":"Adult",
    "link": "https://m.media-amazon.com/images/I/51tiK-eB3JL.jpg\n",
    "synopsis": "The story of the five Bennet sisters living in early 19th century England. Their mother is scheming to make prestigious marriages for them. Focuses on Elizabeth Bennet, who mistakenly finds the rich Mr. Darcy an oaf, even as he sets all the other fair maidens' hearts aflutter."
  },
  {
    "book_number": 978-0-545-21578-7,
    "title":"Clifford the Big Red Dog",
    "author":"Norman Bridwell",
    "genre":"Fiction",
    "demographic":"Children",
    "link": "https://images-na.ssl-images-amazon.com/images/I/71lgBdNFjyL.jpg\n",
    "synopsis": "Emily Elizabeth loves her huge dog Clifford even though he is far from perfect."
  },
  {
    "book_number": 978-0-547-92822-2,
    "title":"The Hobbit",
    "author":"J.R.R. Tolkien",
    "genre":"Fantasy",
    "demographic":"Teenagers",
    "link": "https://coverart.oclc.org/ImageWebSvc/oclc/+-+3597429966_140.jpg?SearchOrder=+-+OT,OS,TN,GO,FA\n",
    "synopsis": "Smaug certainly looked fast asleep, almost dead and dark, with scarcely a snore more than a whiff of unseen steam, when Bilbo peeped once more from the entrance. He was just about to step out on to the floor when he caught a sudden thin and piercing ray of red from under the drooping lid of Smaug's left eye. He was only pretending to sleep! He was watching the tunnel entrance! Whisked away from his comfortable, unambitious life in his hobbit-hole in Bag End by Gandalf the wizard and a band of dwarves, Bilbo Baggins finds himself caught up in a plot to raid the treasure hoard of Smaug the Magnificent, a large and very dangerous dragon. Although quite reluctant to take part in this quest, Bilbo surprises even himself by his resourcefulness and his skill as a burglar!"
  },
  {
    "book_number": 978-0-747-53274-3,
    "title":"Harry Potter and the Philosopher Stone",
    "author":"J.K. Rowling",
    "genre":"Fantasy",
    "demographic":"Young Adult",
    "link": "https://coverart.oclc.org/ImageWebSvc/oclc/+-+242672384_140.jpg?SearchOrder=+-+OT,OS,TN,GO,FA\n",
    "synopsis": "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!"
  },
  {
    "book_number": 978-1-5355-3466-6,
    "title":"A Study in Scarlet",
    "author":"Arthur Conan Doyle",
    "genre":"Mystery",
    "demographic":"Young Adult",
    "link": "https://coverart.oclc.org/ImageWebSvc/oclc/+-+380259254_140.jpg?SearchOrder=+-+OT,OS,TN,GO,FA\n",
    "synopsis": "In London, Dr John Watson convalesces, after his disastrous Afghan war experiences. Sharing rooms with an enigmatic, new acquaintance, Sherlock Holmes, their quiet bachelor life at 221B Baker Street is short-lived. A dead man is discovered in a grimy house in south-east London. His face contorted with horror and hatred. On the wall, the word 'rache' - German for 'revenge' - is written in blood, yet there are no wounds on the victim or signs of a struggle. Watson's head is in a whirl, but the formidable Holmes relishes the challenge - and a famous investigative partnership begins."
  }
]

class Recom extends Component {
  constructor(props){
    super(props);

    this.state = {
      books: books,
      resultBooks: [] };
  }

  componentDidMount() {
    this.recomList();
  }

  recomList() {
    var results = [];

    // Ask player for genre and demographic
    var userGenre = this.props.bookgen;

    var userDemographic = this.props.bookdem;

    var userTitle = this.props.booktitle;

    // Set all book match values to 0
    var matchValues = [];

    for (var i = 0; i < books.length; i++) {
      matchValues.push(0);
    };

    // Run through database list and if genre and demographics match, increase match value

    for (var i = 0; i < books.length; i++) {
      if (books[i]["genre"] === userGenre) {
        matchValues[i] += 1;
      };
      if (books[i]["demographic"] === userDemographic) {
        matchValues[i] += 1;
      };
      results.push(books[i]);
    };

    // Quick sort

    function swap(arr, i, j){
       var temp = arr[i];
       arr[i] = arr[j];
       arr[j] = temp;
       var temp2 = results[i];
       results[i] = results[j];
       results[j] = temp2;
    }

    function partition(arr, pivot, left, right){
       var pivotValue = arr[pivot],
           partitionIndex = left;

       for(var i = left; i < right; i++){
        if(arr[i] > pivotValue){
          swap(arr, i, partitionIndex);
          partitionIndex++;
        }
      }
      swap(arr, right, partitionIndex);
      return partitionIndex;
    }
      
    function quickSort(arr, left, right){
       var len = arr.length, 
       pivot,
       partitionIndex;


      if(left < right){
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);
    
       //sort left and right
       quickSort(arr, left, partitionIndex - 1);
       quickSort(arr, partitionIndex + 1, right);
      }
      return arr;
    }

    // Sort
    quickSort(matchValues, 0, matchValues.length - 1);
  
    // Clear elements that don't match

    results.splice(matchValues.indexOf(0), results.length);
    matchValues.splice(matchValues.indexOf(0), matchValues.length);

    for (var i = 0; i < results.length; i++) {
      if (results[i]["title"] === userTitle) {
        matchValues.splice(i, 1)
        results.splice(i, 1)
        break
      }
    }
    console.log(results);
    this.setState({ resultBooks: results });
  }

  render() {
    const {resultBooks} = this.state;

    return (
      <div className="App">
      <h3>Recommendations</h3>
       <center>
      { resultBooks.map(book => 
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

export default Recom;
import React, {Component} from 'react';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
  constructor () {
    super()
    this.state = {
        name: '',
        userData: []
        
    }
  }

  // Gets the username of the user 
   getName = async ()=>{
     try {
      const response = await fetch("http://localhost:5000/dashboard",{
        method: "GET",
        headers: {"token": localStorage.token},
      });
      const parseRes = await response.json();
      this.setState({name: parseRes.user_name});
     } 
     catch (error) {
       console.error(error.message);
     } 
   }

   getBooks = async ()=>{
     try {
       const response = await fetch("http://localhost:5000/dashboard/userBooks", {
         method: "GET",
         headers: {"token": localStorage.token},
       });
       const parseRes = await response.json();
       console.log(parseRes);
       this.setState({userData: parseRes});
     } catch (error) {
       console.error(error.message);
     }
   }
  

   logOut = (e)=>{
    e.preventDefault();
     try {
      localStorage.removeItem("token");
      this.props.setAuth(false);
      toast.success("Logged Out Successfully");
     } catch (error) {
       console.error(error.message);
     }
      
   }

   deleteBook = async (book_number, user_id)=>{
     try {
       const response = await fetch(`http://localhost:5000/dashboard/userBooks?user_id=${user_id}&book_number=${book_number}`, {
         method: 'DELETE',
         headers: {"token": localStorage.token}
       });
       const parseRes = await response.json();
       
       // Set state so that you don't have to refresh to see the changes after deleting the book
       const newData = this.state.userData.filter(data => data.ub_id !== parseRes[0].ub_id);

       this.setState({userData: newData});
       
       
     } catch (error) {
       console.error(error.message);
     }
   }
   

  componentDidMount(){
    this.getName();
    this.getBooks();
  }
  render() {
   
    return (
        <div>
          <center>
            <h1>DashBoard {this.state.name}</h1>
            <button onClick = {this.logOut}>logout</button>
           {
             this.state.userData.map(book =>{
               
              return (
               <li key = {book.book_number}>
                 <Link to = {{pathname: "/results", 
                state:{
                  book: book,
                }
              }}><img src={book.link} alt ={book.title} width = "250" height = "250"></img></Link>
                 <button onClick={()=>this.deleteBook(book.book_number, book.user_id )}>Delete</button>
               </li>
             )
              }
             )
           }
          </center>
        </div>
    );
  }
}

export default UserProfile;

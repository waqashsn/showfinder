import React from 'react';
import Search from './components/Search';
import Show from './components/Show';
import SearchResults from './components/SearchResults';
import ShowModal from './components/ShowModal';

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleDetails = this.handleDetails.bind(this);
    this.handleCloseDetails = this.handleCloseDetails.bind(this);
    this.state = {
      keyword: undefined,
      shows: [],
      error: undefined,
      showmodal: undefined
      
    }
  }

  handleSearch(searchKeyword) {
    const apiUrl = 'https://api.tvmaze.com/search/shows?q=' + encodeURI(searchKeyword);
    fetch(apiUrl)
    .then((response) => response.json())
    .then((searchResults) => {
      if(searchResults.length > 0){
        console.log("Keyword: ", searchKeyword);
        console.log(searchResults);
        this.setState(() => {
          return {
              keyword: searchKeyword,
              shows: searchResults
            }
        })
      }
    }) 
  }

  handleDetails(showdata){
    if(!!showdata){
      this.setState(()=> {
        return {
          showmodal: showdata
        }
      })
    }

  }

  handleCloseDetails(){
    this.setState(()=>{
      return {
        showmodal: undefined
      }
    })
  }


  // componentDidMount() {
  //   const apiUrl = 'http://api.tvmaze.com/search/shows?q=' + encodeURI(this.state.keyword);
  //   fetch(apiUrl)
  //   .then((response )=> response.json())
  //   .then((searchResults) =>  {
  //     if(searchResults.length > 0){
  //       this.setState(() => {
  //           console.log("KEYWORD: ", encodeURI(this.state.keyword));
  //           console.log(searchResults);
  //           return {
  //             shows: searchResults
  //           }
  //       })

  //     } else {
  //       this.setState(() => {
  //         return {
  //           error: "No movies found with that keyword"
  //         }
  //       })
  //     }
        
  //   }); 
  // }

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        {this.state.shows.length > 0 ? <SearchResults searchResults={this.state.shows} handleDetails={this.handleDetails} /> : <p>No</p>}
        <ShowModal ShowModal={this.state.showmodal} handleCloseDetails={this.handleCloseDetails} />
      </div>
    )
    // if (this.state.error) {
    //   return (
    //     <p>Error: No movies found</p>
    //   )
    // } else {
    //   return (
    //     <div>
    //       {this.state.shows.length > 0 && this.state.shows.map((showObj) => <p>{showObj.show.name}</p>)}
    //     </div>
    //   );
    // }
  }

}

export default App;

// class Counter extends React.Component {
  
//   constructor(props) {
//     super(props);
//     this.handleReset = this.handleReset.bind(this);
//     this.handleIncrement = this.handleIncrement.bind(this);
//     this.handleDecrement = this.handleDecrement.bind(this);
//     this.state = {
//       count: 0
//     }
//   }

//   handleIncrement() {
//     this.setState((preState)=>{
//       return {
//         count: preState.count + 1
//       }
//     })
//   }

//   handleDecrement() {
//     this.setState((preState)=>{
//       return {
//         count: preState.count - 1
//       }
//     })
//   }

//   handleReset() {
//     this.setState(() => {
//       return {
//         count: 0
//       }
//     })
//   }

//   render() {
//     console.log(this.state)
//     return (
//       <div>
//         <h1>Count:{this.state.count}</h1>
//         <button onClick={this.handleIncrement}>+1</button>
//         <button onClick={this.handleDecrement}>-1</button>
//         <button onClick={this.handleReset}>Reset</button>
//       </div>
//     );
//   }
// }




// export default Counter;
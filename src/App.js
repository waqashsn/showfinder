import React from 'react';
import Show from './components/Show';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      keyword: this.props.keyword,
      shows: [],
      error: undefined
      
    }
  }

  componentDidMount() {
    const apiUrl = 'http://api.tvmaze.com/search/shows?q=' + encodeURI(this.props.keyword);
    fetch(apiUrl)
    .then((response )=> response.json())
    .then((searchResults) =>  {
      if(searchResults.length > 0){
        this.setState(() => {
            console.log(encodeURI(this.props.keyword));
            return {
              shows: searchResults
            }
        })

      } else {
        this.setState(() => {
          return {
            error: "No movies found with that keyword"
          }
        })
      }
        
    }); 
  }

  render() {
    if (this.state.error) {
      return (
        <p>Error: No movies found</p>
      )
    } else {
      return (
        <div>
          {this.state.shows.length > 0 && this.state.shows.map((showObj) => <p>{showObj.show.name}</p>)}
        </div>
      );
    }
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
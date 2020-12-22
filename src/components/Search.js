import React from 'react';
import { connect } from 'react-redux';
import { getShowsAsync } from '../actions/showsActions';

const Search = (props) => {
    return (
        <div className="input-wrapper">
            <form onSubmit={(e) => {
                e.preventDefault();
                props.dispatch(getShowsAsync(e.target.elements.search_keyword.value.trim()))
            }}>
                <input type="text" placeholder="Search..." name="search_keyword" />
                {/* <button>Search</button> */}
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        keyword: state.keyword
    }
}

export default connect(mapStateToProps)(Search);

// class Search extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleSearchSubmit = this.handleSearchSubmit.bind(this);

//     }

//     handleSearchSubmit(e) {
//         e.preventDefault();
//         const keyword = e.target.elements.search_keyword.value.trim();
//         this.props.handleSearch(keyword);
//     }

//     render() {
//         return (
//             <div className="input-wrapper">
//                 <form onSubmit={this.handleSearchSubmit}>
//                     <input type="text" placeholder="Search..." name="search_keyword" />
//                     {/* <button>Search</button> */}
//                 </form>
//             </div>
//         );
//     }

// }


// const Search = (props) => {
//     return (
//         <div>
//             <form>
//                 <input type="text" name="search_keyword" />
//                 <button type="submit" onClick={this.handleSearchSubmit}>Search</button>
//             </form>
//         </div>
//     )
// }
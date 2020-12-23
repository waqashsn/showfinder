import React from 'react';
import { connect } from 'react-redux';
import { displayShow } from '../actions/showsActions';

const Show = (props) => {
    return (
        <div onClick={() => props.dispatch(displayShow(props.show))} className="flex_container__item">
            <div className="card">
                {/* <p>{props.show.name}</p> */}
                <div className="card_left">
                    {props.show.image ? <img src={props.show.image.medium} alt={props.show.name} /> : <span></span>}

                </div>
                <div className="card_right">
                    <h1>{props.show.name}</h1>
                    <div className="card_right__details">
                        <ul>
                            {props.show.genres.map((genre) => <li key={genre}>{genre}</li>)}
                        </ul>
                        <div className="card_right__extradetails">
                            <ul>
                                <li key="premiered">
                                    Premiered: {props.show.premiered}
                                </li>
                                <li key="status">
                                    Status: {props.show.status}
                                </li>
                            </ul>

                        </div>

                        <div className="card_right__summary">
                            {props.show.summary ? <p>{props.show.summary.substr(0, 220).replace(/<\/?[^>]+(>|$)/g, "")} ...</p> : <p>No summary available.</p>}
                            <a onClick={() => props.dispatch(displayShow(props.show))}>Details</a>
                        </div>
                        {/* <div className="card_right__button">
                            <a>Details</a>
                        </div> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        show: ownProps.show
    }
}

export default connect(mapStateToProps)(Show);

// class Show extends React.Component{

//     constructor(props){
//         super(props);
//         this.handleDetailsModal = this.handleDetailsModal.bind(this);
//     }

//     handleDetailsModal(e){
//         e.preventDefault();
//         this.props.handleDetails(this.props.show)
//     }

//     render(){
//         return (
//         <div onClick={this.handleDetailsModal} className="flex_container__item">
//             <div className="card">
//                 {/* <p>{props.show.name}</p> */}
//                 <div className="card_left">
//                     {this.props.show.image ? <img src={this.props.show.image.medium} alt={this.props.show.name} /> : <span></span>}

//                 </div>
//                 <div className="card_right">
//                     <h1>{this.props.show.name}</h1>
//                     <div className="card_right__details">
//                         <ul>
//                             {this.props.show.genres.map((genre)=> <li>{genre}</li>)}
//                         </ul>
//                         <div className="card_right__extradetails">
//                             <ul>
//                                 <li key="premiered">
//                                     Premiered: {this.props.show.premiered}
//                                 </li>
//                                 <li key="status">
//                                     Status: {this.props.show.status}
//                                 </li>
//                             </ul>

//                         </div>

//                         <div className="card_right__summary">
//                             { this.props.show.summary ? <p>{this.props.show.summary.substr(0, 220).replace(/<\/?[^>]+(>|$)/g, "")} ...</p> : <p>No summary available.</p>}
//                             <a onClick={this.handleDetailsModal}>Details</a>
//                         </div>
//                         {/* <div className="card_right__button">
//                             <a>Details</a>
//                         </div> */}

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
//     }
// }

// const Show = (props) => {
//     console.log(props.show)
//     return (
//         <div className="flex_container__item">
//             <div className="card">
//                 {/* <p>{props.show.name}</p> */}
//                 <div className="card_left">
//                     {props.show.image ? <img src={props.show.image.medium} alt={props.show.name} /> : <span></span>}

//                 </div>
//                 <div className="card_right">
//                     <h1>{props.show.name}</h1>
//                     <div className="card_right__details">
//                         <ul>
//                             {props.show.genres.map((genre)=> <li>{genre}</li>)}
//                         </ul>
//                         <div className="card_right__extradetails">
//                             <ul>
//                                 <li>
//                                     Premiered: {props.show.premiered}
//                                 </li>
//                                 <li>
//                                     Status: {props.show.status}
//                                 </li>
//                             </ul>

//                         </div>

//                         <div className="card_right__summary">
//                             { props.show.summary ? <p>{props.show.summary.substr(0, 220).replace(/<\/?[^>]+(>|$)/g, "")} ...</p> : <p>No summary available.</p>}
//                             <a>Details</a>
//                         </div>
//                         {/* <div className="card_right__button">
//                             <a>Details</a>
//                         </div> */}

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// class Show extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             showId: this.props.showId,
//             title: undefined,
//             summaryTrimmed: undefined,
//             summaryFull: undefined,
//             premiered: undefined,
//             image: {
//                 medium: undefined,
//                 large: undefined
//             },
//             genres: [],
//             runtime: undefined,
//             status: undefined,
//             officialSite: undefined,
//             network: undefined,

//         }
//     }

//     getShortSummary(){
//         console.log(this);
//         return this.state.summary.substr(0, 100)
//     }

//     componentDidMount() {
//        const apiUrl = 'http://api.tvmaze.com/shows/' + this.props.showId;
//        fetch(apiUrl)
//         .then((response )=> response.json())
//         .then((data) =>  {
//             this.setState(() => {
//                 // console.log(data);
//                 return {
//                     title: data.name,
//                     summaryTrimmed: data.summary.substr(0, 240) + "...",
//                     summaryFull: data.summary,
//                     premiered: data.premiered,
//                     image: {
//                         medium: data.image.medium,
//                         large: data.image.large
//                     },
//                     genres: data.genres,
//                     runtime: data.runtime,
//                     status: data.status,
//                     officialSite: data.OfficialSite,
//                     network: data.network.name
//                 }
//             })
//         });

//     }

//     render() {
//         return (
//             <div className="card">
//                 <div className="card_left">
//                     <img src={this.state.image.medium} alt={this.state.title} />
//                 </div>
//                 <div className="card_right">
//                     <h1>{this.state.title}</h1>
//                     <div className="card_right__details">
//                         <ul>
//                             {this.state.genres.map((genre)=> <li>{genre}</li>)}
//                         </ul>
//                         <div className="card_right__extradetails">
//                             <ul>
//                                 <li>
//                                     Premiered: {this.state.premiered}
//                                 </li>
//                                 <li>
//                                     Status: {this.state.status}
//                                 </li>
//                             </ul>

//                         </div>

//                         <div className="card_right__summary">
//                             <p>{this.state.summaryTrimmed}</p>
//                         </div>

//                     </div>
//                 </div>
//             </div>

//         );
//     }
// }

// export default Show;
// import React from 'react';

const Show = (props) => {
    return (
            <div className="card">
                <div className="card_left">
                    <img src={this.props.image.medium} alt={this.props.title} />
                </div>
                <div className="card_right">
                    <h1>{this.props.title}</h1>
                    <div className="card_right__details">
                        <ul>
                            {this.props.genres.map((genre)=> <li>{genre}</li>)}
                        </ul>
                        <div className="card_right__extradetails">
                            <ul>
                                <li>
                                    Premiered: {this.props.premiered}
                                </li>
                                <li>
                                    Status: {this.props.status}
                                </li>
                            </ul>

                        </div>
                        
                        <div className="card_right__summary">
                            <p>{this.props.summaryTrimmed}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}

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

export default Show;
import React, { Component } from "react";
import "../App.css";

class TourData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readMore: false,
    };
    this.toggleReadMore = this.toggleReadMore.bind(this);
  }

  toggleReadMore() {
    this.setState({ readMore: !this.state.readMore });
  }
  render() {
    const { id, name, price, image, info, removeTour } = this.props;
    return (
      <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price"> $ {price}</h4>
          </div>
          <p>
            {this.state.readMore ? info : `${info.substring(0, 200)}...`}

            <button onClick={this.toggleReadMore}>
              {this.state.readMore ? "show less" : "read more"}
            </button>
          </p>
          <button className="delete-btn" onClick={()=>removeTour(id)}>not interested</button>
        </footer>
      </article>
    );
  }
}

// function TourData({id, image, info, price, name}){

//     return(
//         <article className="single-tour">
//             <img src={image} alt={name} />
//             <footer>
//                 <div className="tour-info">
//                     <h4>{name}</h4>
//                     <h4 className="tour-price"> $ {price}</h4>
//                 </div>
//                 <p>
//                     {`${info.substring(0,200)}...`}
//                     <button>Readmore</button>
//                     {/* {info} */}
//                 </p>
//                 <button className="delete-btn">not interested</button>
//             </footer>

//         </article>
//     )
// }

export default TourData;

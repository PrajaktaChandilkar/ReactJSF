import React, { Component } from "react";
import { FaAngleLeft, FaAngleRight, FaQuoteRight, FaRegGrinTongueWink } from "react-icons/fa";
import "../App.css";
import people from "./data";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.randomPerson = this.randomPerson.bind(this)
    this.previousPerson = this.previousPerson.bind(this)
    this.nextPerson = this.nextPerson.bind(this)
  }


  previousPerson = () =>{
      let personIndex = this.state.index - 1
      if(personIndex < 0){
          personIndex= this.people.length - 1
      }
      this.setState({index:personIndex})
  }

  nextPerson = () =>{
      let personIndex = this.state.index + 1
      if(personIndex >= people.length ){
          personIndex = 0
      }
      this.setState({index:personIndex})
  }
  randomPerson = () =>{
      let randomIndex = Math.floor(Math.random()*people.length)
      if(randomIndex === this.state.index){
          randomIndex+=1
      }
      if(randomIndex >= people.length){
          randomIndex = 0
      }
      this.setState({index:randomIndex})
  }
  render() {
    const { name, job, image, text, id } = people[this.state.index];
    return (
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className=" author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={this.previousPerson}>
            <FaAngleLeft />
          </button>
          <button className="next-btn" onClick={this.nextPerson}>
            <FaAngleRight />
          </button>
        </div>
        <button className="surprise-me" onClick={this.randomPerson}>surprise me</button>
      </article>
    );
  }
}
export default Reviews;

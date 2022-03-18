import React, { Component } from "react";
import Data from "./../Resources/Data";
import List from "./List";
import "./../App.css";
import people from "./../Resources/Data";

class Birthday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: Data,
      loading: true,
    };
    this.clearAll = this.clearAll.bind(this);
    this.removeThisPerson = this.removeThisPerson.bind(this);
  }
  //for loading function with dealy 4sec
  async componentDidMount() {
    const readDataPeople = await this.readData();
    if (readDataPeople.length) {
      this.setState({ people: readDataPeople, loading: false });
    }
  }
  async readData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Data);
      }, 4000);
    });
  }

  clearAll() {
    this.setState({ people: [] });
  }

  removeThisPerson = (id) => {
    this.setState({
      people: this.state.people.filter((peeps) => peeps.id !== id),
    });
  };
  render() {
    return (
      <main>
        <section className="container">
          {this.state.loading ? (
            <h3>loading...</h3>
          ) : (
            <>
              <h3>{this.state.people.length} Todays birthday</h3>
              <List
                people={this.state.people}
                removeThisPerson={this.removeThisPerson}
              />
              <button onClick={this.clearAll}>Clear All</button>
            </>
          )}
        </section>
      </main>
    );
  }
}

export default Birthday;

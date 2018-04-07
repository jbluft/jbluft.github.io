import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    picks: [],
    count: 0
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = (id) => {

    
    
    // console.log(this.state);

    if (this.state.picks.includes(id)) {
      this.setState({count: 0, picks: []})
      } else {
      this.setState({picks: [...this.state.picks, id]})
      this.setState({count: this.state.count + 1})
      }
        

  
    function shuffle(arra1) {
        let ctr = arra1.length;
        let temp;
        let index;
    
        // While there are elements in the array
        while (ctr > 0) {
    // Pick a random index
            index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
            ctr--;
    // And swap the last element with it
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
    }
    // console.log(shuffle(friends));
    // shuffle(friends);

    this.setState({ friends: shuffle(friends)});
 
};




  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
  <Wrapper>
        <Title>Mega Man Shuffler</Title>
        <p>Score: { this.state.count }</p> 

        {this.state.friends.map(friend => (
          <FriendCard
            handleIncrement={this.handleIncrement}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;

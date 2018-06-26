import React from 'react';
import './App.css';
import Card from "./components/Card";
import gossipGirl from "./gossipGirl.json";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import NavBar from "./components/NavBar";


class App extends React.Component {
  state = {
    gossipGirl: gossipGirl,
    count: 0,
    lost: 0,
    clicked: false,
  };


  handleClick = () => {
    // We always use the setState method to update a component's state
    if (this.setState.clicked === false) {
      console.log("you lose")
    }
    else {
      this.setState({ count: this.state.count + 1 });
      this.setState({ checked: !this.state.checked })
    }
    this.shuffleCards;
  };


  // Fisher-Yates / Durstenfeld Shuffle algorithm
  //this doesn;t shuffle the cards =()
shuffleCards =() =>{
  const gossipGirlArray = this.state.gossipGirls;
  gossipGirlArray.sort(function(a, b) {
    return 0.5 - Math.random();
  });
  this.setState({
    gossipGirls: gossipGirlArray
  });

}

  render() {
    return <div>
        <Header />
        <NavBar>
          <span className="card-body">Click Count: {this.state.count}</span>
        <span className="card-body">Lost: {this.state.lost}</span>

        <GameBoard>
          
            {this.state.gossipGirl.map(gossipGirl => (
              <span onClick= {this.handleClick}>
              <Card
                key={gossipGirl.id}
                id ={gossipGirl.id}
                name={gossipGirl.name}
                image={gossipGirl.image}
                information={gossipGirl.information}
                actor={gossipGirl.actor}
              />
              </span>
        
            ))}
          
          </GameBoard>
        </NavBar>
      </div>;
  }
}


export default App;

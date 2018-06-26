import React from 'react';
import './App.css';
import Card from "./components/Card";
import gossipGirl from "./gossipGirl.json";
import GameBoard from "./components/GameBoard";
import NavBar from "./components/NavBar";


// const App = () => (
//   <div>
//     <GameBoard/>
//     <Card
//       name={gossipGirl[0].name}
//       image={gossipGirl[0].image}
//       information={gossipGirl[0].information}
//       actor={gossipGirl[0].actor}
//     />
//     <Card
//       name={gossipGirl[1].name}
//       image={gossipGirl[1].image}
//       information={gossipGirl[1].information}
//       actor={gossipGirl[1].actor}
//     />
//     <Card
//       name={gossipGirl[2].name}
//       image={gossipGirl[2].image}
//       information={gossipGirl[2].information}
//       actor={gossipGirl[2].actor}
//     />
//     <Card
//       name={gossipGirl[3].name}
//       image={gossipGirl[3].image}
//       information={gossipGirl[3].information}
//       actor={gossipGirl[3].actor}
//     />
//     <Card
//       name={gossipGirl[4].name}
//       image={gossipGirl[4].image}
//       information={gossipGirl[4].information}
//       actor={gossipGirl[4].actor}
//     />
//     <Card
//       name={gossipGirl[5].name}
//       image={gossipGirl[5].image}
//       information={gossipGirl[5].information}
//       actor={gossipGirl[5].actor}
//     />
    
//   </div>
// )


class App extends React.Component {
  state = {
    gossipGirl: gossipGirl,
    message: "Click an image to begin"
  }


render() {
  return (
    <div>
      <NavBar>
      <GameBoard>
        {this.state.gossipGirl.map(gossipGirl => (
          <Card
            key={gossipGirl.id}
            image={gossipGirl.image}
            information={gossipGirl.information}
            actor={gossipGirl.actor}


            handleClick={this.handleClick}
          />
        ))}
      </GameBoard>
      </NavBar>
    </div>
  );
}
}
export default App;

import React from "react";
import "../styles/index.scss";

export default class GameXO extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0
    };
    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 8]
    ];
  }

  isWinner = () => {
    let s = this.state.count % 2 === 0 ? "X" : "O";
    for (let i = 0; i < 8; i++) {
      let line = this.winnerLine[i];
      if (
        this.state.squares[line[0]] === s &&
        this.state.squares[line[1]] === s &&
        this.state.squares[line[2]] === s
      ) {
        alert(s + " Win");
      }
    }
  };

  clickHandler = event => {
    let data = event.target.getAttribute("data");
    let currentSquares = this.state.squares;
    if (currentSquares[data] === null) {
      currentSquares[data] = this.state.count % 2 === 0 ? "X" : "O";
      this.setState({ count: this.state.count + 1 });
      this.setState({ squares: currentSquares });
    } else {
      alert("Промах");
    }
    this.isWinner();
  };

  resetGame = () => {
    this.setState({ squares: Array(9).fill(null) });
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="gameXO">
        <div className="blockGame" onClick={this.clickHandler} data="0">
          {this.state.squares[0]}
        </div>
        <div className="blockGame" onClick={this.clickHandler} data="1">
          {this.state.squares[1]}
        </div>
        <div className="blockGame" onClick={this.clickHandler} data="2">
          {this.state.squares[2]}
        </div>
        <div className="blockGame" onClick={this.clickHandler} data="3">
          {this.state.squares[3]}
        </div>
        <div className="blockGame" onClick={this.clickHandler} data="4">
          {this.state.squares[4]}
        </div>
        <div className="blockGame" onClick={this.clickHandler} data="5">
          {this.state.squares[5]}
        </div>
        <div className="blockGame" onClick={this.clickHandler} data="6">
          {this.state.squares[6]}
        </div>
        <div className="blockGame" onClick={this.clickHandler} data="7">
          {this.state.squares[7]}
        </div>
        <div className="blockGame" onClick={this.clickHandler} data="8">
          {this.state.squares[8]}
        </div>
        <button className="resetGame" onClick={this.resetGame}>
          Reset
        </button>
      </div>
    );
  }
}

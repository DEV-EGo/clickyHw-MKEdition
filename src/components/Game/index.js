import React, { Component } from "react";
import Card from "../Card";
import Data from "../../fighter.json";
import Nav from "../Navbar";
import Jumbotron from "../Jumbotron";
import './style.scss';

class Game extends Component {

    state = {
        score: 0,
        highScore: 0,
        Data,
        clickedList: []
    }

    componentDidMount() {
        const { Data } = this.state;
        this.RadomizeCards(Data);
    }

    handleClick = (id) => {
        const { score, clickedList, Data, highScore } = this.state;
        this.RadomizeCards(Data)
        const ClickedOn = clickedList.includes(id);
        if (ClickedOn) {
            const bestScore = Math.max(score, highScore)
            this.resetGame(bestScore);
        } else {
            const newScore = score + 1;
            this.setState({
                score: score + 1,
                clickedList: [...clickedList, id]
            })
            if (newScore === Data.length)
                this.resetGame(newScore);
        }
    }

    resetGame = highScore => {
        this.setState({
            score: 0,
            clickedList: [],
            highScore: highScore
        })
    }
    // stole this snippet from stackoverflow
    RadomizeCards = (array) => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        this.setState({
            cardData: [...array]
        })
    }

    render() {
        return (
            <div>
                <Nav
                    primaryHeadingText="Score:"
                    primaryHeadingValue={this.state.score}
                    secondaryHeadingText="High Score:"
                    secondaryHeadingValue={this.state.highScore}
                />
                <Jumbotron />
                <div class="cards">
                    {this.state.Data.map((card) => (
                        <Card
                            name={card.name}
                            image={card.image}
                            key={card.id}
                            id={card.id}
                            handleClick={this.handleClick}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Game;
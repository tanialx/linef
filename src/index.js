import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './board.js'
import Score from './score';

class Game extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            score: 0
        }
        this.increaseScore = this.increaseScore.bind(this)
    }

    increaseScore(incr) {
        this.setState({ score: this.state.score + incr })
    }

    render() {
        return (
            <div className="game">
                <div>
                    <div className="score-board">
                        <span>Score: </span>
                        <Score score={this.state.score} />
                    </div>
                    <Board w='9' h='9'  score_incr={this.increaseScore} />
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

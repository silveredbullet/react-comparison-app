import React, { Component } from 'react';

class Judging extends Component {
  render() {
      var isPlayer1Ready= !!Object.keys(this.props.player2).length;
      var isPlayer2Ready = !!Object.keys(this.props.player1).length;
      var playersReady = isPlayer1Ready && isPlayer2Ready

      var win;
        if (this.props.player1.followers > this.props.player2.followers) {
          win = 'Player1 Obliterated Player2!'
        } else if (this.props.player1.followers == this.props.player2.followers) {
         win = "It's a tie!"
       } else {
          win = 'Player2 Slaughtered Player1!'
      }

    return (
  /*{condition ? do something : do else}*/
      <div>
        {playersReady ? <p>{win}</p> : null}
      </div>
    )
  }
}


export default Judging;

import React, { Component } from 'react';
import { Row, Col, CardPanel } from 'react-materialize';
//Deconstruct for the curly brackets above

class PlayerProfile extends Component {
  render() {
    return (

        <CardPanel className="teal lighten-4 black-text" >
            <img src={this.props.player_data.avatar_url} width='100%' />
            <p>{this.props.player_data.name}</p>
            <p>{this.props.player_data.bio}</p>
            <p>{this.props.player_data.public_repos}</p>
            <p>{this.props.player_data.followers}</p>
        </CardPanel>

    )
  }
}

export default PlayerProfile;

import React from 'react';

class CharacterCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            characters: []
        }


    }

    render() {
        return (
            <div className="charater-card padding-10 card-responsive">
                <img src={this.props.data.image} alt={`${this.props.data.name}'s picture`} />
                <div className="character-card-overlay">
                    <h3>{this.props.data.name}</h3>
                    <p>
                        id - {this.props.data.id}
                    </p>
                </div>
                <p>
                    <span>Status</span>
                    <span className="character-card-details">{this.props.data.status}</span>
                </p>
                <p>
                    <span>Species</span>
                    <span className="character-card-details">{this.props.data.species}</span>
                </p>
                <p>
                    <span>Gender</span>
                    <span className="character-card-details">{this.props.data.gender}</span>
                </p>
                <p>
                    <span>Origin</span>
                    <span className="character-card-details">{this.props.data.origin.name}</span>
                </p>
                <p>
                    <span>Last Location</span>
                    <span className="character-card-details">{this.props.data.location.name}</span>
                </p>

            </div>
        )
    }


}

export default CharacterCard;
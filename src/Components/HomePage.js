import React from 'react';
import '../App.css';
import FilterMenu from './FilterMenu/FilterMenu'
import Characters from './CharacterContainer/characters'


class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterConfig: {}
        }
    }

    handleFilterClick(filterConfig) {
        this.setState({ filterConfig })
    }

    render() {
        return (
            <div className="app-content">

                <aside className="aside">
                    <FilterMenu handleFilterClick={this.handleFilterClick.bind(this)} />
                </aside>
                <section className="characters-container">
                    <Characters filterConfig={this.state.filterConfig} />
                </section>

            </div>
        );
    }

}

export default HomePage;

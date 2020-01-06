import React from 'react';
import axios from 'axios'
import CharacterCard from './characterCard'
class Characters extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            characters: [],
            filterConfig: {}
        }


    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return { filterConfig: nextProps.filterConfig }
    }




    componentDidMount() {
        axios.get('https://rickandmortyapi.com/api/character/').then(res => {
            this.setState({
                characters: res.data.results
            })
        })
    }

    processFilteredData(data, filterConfig) {
        if (filterConfig.sortingOrder !== '0') {
            data.sort((a, b) => filterConfig.sortingOrder === '1' ? a.id - b.id : b.id - a.id)
        }
        if (filterConfig.genderFilter) {
            let activeGender = Object.keys(filterConfig.genderFilter)
                .filter(key => filterConfig.genderFilter[key])
                .map(element => element.toLowerCase())

            if (activeGender && activeGender.length > 0) {
                data = data.filter(element => activeGender.includes(element.gender.toLowerCase()))

            }

        }


        if (filterConfig.speciesFilter) {

            let activeSpecies = Object.keys(filterConfig.speciesFilter)
                .filter(key => filterConfig.speciesFilter[key])
                .map(element => element.toLowerCase())
            console.log(data)
            if (activeSpecies && activeSpecies.length > 0) {
                data = data.filter((element) => {
                    if (activeSpecies.includes(element.species.toLowerCase())) {
                        return true
                    } else
                        if (activeSpecies.includes('other') && (element.species.toLowerCase() != 'human' && element.species.toLowerCase() != 'mythology')) {
                            return true
                        } else {
                            return false
                        }
                })

            }

        }
        return data
    }


    render() {
        return (
            <div className="characters-card-container" >
                {
                    this.processFilteredData(this.state.characters, this.state.filterConfig).map(character => (
                        <CharacterCard data={character} key={character.id} ></CharacterCard>
                    ))
                }
            </div>

        )
    }

}

export default Characters;

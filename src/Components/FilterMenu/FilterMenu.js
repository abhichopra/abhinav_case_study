import React from 'react';

class FilterMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            genderFilter: {},
            speciesFilter: {},
            sortingOrder: 0
        }
    }

    handleFilterClick(type, e) {
        let speciesFilter = { ...this.state.speciesFilter };
        let sortingOrder = this.state.sortingOrder;
        let genderFilter = { ...this.state.genderFilter }

        if (type == 'Species') {
            speciesFilter[e.target.name] = e.target.checked;
            this.setState({
                speciesFilter
            })
        } else if (type == 'Gender') {
            genderFilter[e.target.name] = e.target.checked;
            this.setState({
                genderFilter
            })
        }
        else if (type == 'Sort') {
            sortingOrder = e.target.value
            this.setState({
                sortingOrder: e.target.value
            })
        }

        this.props.handleFilterClick({ genderFilter, speciesFilter, sortingOrder })

    }

    render() {
        return (
            <div >
                <h2 className="padding-10">
                    Filters
                </h2>
                <div className="filterBox">
                    <h3>
                        Species
                    </h3>
                    <p>
                        <label htmlFor="human">Human</label>
                        <input onChange={this.handleFilterClick.bind(this, 'Species')} type="checkbox" name="human" id="human" ></input>
                    </p>
                    <p>
                        <label htmlFor="mythology">Mythology</label>
                        <input onChange={this.handleFilterClick.bind(this, 'Species')} type="checkbox" name="mythology" id="mythology" ></input>
                    </p>
                    <p>
                        <label htmlFor="other">Other</label>
                        <input onChange={this.handleFilterClick.bind(this, 'Species')} type="checkbox" name="other" id="other" ></input>
                    </p>
                </div>

                <div className="filterBox">
                    <h3>
                        Gender
                    </h3>
                    <p>
                        <label htmlFor="male">Male</label>
                        <input onChange={this.handleFilterClick.bind(this, 'Gender')} type="checkbox" name="male" id="male" ></input>
                    </p>
                    <p>
                        <label htmlFor="female">Female</label>
                        <input onChange={this.handleFilterClick.bind(this, 'Gender')} type="checkbox" name="female" id="female" ></input>
                    </p>

                </div>
                <div className="filterBox">
                    <h3 >
                        Sort By Id
                    </h3>

                    <p>
                        <select aria-label='Sort' name="sort" onChange={this.handleFilterClick.bind(this, 'Sort')}>
                            <option selected={true} value='0'>None</option>
                            <option value='1'>Ascending </option>
                            <option value='-1'>Descending</option>
                            
                        </select>
                    </p>

                </div>
            </div>

        )
    }

}

export default FilterMenu;

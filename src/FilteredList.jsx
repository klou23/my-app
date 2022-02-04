import React, { Component } from 'react';
import { DropdownButton, Dropdown} from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            type: "all"
        };
    }
    // Sets the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({search: event.target.value.trim().toLowerCase()});
    }

    onSelect = (event) => {
        this.setState({type: event});
    }

    filterItem = (item) => {
        // Checks if the current search term is contained in this item
        if(item.name.toLowerCase().search(this.state.search) === -1) return false;
        if(this.state.type === "fruit" && item.type === "Vegetable") return false;
        return !(this.state.type === "vegetable" && item.type === "Fruit");
    }

    render() {
        return (
            <div className="filter-list">
                <h1>Produce Search</h1>
                <DropdownButton id="typeDropdown" title={"Type"} onSelect={this.onSelect}>
                    <Dropdown.Item eventKey="all">All</Dropdown.Item>
                    <Dropdown.Item eventKey="fruit">Fruit</Dropdown.Item>
                    <Dropdown.Item eventKey="vegetable">Vegetable</Dropdown.Item>
                </DropdownButton>
                <input type="text" placeholder="Search" onChange={this.onSearch} />
                <List items={this.props.items.filter(this.filterItem)} />
            </div>
        );
    }
}
export default FilteredList;
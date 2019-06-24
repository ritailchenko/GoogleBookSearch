import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup} from 'react-bootstrap';
import Gallery from '../Gallery';
import Logo from "../Logo";
import "./style.css";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            items: [],
            lastQuery: ''
        };
    }
    search() {
        const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
        fetch(`${BASE_URL}${this.state.query}`, {method: "GET"})
        .then(response => response.json())
        .then(json => {
            let {items} = json;
            this.setState({items});
            this.setState({lastQuery : this.state.query });
        });
    }

    render () {
        return (
            <div className = "global">
                <Logo />
                    <FormGroup>
                        <InputGroup>
                        <FormControl
                            type="text"
                            placeholder = "Search for a book"
                            onChange = { event => this.setState({query: event.target.value})}
                            onKeyPress = { event => {
                                if (event.key == "Enter"){
                                    this.search();
                                }
                            }} />
                            <InputGroup.Append onClick={() => this.search()}>
                                Search
                            </InputGroup.Append>
                        </InputGroup>
                    </FormGroup>
                    <Gallery items = {this.state.items}
                        query = {this.state.lastQuery}
                        />
            </div>
        )
    }
}

export default Search;

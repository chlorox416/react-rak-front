import React from 'react';
import { Form } from 'semantic-ui-react';

class Search extends React.Component {
    render() {
        return (
            <Form className="search">
                <Form.Field>
            <Form.Input inline type="text" name="searchTerm" placeholder="Search Here!" value={this.props.searchTerm} onChange={this.props.handleChange}/>
                </Form.Field>
            </Form>
        );
    }
}


export default Search;
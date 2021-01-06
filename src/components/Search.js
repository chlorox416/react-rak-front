import React from 'react';
import { Form, Divider } from 'semantic-ui-react';
import '../Styles/Search.css';

class Search extends React.Component {
    render() {
        return (
            <Form className="search">
               <Divider horizontal>Search Here</Divider>
                <Form.Field>
            <Form.Input inline type="text" name="searchTerm" placeholder="Any Word..." value={this.props.searchTerm} onChange={this.props.handleChange}/>
                </Form.Field>
            </Form>
        );
    }
}


export default Search;
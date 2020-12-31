import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div className="search">
            <input type="text" name="searchTerm" placeholder="WHACK" value={this.props.searchTerm} onChange={this.props.handleChange}/>
          </div>
        );
    }
}


export default Search;
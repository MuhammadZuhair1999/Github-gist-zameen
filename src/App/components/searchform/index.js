import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchAllGists} from '../../redux/actions/allgists';
import './style.css';

class SearchFormInner extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    handleSubmit(evt) {
        evt.preventDefault();
        let username = this.inputRef.current.value.trim();

        //if user does not type anything
        if(username.length === 0) {
            return;
        }
        //dispatch
        this.props.fetchAllGists(username);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="searchform">
                <label />
                <input 
                  className="form-control" 
                  type="text" 
                  placeholder="Search a user: (e.g: tan9)" //this user has gists and forks in his 3rd gist
                  ref={this.inputRef}/>
             </form>
            
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllGists: (username) => {
            dispatch(fetchAllGists(username));
        } 
    }
}

let SearchForm = connect(null, mapDispatchToProps)(SearchFormInner);
export default SearchForm;

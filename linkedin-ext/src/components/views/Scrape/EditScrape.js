import React, { Component } from 'react';
import { connect } from "react-redux";
import { getField } from "../../../actions/formFieldActions.js";

class EditScrape extends Component {

    state = {
        form: this.props.formToUpdate,
        fields: []
    }

    async componentDidMount() {
        // await this.props.getField(this.props.formToUpdate.form_id);
        this.setState({ fields: this.props.fieldsToUpdate });
    }



    render() {
        console.log(this.props.formToUpdate);
        return (
            <div>
                <header>
                <span onClick={() => this.props.history.push("/scrape")}> Cancel </span>
                </header>
                <h3>Resume: </h3>
                <footer>
                    <button>Export</button>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // formToUpdate: state.formReducer.formToUpdate.form,
        fieldsToUpdate: state.formReducer.fieldsToUpdate
    };
};


export default connect(
    mapStateToProps, {getField})(EditScrape);
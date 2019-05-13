import React, { Component } from 'react';

class EditScrape extends Component {

    state = {
        email: {
            recipients: [],
            sender: '',
            subject: '',
            content: {
                name: '',
                jobTitle: '',
                location: ''
            }
        }
    }

    render() {
        return (
            <div>
                <header>
                <span onClick={() => this.props.history.push("/scrape")}> Cancel </span>
                </header>
                <h3>Resume: </h3>
                <footer>
                    <button>Export</button>
                    <button>Submit</button>
                </footer>
            </div>
        )
    }
}

export default EditScrape
import React, { Component } from 'react';

class EditScrape extends Component {

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
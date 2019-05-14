import React, { Component } from 'react'

class EditScrape extends React.Component {

    render() {
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

export default EditScrape;
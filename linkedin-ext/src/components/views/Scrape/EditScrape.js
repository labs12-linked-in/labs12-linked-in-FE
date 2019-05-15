import React, { Component } from "react";
import { connect } from "react-redux";

class EditScrape extends Component {
  state = {
    fields: [],
    scrapedFields: []
  };

  async componentDidMount() {
    await this.setState({ fields: this.props.fieldsToUpdate });
    this.state.fields.map((val, idx) => {
      this.setState(prevState => ({
        scrapedFields: [...prevState.scrapedFields, { text: "" }]
      }));
    });
  }

  handleChangeField = e => {
    let scrapedFields = [...this.state.scrapedFields];
    scrapedFields[e.target.dataset.id].text = e.target.value;
    this.setState({ scrapedFields }, () =>
      console.log(this.state.scrapedFields)
    );
  };

  export = e => {};

  render() {
    if (this.state.scrapedFields.length != this.state.fields.length) {
      return <div>Loading</div>;
    } else {
      return (
        <div>
          <header>
            <span onClick={() => this.props.history.push("/scrape")}>
              {" "}
              Cancel{" "}
            </span>
          </header>
          <h3>Resume: </h3>
          <form>
            {this.state.fields.map((val, idx) => {
              let nameId = `name-${idx}`;
              return (
                <div key={idx}>
                  <label htmlFor={nameId}>{`${
                    this.state.fields[idx].name
                  }`}</label>
                  <div>
                    <input
                      type="text"
                      name={nameId}
                      data-id={idx}
                      id={nameId}
                      value={this.state.scrapedFields[idx].text}
                      className="name"
                      onChange={this.handleChangeField}
                    />
                  </div>
                </div>
              );
            })}
            <div>
              <button onClick={e => this.export(e)}>Export</button>
            </div>
          </form>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    fieldsToUpdate: state.formReducer.fieldsToUpdate
  };
};

export default connect(
  mapStateToProps,
  null
)(EditScrape);

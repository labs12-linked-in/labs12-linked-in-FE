import React, { Component } from "react";
import axios from "axios";
import classes from "./NewDepartment.module.css";
import { Link } from "react-router-dom";

export default class newDepartment extends Component {
  state = {
    depInfo: {
      name: "",
      admin_email: "",
      supervisor_email: "",
      manager_email: "",
      director_email: "",
      vp_email: ""
    }
  };

  handleChanges = e => {
    this.setState({
      depInfo: {
        ...this.state.depInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  tryAdd = async e => {
    e.preventDefault();
    try {
      const result = await axios
        .post(
          `https://linkedinextension.herokuapp.com/api/departments/${localStorage.getItem(
            "id"
          )}`,
          this.state.depInfo,
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(res => {
          console.log(res);
          this.setState({
            depInfo: {
              name: "",
              admin_email: "",
              supervisor_email: "",
              manager_email: "",
              director_email: "",
              vp_email: ""
            }
          });
        });
      this.props.history.push("/dept");
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {};

  render() {
    return (
      <div className={classes.NewDepartment}>
        <div className={classes.TopPortion}>
          <div className={classes.Cancle}>
            <Link to={"/dept"}>
              <button>Cancel</button>
            </Link>
          </div>
        </div>

        <form>
          <input
            type="text"
            name="name"
            value={this.state.depInfo.name}
            onChange={this.handleChanges}
            placeholder="Insert Name Here, Required"
          />
          <input
            type="text"
            name="admin_email"
            value={this.state.depInfo.admin_email}
            onChange={this.handleChanges}
            placeholder="Insert Email Here, Required"
          />
          <input
            type="text"
            name="supervisor_email"
            value={this.state.depInfo.supervisor_email}
            onChange={this.handleChanges}
            placeholder="Insert Email Here"
          />
          <input
            type="text"
            name="manager_email"
            value={this.state.depInfo.manager_email}
            onChange={this.handleChanges}
            placeholder="Insert Email Here"
          />
          <input
            type="text"
            name="director_email"
            value={this.state.depInfo.director_email}
            onChange={this.handleChanges}
            placeholder="Insert Email Here"
          />
          <input
            type="text"
            name="vp_email"
            value={this.state.depInfo.vp_email}
            onChange={this.handleChanges}
            placeholder="Insert Email Here"
          />
          <div className={classes.Save}>
            <button onClick={this.tryAdd}>Save</button>
          </div>
        </form>
      </div>
    );
  }
}

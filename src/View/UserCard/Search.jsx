import React from "react";
import { Input, Select, AutoComplete } from "antd";
import "./Search.css";
import "antd/dist/antd.min.css";
import axios from "axios";
import "antd/dist/antd.css";
import Dashboard from "../dashboard/Dashboard";
import UserCard from "./UserCard";
import TimeLineCard from "./TimeLineCard";

export default class Search2 extends React.Component {
  constructor(props) {
    super(props);
    this.ac = React.createRef();
  }
  state = {
    fetchData: [],
    value: "",
    server: "timeline",
  };

  TimelineSearchResult = (timeline) => {
    if (timeline === "") {
      this.setState({ options: [] });
      return 0;
    }

    const ref = this;
    axios
      .get(
        "https://timino2.iran.liara.run/api/timeline/search?title=" +
          timeline
      )
      .then(function (response) {
        console.log(response.data.data);
        ref.setState({ fetchData: response.data.data });
      })
      .catch(function (error) {
        ref.setState({ fetchData: [] });
        console.log(error);
      });
  };

  UserSearchResult = (users) => {
    if (users === "") {
      this.setState({ options: [] });
      return 0;
    }

    const ref = this;
    axios
      .get(
        "https://timino2.iran.liara.run/api/user/search_suggestion?username=" +
          users
      )
      .then(function (response) {
        console.log(response.data.data);
        ref.setState({ fetchData: response.data.data });
      })
      .catch(function (error) {
        ref.setState({ fetchData: [] });
        console.log(error);
      });
  };

  onSearch = (e) => {
    if (this.state.server === "timeline") {
      this.TimelineSearchResult(e);
    } else {
      this.UserSearchResult(e);
    }
  };

  onSelect = (data) => {
    console.log("onSelect", data);
  };

  onChangeSelect = (value) => {
    console.log(value);
    this.setState({ server: value.value });
  };

  render() {
    return (
      <Dashboard className="search">
        <div className="search-body">
          <div>
            <Select
              labelInValue
              placement="topRight"
              onChange={(value) => this.onChangeSelect(value)}
              defaultValue="timeline"
              style={{ width: "100px" }}
            >
              <Select.Option value="timeline">Timeline</Select.Option>
              <Select.Option value="user">User</Select.Option>
            </Select>
          </div>
          <div>
            <AutoComplete
              dropdownClassName="autocompletedrpdwn"
              notFoundContent="not Found!"
              options={this.state.options}
              onSelect={(e) => {
                this.onSelect(e);
              }}
              onChange={(e) => {
                this.onSearch(e);
              }}
            >
              <Input.Search
                size="large"
                placeholder="input search ..."
                enterButton
                onSearch={(e) => this.onSearch(e)}
                allowClear
              />
            </AutoComplete>
          </div>
        </div>

        <div>
          <ul className="cards">
            {this.state.server !== "timeline" &&
              this.state.fetchData.map((data) => (
                <UserCard key={Math.random()} data={data} />
              ))}
            {this.state.server === "timeline" &&
              this.state.fetchData.map((data) => (
                <TimeLineCard key={Math.random()} data={data} />
              ))}
          </ul>
        </div>
      </Dashboard>
    );
  }
}

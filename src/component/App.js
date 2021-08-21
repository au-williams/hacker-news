import "./App.css";
import HistoryRecord from "../models/HistoryRecord";
import Logo from "../assets/logo_react.png";
import React, { Component } from "react";
import Results from "./Results";
import SearchSortBy from "../constants/SearchSortBy";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

class App extends Component {
  state = {
    isLoading: false,
    searchHistory: [],
    searchResults: [],
    searchSortBy: SearchSortBy.RELEVANCE,
    searchTerm: "",
  };

  handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    this.handleSearch();
  };

  handleSearch = () => {
    const isNullOrWhiteSpace =
      !this.state.searchTerm || !this.state.searchTerm.trim();

    if (isNullOrWhiteSpace) {
      // dont send empty data into the api
      this.setState({ searchResults: [] });
      return;
    }

    this.setState({
      isLoading: true,
      searchHistory: [
        ...this.state.searchHistory,
        new HistoryRecord(this.state.searchTerm, this.state.searchSortBy),
      ],
    });

    const input = `https://hn.algolia.com/api/v1/${this.state.searchSortBy}?tags=story&query=${this.state.searchTerm}`;

    fetch(input)
      .then((res) => res.json())
      .then((result) => {
        console.log(result.hits);
        this.setState({ isLoading: false, searchResults: result.hits });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  handleSearchSortByChange = (e) => {
    this.setState({
      searchSortBy: e.target.checked
        ? SearchSortBy.RELEVANCE
        : SearchSortBy.DATE,
    });
  };

  handleSearchTermChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    // this website is made to be ran online at https://austinwilliams.dev/hacker-news/
    // running from localhost will work fine, however the root path will not auto route
  
    const URLs = {
      root: `/hacker-news/`,
      search: `/hacker-news/search/`,
      history: `/hacker-news/history/`,
    };

    return (
      <Router>
        <div id="content">
          <nav>
            <img src={Logo}></img>
            <span>
              <strong>Hacker News</strong> Search App
            </span>
            <ul>
              [
              <li>
                {/* <Link to="/hacker-news/search">search</Link> */}
                <Link to={URLs.search}>search</Link>
              </li>
              |
              <li>
                <Link to={URLs.history}>history</Link>
              </li>
              ]
            </ul>
            <div>
              <strong>Made by:</strong>
              <a href="https://www.linkedin.com/in/auwilliams/">
                Austin Williams
              </a>
            </div>
          </nav>
          {/*
            The application architecture was designed to utilize the same results view
            to support future enhancements ... Such as searching through history items.
            For now make the history inputs read-only until that work has been defined.
          */}
          <Switch>
            <Route path={URLs.search}>
              <Results
                content={this.state.searchResults}
                isLoading={this.state.isLoading}
                isReadOnly={false}
                onSearchClick={this.handleSearch}
                onSearchKeyDown={this.handleKeyDown}
                onSearchSortByChange={this.handleSearchSortByChange}
                onSearchTermChange={this.handleSearchTermChange}
              />
            </Route>
            <Route path={URLs.history}>
              <Results content={this.state.searchHistory} isReadOnly={true} />
            </Route>
            <Redirect from={URLs.root} to={URLs.search} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

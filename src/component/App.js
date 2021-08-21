import "./App.css";
import HistoryRecord from "../models/HistoryRecord";
import Logo from "../assets/logo_react.png";
import React, { Component } from "react";
import ResultsRoute from "../constants/ResultsRoute";
import Results from "./Results";
import SearchSortBy from "../constants/SearchSortBy";

import {
  HashRouter,
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
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div id="content">
          <nav>
            <img src={Logo}></img>
            <span>
              <strong>Hacker News</strong> Search App
            </span>
            <ul>
              [
              <li>
                <Link to="/search">search</Link>
              </li>
              |
              <li>
                <Link to="/history">history</Link>
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
            <Route path="/search">
              <Results
                content={this.state.searchResults}
                isLoading={this.state.isLoading}
                isReadOnly={false}
                onSearchClick={this.handleSearch}
                onSearchKeyDown={this.handleKeyDown}
                onSearchSortByChange={this.handleSearchSortByChange}
                onSearchTermChange={this.handleSearchTermChange}
                pageRoute={ResultsRoute.SEARCH}
              />
            </Route>
            <Route path="/history">
              <Results
                content={this.state.searchHistory}
                isReadOnly={true}
                pageRoute={ResultsRoute.HISTORY}/>
            </Route>
            <Redirect from="/" to="/search" />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;

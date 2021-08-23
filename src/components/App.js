import "./App.css";
import React, { Component } from "react";
import Results from "./Results";
import ResultsRoute from "../constants/ResultsRoute";
import SearchSortBy from "../constants/SearchSortBy";
import HistoryRecord from "../models/HistoryRecord";
import GitHubBrandsIcon from "../assets/github-brands.svg";
import InfoCircleIcon from "../assets/info-circle-solid.svg";
import TimesCircleIcon from "../assets/times-circle-solid.svg";
import { HashRouter, Switch, Route, Link, Redirect, } from "react-router-dom";

class App extends Component {
  state = {
    hidePanel: false,
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
      // don't send empty data into the api
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
        this.setState({
          isLoading: false,
          searchResults: result.hits
        });
      })
      .catch((error) => {
        // todo <aw>: this should have an actual error message on screen
        console.error("Error:", error);
        this.setState({
          isLoading: false,
          searchResults: []
        });
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
      <HashRouter>
        {!this.state.hidePanel && (
          <div className="panel">
            <div className="header">
              <img src={InfoCircleIcon} alt="Info circle icon"/>
              <strong>Information</strong>
              <button onClick={() => this.setState({hidePanel: true})}>
                <img src={TimesCircleIcon} alt="Close icon" className="close"/>
              </button>
            </div>
            <div className="content">
              Hello! 👋 This web app is a small demo built with React JS and the <a href="https://hn.algolia.com/api">Hacker News Algolia API</a>. All code was written by me with styles inspired by the actual website. I'm not affiliated with Hacker News, nor did I use any of their source code. This project is available on <a href="https://github.com/au-williams/hacker-news">GitHub</a> along with its requirements. SVG icons are free to use with attribution to the free <a href="https://fontawesome.com/license">FontAwesome license</a>. Thanks!
            </div>
          </div>
        )}
        <div className="panel">
          <nav className="header">
            <a href="https://github.com/au-williams/hacker-news">
              <img src={GitHubBrandsIcon} alt="GitHub icon"/>
            </a>
            <strong>Hacker News </strong>
            <span>Search Demo</span>
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
            <span>
              {/* wrap in span to collapse together */}
              <strong>Made by: </strong>
              <a href="https://www.linkedin.com/in/auwilliams/">Austin Williams</a>
            </span>
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

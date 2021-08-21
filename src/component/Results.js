import "./App.css";
import React, { Component } from "react";
import SearchSortBy from "../constants/SearchSortBy";

// build elements based on the HistoryRecord data model
const GetHistoryElement = (record, key) => {
  const date = record.searchDate.toLocaleString();
  const sort =
    record.searchSortBy === SearchSortBy.RELEVANCE ? "relevance" : "date";

  return (
    <div>
      <div>{key + 1}.</div>
      <div>
        <div className="result-head">{record.searchTerm}</div>
        <div className="result-desc">{`${date} | Sorted by ${sort}`}</div>
      </div>
    </div>
  );
};

// build elements based on the HackerNews API object
const GetSearchElement = (record, key) => {
  const points = `${record.points} point${record.points === 1 ? "" : "s"}`;
  const comments = `${record.num_comments} comment${
    record.num_comments === 1 ? "" : "s"
  }`;

  return (
    <a href={`https://news.ycombinator.com/item?id=${record.objectID}`}>
      <div>{key + 1}.</div>
      <div>
        <div className="result-head">{record.title}</div>
        <div className="result-desc">{`${points} | ${comments}`}</div>
      </div>
    </a>
  );
};

class Results extends Component {
  render() {
    // substring(13) to remove the leading /hacker-news/ location path
    // see: https://austinwilliams.dev/hacker-news/ for a live version
    const route = window.location.pathname
      .substring(13)
      .replace("/", "")
      .toLowerCase();
    let element = null;

    if (this.props.isLoading) {
      element = <div>Fetching API results ...</div>;
    } else if (!this.props.content || !this.props.content.length) {
      element = <div>No {route} results!</div>;
    } else {
      element = this.props.content.map((record, key) =>
        route === "search"
          ? GetSearchElement(record, key)
          : GetHistoryElement(record, key)
      );
    }

    return (
      <>
        <div id="search-bar">
          <label>Search</label>
          <input
            disabled={this.props.isReadOnly}
            onChange={this.props.onSearchTermChange}
            onKeyDown={this.props.onSearchKeyDown}
          />
          <button
            disabled={this.props.isReadOnly}
            onClick={this.props.onSearchClick}
          >
            →
          </button>
          <label>
            <input
              defaultChecked="true"
              disabled={this.props.isReadOnly}
              onChange={this.props.onSearchSortByChange}
              type="checkbox"
            />
            Sort by relevance
          </label>
        </div>
        <div id="search-results">{element}</div>
      </>
    );
  }
}

export default Results;

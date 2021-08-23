import "./App.css";
import React, { Component } from "react";
import ResultsRoute from "../constants/ResultsRoute";
import SearchSortBy from "../constants/SearchSortBy";

// build elements based on the HistoryRecord data model
const GetHistoryElement = (record, key) => {
  const dateString = record.searchDate.toLocaleString();
  const sortString = record.searchSortBy === SearchSortBy.RELEVANCE ? "relevance" : "date";

  return (
    <div>
      <div>{key + 1}.</div>
      <div>
        <div className="result-head">{record.searchTerm}</div>
        <div className="result-desc">{`${dateString} | Sorted by ${sortString}`}</div>
      </div>
    </div>
  );
};

// build elements based on the HackerNews API object
const GetSearchElement = (record, key) => {
  const pointString = `${record.points} point${record.points === 1 ? "" : "s"}`;
  const commentString = `${record.num_comments} comment${record.num_comments === 1 ? "" : "s"}`;

  return (
    <a href={`https://news.ycombinator.com/item?id=${record.objectID}`}>
      <div>{key + 1}.</div>
      <div>
        <div className="result-head">{record.title}</div>
        <div className="result-desc">{`${pointString} | ${commentString}`}</div>
      </div>
    </a>
  );
};

class Results extends Component {
  render() {
    let element = null;

    if (this.props.isLoading) {
      element = <div>Fetching API results ...</div>;
    } else if (!this.props.content || !this.props.content.length) {
      element = <div>No {this.props.pageRoute} results!</div>;
    } else {
      element = this.props.content.map((record, key) =>
        this.props.pageRoute === ResultsRoute.SEARCH
          ? GetSearchElement(record, key)
          : GetHistoryElement(record, key)
      );
    }

    return (
      <div className="content">
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
      </div>
    );
  }
}

export default Results;

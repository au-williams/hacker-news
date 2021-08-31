import "./App.css";
import React from "react";
import ResultsRoute from "../constants/ResultsRoute";
import SearchSortBy from "../constants/SearchSortBy";

// build elements based on the HistoryRecord model
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

export default function Results(props) {
  const {
    content,
    isLoading,
    isReadOnly,
    onSearchClick,
    onSearchKeyDown,
    onSearchSortByChange,
    onSearchTermChange,
    pageRoute,
  } = props;

  const GetResultElement = () => {
    if (isLoading)
      return <div>Fetching API results ...</div>;
    else if (!content || !content.length)
      return <div>No {pageRoute} results!</div>;
    else
      return content.map((record, key) =>
        pageRoute === ResultsRoute.SEARCH
          ? GetSearchElement(record, key)
          : GetHistoryElement(record, key)
      );
  };

  return (
    <div className="content">
      <div id="search-bar">
        <label>Search</label>
        <input
          disabled={isReadOnly}
          onChange={onSearchTermChange}
          onKeyDown={onSearchKeyDown}
        />
        <button
          disabled={isReadOnly}
          onClick={onSearchClick}>
          →
        </button>
        <label>
          <input
            defaultChecked="true"
            disabled={isReadOnly}
            onChange={onSearchSortByChange}
            type="checkbox"
          />
          Sort by relevance
        </label>
      </div>
      <div id="search-results">{GetResultElement()}</div>
    </div>
  );
}

import "./App.css";
import React from "react";
import ResultsRoute from "../constants/ResultsRoute";
import SearchSortBy from "../constants/SearchSortBy";

// build elements based on the HistoryRecord model
const GetHistoryElement = (record, index) => {
  const dateString = record.searchDate.toLocaleString();
  const sortString = `Sorted by ${record.searchSortBy === SearchSortBy.RELEVANCE ? "relevance" : "date"}`;

  return (
    <div key={record.searchDate.getTime()}>
      <div>{index + 1}.</div>
      <div>
        <div className="result-head">{record.searchTerm}</div>
        <div className="result-desc">{`${dateString} | ${sortString}`}</div>
      </div>
    </div>
  );
};

// build elements based on the HackerNews API object
const GetSearchElement = (record, index) => {
  const pointString = `${record.points} point${record.points === 1 ? "" : "s"}`;
  const commentString = `${record.num_comments} comment${record.num_comments === 1 ? "" : "s"}`;

  return (
    <a key={record.objectID} href={`https://news.ycombinator.com/item?id=${record.objectID}`}>
      <div>{index + 1}.</div>
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
      return content.map((record, index) =>
        pageRoute === ResultsRoute.SEARCH
          ? GetSearchElement(record, index)
          : GetHistoryElement(record, index)
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

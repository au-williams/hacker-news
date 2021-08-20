export default class HistoryRecord {
    constructor(searchTerm, searchSortBy) {
        this.searchDate = new Date();
        this.searchTerm = searchTerm;
        this.searchSortBy = searchSortBy;
    }
}
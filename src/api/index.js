import { ITEMS_PER_PAGE } from '../global/constants/constants';

const postData =
  {
    page: 1,
    itemsPerPage: ITEMS_PER_PAGE,
    filters: [{
      type: "all",
      values: [],
    }]
  };
  // filters: [{type: "all", values: ["1548"]}]

export default class API {
  static buildRequestOptions = (pageIndex, searchString) => {
    return {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        page: pageIndex || 1,
        itemsPerPage: postData.itemsPerPage,
        filters: [{
          type: "all",
          values: ([searchString || '']),
        }],
      }),
    };
  }

  static fetchData = (pageIndex, searchString) => {

    const requestOptions = this.buildRequestOptions(pageIndex, searchString);

    return fetch('http://nyx.vima.ekt.gr:3000/api/books', requestOptions);
  }

  static getBooks = (
    pageIndex,
    searchString,
    ) => {
    return this.fetchData(pageIndex, searchString)
  }

}

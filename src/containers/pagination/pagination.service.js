import { ITEMS_PER_PAGE } from '../../global/constants/constants';

const displayPages = 5

class PaginationService {
  static numbers = [];

  // reset 'pagesNumbers' before 'createPaginationNumbers' call
  static resetNumbersArray(){
    this.numbers = [];
  }

  // calculate available pages, based on 'displayPages'
  static pagesCount(itemsCount){
    return Math.floor(itemsCount/ITEMS_PER_PAGE)+1;
  }

  // create the numbers of the pagination << < 1 2 3 4 5 > >>
  static createPaginationNumbers(firstNumber, lastNumber){
    for(var i = firstNumber;i <= lastNumber; i++){
      this.numbers.push(i);
    }
    return this.numbers;
  }

  // first page
  static first(){
    const firstNumber = 1;
    const lastNumber = displayPages;
    this.resetNumbersArray();

    return this.createPaginationNumbers(firstNumber, lastNumber);
  }

  // calculate page numbers for actions 'next','previous','last',first'
  static calculatePagesNumbers(activePage, itemsCount){
    const pagesCount = this.pagesCount(itemsCount);
    let firstNumber=1;
    let lastNumber=1;
    if(pagesCount >= displayPages){
      if(Number(activePage)-2 >= 1){
        firstNumber = Number(activePage) - 2;
        lastNumber = Number(activePage) + 2;
      } else if (activePage-2 < 1){ // active = 1
        firstNumber = activePage;
        lastNumber = displayPages;
      } else if(activePage === pagesCount){ // active = last page
        firstNumber = pagesCount-5;
        lastNumber = pagesCount;
      }
    }
    this.resetNumbersArray();
    return this.createPaginationNumbers(firstNumber, lastNumber);
  }
}

export default PaginationService;

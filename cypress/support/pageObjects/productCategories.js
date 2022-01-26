module.exports = {
  elements: {
    productCards:
      '*[class^="MuiPaper-root jss183 MuiPaper-elevation0 MuiPaper-rounded"]',
    numberOfResults:
      '[class="MuiSelect-root MuiSelect-select MuiTablePagination-select jss179 MuiSelect-selectMenu MuiInputBase-input"]',
    twentyFiveResultsPerPage: '[data-value="25"]',
    showOutOfStockCheckbox:
      '[aria-labelledby="checkbox-label-stockStatus-Show Out of Stock"]',
    searchComponent: '[data-testid="searchComponent"]',
    sortByDropdown:
      '[class="MuiSelect-root MuiSelect-select MuiSelect-selectMenu jss126 MuiInputBase-input MuiInput-input"]',
    sortByLowToHigh: '[data-value="price-asc"]',
    firstProductCard:
      ":nth-child(3) > .MuiGrid-spacing-xs-3 > .MuiGrid-grid-sm-6 > :nth-child(1) > .MuiTypography-root",
  },

  expectedText: {
    norton: "Norton",
    outOfStock: "OUT OF STOCK",
    lowestAmount: "£0.79",
    highestAmount: "£1.39",
  },

  checkResultsOnPage: function (numberOfExpectedResults) {
    cy.get(this.elements.productCards).should(
      "have.length",
      numberOfExpectedResults
    );
  },

  updateResultsPerPageToTwentyFive: function () {
    cy.get(this.elements.numberOfResults).first().click();
    cy.get(this.elements.twentyFiveResultsPerPage).click();
  },
};

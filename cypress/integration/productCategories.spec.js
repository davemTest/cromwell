const productCategories = require("../support/pageObjects/productCategories");

describe("Cromwell product category tests", () => {
  beforeEach(() => {
    cy.visit("/shop/abrasives/cutting/c/090701");
  });

  it("Should show 10 products on the page", () => {
    productCategories.checkResultsOnPage(10);
  });

  it("Should allow users to update to 25 results per page", () => {
    productCategories.updateResultsPerPageToTwentyFive();
    productCategories.checkResultsOnPage(25);
  });

  it("Should show users out of stock products when out of stock filter has been applied", () => {
    productCategories.updateResultsPerPageToTwentyFive();

    cy.get(productCategories.elements.showOutOfStockCheckbox).click();
    cy.get(productCategories.elements.searchComponent).contains(
      productCategories.expectedText.outOfStock
    );
  });

  it("Should allow users to sort by low to high", () => {
    cy.get(productCategories.elements.sortByDropdown).click();
    cy.get(productCategories.elements.sortByLowToHigh).click();

    cy.wait(3000);

    cy.get(productCategories.elements.firstProductCard).contains(
      productCategories.expectedText.norton
    );

    cy.get(productCategories.elements.productCards)
      .first()
      .contains(productCategories.expectedText.lowestAmount);
    cy.get(productCategories.elements.productCards)
      .last()
      .contains(productCategories.expectedText.highestAmount);
  });
});

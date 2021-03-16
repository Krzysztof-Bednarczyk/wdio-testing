/* eslint-disable max-statements */
describe('When on Zero Bank website', () => {
    beforeEach(() => {
        browser.url('http://zero.webappsecurity.com');
        $('#searchTerm').waitForExist();
    });

    it('You have the ability to search and receive results', () => {
        const searchQuery = 'Bank';
        $('#searchTerm').setValue(searchQuery);
        browser.keys('Enter');
        const expectedURL = `http://zero.webappsecurity.com/search.html?searchTerm=${searchQuery}`;
        const expectedTitle = 'Search Results:';
        const expectedMessage = `The following pages were found for the query: ${searchQuery}`;
        const searchResultList = $('ul');
        const resultTitle = $('h2').getText();
        const resultMessage = $('.top_offset').getText().split('\n')[4];

        expect(browser).toHaveUrl(expectedURL);
        expect(resultTitle).toEqual(expectedTitle);
        expect(resultMessage).toEqual(expectedMessage);
        expect(searchResultList).toBeVisible();
    });

    it('You can perform an invalid search', () => {
        const searchQuery = 'invalid';
        $('#searchTerm').setValue(searchQuery);
        browser.keys('Enter');
        const expectedURL = `http://zero.webappsecurity.com/search.html?searchTerm=${searchQuery}`;
        const expectedTitle = 'Search Results:';
        const expectedMessage = `No results were found for the query: ${searchQuery}`;
        const searchResultList = $('ul');
        const resultTitle = $('h2').getText();
        const resultMessage = $('.top_offset').getText().split('\n')[4];

        expect(browser).toHaveUrl(expectedURL);
        expect(resultTitle).toEqual(expectedTitle);
        expect(resultMessage).toEqual(expectedMessage);
        expect(searchResultList).toBeVisible();
    });

});

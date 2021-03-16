/* eslint-disable no-undef */
/* eslint-disable max-statements */
describe('When on Zero Bank website', () => {
    beforeEach(() => {
        browser.url('http://zero.webappsecurity.com');
        $('#searchTerm').waitForExist();
    });

    [
        {
            title: 'You have the ability to search and receive results',
            searchQuery: 'Bank',
            expectedURL: 'http://zero.webappsecurity.com/search.html?searchTerm=Bank',
            expectedTitle: 'Search Results:',
            expectedMessage: 'The following pages were found for the query: Bank',
        },
        {
            title: 'You can perform an invalid search',
            searchQuery: 'invalid',
            expectedURL: 'http://zero.webappsecurity.com/search.html?searchTerm=invalid',
            expectedTitle: 'Search Results:',
            expectedMessage: 'No results were found for the query: invalid',
        },

    ].forEach(({
        title, searchQuery, expectedURL, expectedTitle, expectedMessage,
    }) => {

        it(title, () => {
            $('#searchTerm').setValue(searchQuery);
            browser.keys('Enter');
            const searchResultList = $('ul');
            const resultTitle = $('h2').getText();
            const resultMessage = $('.top_offset').getText().split('\n')[4];

            expect(browser).toHaveUrl(expectedURL);
            expect(resultTitle).toEqual(expectedTitle);
            expect(resultMessage).toEqual(expectedMessage);
            expect(searchResultList).toBeVisible();
        });

    });

});

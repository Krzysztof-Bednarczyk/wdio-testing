describe('My basic test should ', () => {
	it(`visit the bank website and verify it't title`, () => {
		browser.url('http://zero.webappsecurity.com');
		expect(browser).toHaveTitle(
			'Zero - Personal Banking - Loans - Credit Cards'
		);
	});
});

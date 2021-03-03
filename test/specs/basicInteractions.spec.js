/* eslint-disable max-lines-per-function */
import {expect as expectChai} from 'chai';

describe('Using Webdriver.io should enable to ', () => {
	beforeEach(() => {
		browser.url('http://zero.webappsecurity.com');
	});

	it(`visit the bank website and verify it't title`, () => {
		expect(browser).toHaveTitle(
			'Zero - Personal Banking - Loans - Credit Cards'
		);
	});

	it('pause the test for 3 seconds', () => {
		const pauseTime = 3000;
		browser.pause(pauseTime);
	});

	it('assert if element is present on website', () => {
		const element = $('.brand');
		expect(element).toBeVisible();
	});

	it('wait for element to exist', () => {
		const signInBtn = $('#signin_button');
		signInBtn.waitForExist();
		expect(signInBtn).toBeVisible();
	});

	it('verify the correct number of elements on page', () => {
		const elementsExpectedValue = 4,
			// eslint-disable-next-line sort-vars
			bankingFeatures = $$('#online_banking_features>.span3');
		bankingFeatures.forEach((element) => element.waitForExist());
		expectChai(bankingFeatures.length).to.equal(elementsExpectedValue);
	});

	it('get element text', () => {
		const menuElement = $('#onlineBankingMenu>div');
		menuElement.waitForExist();
		expectChai(menuElement.getText()).to.equal('ONLINE BANKING');
	});

	it('assert element attribute', () => {
		const signInBtn = $('#signin_button');
		signInBtn.waitForExist();
		expect(signInBtn).toHaveAttr('class', 'signin btn btn-info');
	});

	it('save screenshot', () => {
		browser.saveScreenshot('my-screenshot.png');
	});

	it('set browser window size', () => {
		const dimentions = {
			'height': 768,
			'width': 1600
		};
		browser.setWindowSize(dimentions.width, dimentions.height);
	});

});

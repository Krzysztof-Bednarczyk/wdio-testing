/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */
describe('After login you are able to', () => {
    before(() => {
        browser.url('http://zero.webappsecurity.com/');
        $('#signin_button').waitForExist();
        $('#signin_button').click();
        $('#login_form').waitForExist();
        $('#user_login').waitForExist();
        $('#user_login').setValue('username');
        $('#user_password').waitForExist();
        $('#user_password').setValue('password');
        $('[value="Sign in"]').waitForExist();
        $('[value="Sign in"]').click();
    });

    beforeEach(() => {
        $('#pay_bills_tab').waitForExist();
        $('#pay_bills_tab').click();
        $('#tabs > ul > li:nth-child(3)').waitForExist();
        $('#tabs > ul > li:nth-child(3)').click();
        $('#pc_purchase_currency_form').waitForExist();
    });

    it('You are able to calculate the conversion amount of $100 in GBP', () => {
        $('#pc_currency').selectByAttribute('value', 'GBP');
        $('#pc_amount').setValue('100');
        $('#pc_inDollars_true').click();
        $('#pc_calculate_costs').click();
        const conversionAmount = $('#pc_conversion_amount').getText();

        expect(conversionAmount).toEqual('59.02 pound (GBP) = 100.00 U.S. dollar (USD)');
    });

    it('You are able to calculate conversion amount of 100 NOK in dollars', () => {
        $('#pc_currency').selectByAttribute('value', 'NOK');
        $('#pc_amount').setValue('100');
        $('#pc_inDollars_false').click();
        $('#pc_calculate_costs').click();
        const conversionAmount = $('#pc_conversion_amount').getText();

        expect(conversionAmount).toEqual('100.00 krone (NOK) = 18.81 U.S. dollar (USD)');
    });

    it('You receive an alert when calculating conversion amount if data is missing', () => {
        $('#pc_currency').selectByAttribute('value', 'NOK');
        $('#pc_amount').setValue('100');
        $('#pc_calculate_costs').click();

        expect(browser.isAlertOpen()).toBe(true);
        expect(browser.getAlertText()).toEqual(
            'Please, ensure that you have filled all the required fields with valid values.',
        );
    });

    it('You are able to exchange $100 ', () => {
        $('#pc_currency').selectByAttribute('value', 'GBP');
        $('#pc_amount').setValue('100');
        $('#pc_inDollars_true').click();
        $('#purchase_cash').click();
        const alertMessage = $('#alert_content').getText();

        expect(alertMessage).toEqual('Foreign currency cash was successfully purchased.');
    });

    it('You are able to exchange 100 NOK', () => {
        $('#pc_currency').selectByAttribute('value', 'NOK');
        $('#pc_amount').setValue('100');
        $('#pc_inDollars_false').click();
        $('#purchase_cash').click();
        const alertMessage = $('#alert_content').getText();

        expect(alertMessage).toEqual('Foreign currency cash was successfully purchased.');
    });

    it('You receive an alert when exchanging cash if data is missing', () => {
        $('#pc_currency').selectByAttribute('value', 'NOK');
        $('#pc_amount').setValue('100');
        $('#purchase_cash').click();

        expect(browser.isAlertOpen()).toBe(true);
        expect(browser.getAlertText()).toEqual(
            'Please, ensure that you have filled all the required fields with valid values.',
        );
    });

});

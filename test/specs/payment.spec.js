/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */
describe('When You login to Zero Bank Web App', () => {
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
        $('#ui-tabs-1 > form').waitForExist();
    });

    it('You are able to make payment', () => {
        const payeeDropdown = $('#sp_payee');
        payeeDropdown.selectByAttribute('value', 'apple');
        const accountDropdown = $('#sp_account');
        accountDropdown.selectByVisibleText('Loan');
        const amountBox = $('#sp_amount');
        const exampleAmount = '150';
        amountBox.setValue(exampleAmount);
        const date = $('#sp_date');
        // eslint-disable-next-line no-magic-numbers
        const today = new Date().toISOString().slice(0, 10);
        date.setValue(today);
        const description = $('#sp_description');
        description.setValue('Paying my dues');
        const payBtn = $('#pay_saved_payees');
        payBtn.click();
        const message = $('#alert_content').getText();

        expect(message).toEqual('The payment was successfully submitted.');
    });

    describe('and want to make payment ', () => {
        it('You get alert if amount field is not filled', () => {
            const payBtn = $('#pay_saved_payees');
            payBtn.click();
            const amountBox = $('#sp_amount');

            expect(amountBox.getAttribute('validationMessage')).toEqual('Please fill out this field.');
        });

        it('You get alert when date is not specified', () => {
            const amountBox = $('#sp_amount');
            amountBox.setValue('150');
            const payBtn = $('#pay_saved_payees');
            payBtn.click();
            const date = $('#sp_date');

            expect(date.getAttribute('validationMessage')).toEqual('Please fill out this field.');
        });
    });

});

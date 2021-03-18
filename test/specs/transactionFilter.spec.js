describe('When on Zero Bank Web App You can filter transactions', () => {
    beforeEach(() => {
        browser.reloadSession();
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
        $('#account_activity_tab').waitForExist();
        $('#account_activity_tab').click();
        $('#tabs > ul > li:nth-child(2)').waitForExist();
        $('#tabs > ul > li:nth-child(2)').click();
    });

    it('by description', () => {
        $('#aa_description').setValue('ONLINE');
        $('button[type="submit"]').click();
        $('#filtered_transactions_for_account tbody').waitForExist();
        const results = $('#filtered_transactions_for_account tbody').$$('tr');
        expect(results).toHaveLength(2);
    });

    it('by dates', () => {
        const fromDate = new Date(Date.UTC(2012,8,2)).toISOString().slice(0, 10);
        $('#aa_fromDate').setValue(fromDate);
        const toDate = new Date(Date.UTC(2012,8,5)).toISOString().slice(0, 10);
        $('#aa_toDate').setValue(toDate);
        $('button[type="submit"]').click();
        $('#filtered_transactions_for_account tbody').waitForExist();
        const results = $('#filtered_transactions_for_account tbody').$$('tr');
        expect(results).toHaveLength(1);
    });

    it('by amount', () => {
        const fromAmount = '60';
        $('#aa_fromAmount').setValue(fromAmount);
        const toAmount = '1200'
        $('#aa_toAmount').setValue(toAmount);
        $('button[type="submit"]').click();
        $('#filtered_transactions_for_account tbody').waitForExist();
        const results = $('#filtered_transactions_for_account tbody').$$('tr');
        expect(results).toHaveLength(2);
    });

    it('by type', () => {
        $('#aa_type').selectByAttribute('value', 'DEPOSIT');
        $('button[type="submit"]').click();
        $('#filtered_transactions_for_account tbody').waitForExist();
        const results = $('#filtered_transactions_for_account tbody').$$('tr');
        expect(results).toHaveLength(2);
    });

    it('and receive an empty result set', () => {
        $('#aa_description').setValue('random text');
        $('button[type="submit"]').click();
        $('#filtered_transactions_for_account').waitForExist();
        const results = $('#filtered_transactions_for_account .well')
        expect(results).toHaveText('No results.');
    });

});

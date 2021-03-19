describe('When You enter help section in Zer Bank Web App You can check how to', () => {
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
        $('.icon-cog').click();
        $('#help_link').click();
    });

    [{
        titile: 'pay bills',
        selector: '*=pay bills',
        expectedMessageTitle: 'How do I pay bills?'

    },
    {
        titile: 'transfer funds',
        selector: '*=transfer funds',
        expectedMessageTitle: 'How do I transfer funds?'

    },
    {
        titile: 'log into account',
        selector: '*=log into my account',
        expectedMessageTitle: 'How do I log into my account?'

    }
    ].forEach(({ titile, selector, expectedMessageTitle }) => {
        it(titile, () => {
            $(selector).click();
            const helpSuggestionTitle = $('.span8 > h3');
            expect(helpSuggestionTitle).toHaveText(expectedMessageTitle);
        });

    });




});
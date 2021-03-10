describe('When visiting the Zero Bank Web App', () => {

    beforeEach(() => {
        browser.reloadSession();
        browser.url('http://zero.webappsecurity.com/');
        $('#signin_button').waitForExist();
        $('#signin_button').click();
        $('#login_form').waitForExist();
    });

    it('the error message is displayed when You login with invalid credentails', () => {
        $('#user_login').waitForExist();
        $('#user_login').setValue('invalid');
        $('#user_password').waitForExist();
        $('#user_password').setValue('invalid');
        $('[value="Sign in"]').waitForExist();
        $('[value="Sign in"]').click();
        const errorAlert = $('.alert-error');
        expect(errorAlert).toBeVisible();
    });

    it('you are able to login with valid credentials', () => {
        $('#user_login').waitForExist();
        $('#user_login').setValue('username');
        $('#user_password').waitForExist();
        $('#user_password').setValue('password');
        $('[value="Sign in"]').waitForExist();
        $('[value="Sign in"]').click();
        const userIcon = $('.dropdown-toggle .icon-user');
        expect(userIcon).toBeVisible();
    });

    it('you are able to logout', () => {
        $('#user_login').waitForExist();
        $('#user_login').setValue('username');
        $('#user_password').waitForExist();
        $('#user_password').setValue('password');
        $('[value="Sign in"]').waitForExist();
        $('[value="Sign in"]').click();
        $('.dropdown-toggle .icon-user').click();
        $('#logout_link').click();
        const signInBtn = $('#signin_button');
        expect(signInBtn).toBeVisible();
    });

});

import LoginPage from '../pageobjects/pages/LoginPage';

describe('When visiting the Zero Bank Web App', () => {

    beforeEach(() => {
        browser.reloadSession();
        browser.url('http://zero.webappsecurity.com/');
        $('#signin_button').waitForExist();
        $('#signin_button').click();
        $('#login_form').waitForExist();
    });

    it('the error message is displayed when You login with invalid credentails', () => {
        LoginPage.login('invalid', 'invalid');
        const errorAlert = $('.alert-error');
        expect(errorAlert).toBeVisible();
    });

    it('you are able to login with valid credentials', () => {
        LoginPage.login('username', 'password');
        const userIcon = $('.dropdown-toggle .icon-user');
        expect(userIcon).toBeVisible();
    });

    it('you are able to logout', () => {
        LoginPage.login('username', 'password');
        $('.dropdown-toggle .icon-user').click();
        $('#logout_link').click();
        const signInBtn = $('#signin_button');
        expect(signInBtn).toBeVisible();
    });

});

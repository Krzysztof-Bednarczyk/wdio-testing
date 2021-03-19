import LoginPage from './LoginPage';
import Page from '../page';

class HomePage extends Page {

    get signInButton(){
        return $('#signin_button');
    }

    navigateToLoginPage(){
        this.signInButton.waitForExist();
        this.signInButton.click();
        LoginPage.loginForm.waitForExist();
        return LoginPage;
    }

    open(){
        super.open('');
    }

}

export default new HomePage();
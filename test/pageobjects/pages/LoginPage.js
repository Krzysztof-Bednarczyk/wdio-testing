import Page from '../page';

class LoginPage extends Page {

    get loginForm(){
        return  $('#login_form');
    }

    get loginInput(){
        return $('#user_login');
    };

    get passwordInput(){
        return $('#user_password');
    };

    get signInButton(){
        return  $('[value="Sign in"]');
    }

    login(login, password){
        this.loginInput.waitForExist();
        this.loginInput.setValue(login);
        this.passwordInput.waitForExist();
        this.passwordInput.setValue(password);
        this.signInButton.waitForExist();
        this.signInButton.click();
    }

}

export default new LoginPage();
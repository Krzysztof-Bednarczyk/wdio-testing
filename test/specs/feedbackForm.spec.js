describe('When visiting Zero Bank Web App', () => {

    beforeEach(() => {
        browser.url('http://zero.webappsecurity.com/index.html');
        $('#feedback').waitForExist();
        $('#feedback').click();
    });

    it('You are able to navigate to feedback form', () => {
        const feedbackForm = $('form .form-inputs');
        expect(feedbackForm).toBeVisible();
    });

    it('You are able to send feedback through form', () => {
        $('form .form-inputs').waitForExist();
        $('#name').setValue('Krzysztof');
        $('#email').setValue('Krzysztof@wp.pl');
        $('#subject').setValue('My message to Zero Bank');
        $('#comment').setValue('Where\'s my monney. You got my money');
        $('input[value="Send Message"]').click();
        const formMessage = $('.offset3.span6').getText().split('\n')[1];
        expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html');
        expect(formMessage).toEqual('Thank you for your comments, Krzysztof. They will be reviewed by our Customer Service staff and given the full attention that they deserve.');
    });

});

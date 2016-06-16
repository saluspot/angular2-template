describe('Calculator Page', function() {

    beforeEach(function() {
        browser.get('/');
    });

    it('should add positive numbers', function() {
        var h1 = element(by.css("h1"))
        browser.sleep(20000)
        expect(h1.getText()).toEqual("Mi app");

    });


});

var expect  = require('chai').expect;
var request = require('request');
var mocha = require('mocha');
var it = mocha.it;





it('Main page content', function(done) {
    request('http://localhost:8080' , function(body) {
        expect(body).to.equal('Hello World');
        done();
    });
});

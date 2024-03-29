var mocha = require('mocha');
var expect  = require('chai').expect;
var request = require('request');
var describe = mocha.describe;
var it = mocha.it;

describe('Status and content', function() {
    describe ('Main page', function() {
        it('status', function(done){
            request('http://localhost:8080/', function(response) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('content', function(done) {
            request('http://localhost:8080/' , function(body) {
                expect(body).to.equal('Hello World');
                done();
            });
        });
    });

    describe ('About page', function() {
        it('status', function(done){
            request('http://localhost:8080/about', function(response) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

    });
});

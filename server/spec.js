var app = require('./server');
var request = require('supertest');
var expect = require('chai').expect;

describe('[JOBS]', function(){

  it('should get all jobs in a certain category', function(){
    request(app)
    .get('/jobs?category=emu_wrangling')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, resp) {
      expect(resp.body).to.be.an('array');
      expect(resp.body.categories).to.be.an('array'); // categories: [food, outdoors, ...]
      expect(resp.body.categories.indexOf('emu_wrangling') > -1).to.be(true);
      expect(resp.body.price).to.be.an('number');
      expect(resp.body.id).to.be.an('number');
      done();
    })
  });

  it('should get jobs filterered by set params', function(){
    request(app)
    .get('/jobs?category=   &priceMin=5&priceMax=10&')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, resp) {
      expect(resp.body).to.be.an('array');
      expect(resp.body.price).to.be.an('number');
      expect(resp.body.id).to.be.an('number');
      done();
    })
  })
})
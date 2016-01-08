var app = require('./server');
var request = require('supertest');
var expect = require('chai').expect;

describe('[JOBS]', function(){

  it('should get all jobs in "emu wrangling" in 90210', function(done){
    request(app)
    .post('/jobs')
    .send({
      category: 'emu_wrangling',
      zip_code: 90210
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, resp) {
      expect(resp.body).to.be.an('array');
      expect(resp.body[0].categories).to.be.an('array'); // categories: [food, outdoors, ...]
      expect(resp.body[0].categories).to.include('emu_wrangling');
      expect(resp.body[0].price).to.be.a('number');
      expect(resp.body[0].id).to.be.a('number');
      done();
    });
  });

  it('should get all jobs in "emu wrangling" between 50 and 200 dollars, and <5 miles from 90210', function(done){
    request(app)
    .post('/jobs')
    .send({
      category: 'emu_wrangling',
      zip_code: 90210,
      min_price: 50,
      max_price: 200,
      distance: 5
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, resp) {
      expect(resp.body).to.be.an('array');
      expect(resp.body[0].categories).to.be.an('array'); // categories: [food, outdoors, ...]
      expect(resp.body[0].categories).to.include('emu_wrangling');
      expect(resp.body[0].price).to.be.at.least(50); // .within
      expect(resp.body[0].price).to.be.below(200);
      // distance calculation expect(resp.body[0].latitude ... ).to.be.below(5);
      done();
    })
  });

  it('should get jobs filterered by set params', function(done){
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
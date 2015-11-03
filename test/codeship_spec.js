'use strict';
let Codeship = require('../lib/codeship.js');
let should = require('should');

describe('Codeship', function() {
  this.timeout(32000);

  describe('#constructor()', function() {
    it('should throw an error expects an api key', function() {
      let t = () => { new CodeShip(); };

      t.should.throw();
    });
  });

  describe('#listProjects()', function() {
    it('should list projects without error', function(done) {
      let codeship = new Codeship(process.env.API_KEY);
      codeship.listProjects((err, results) => {
        if (err) throw err;
        for (let p of results) {
          p.should.have.property('id');
          p.should.have.property('uuid');
          p.should.have.property('repoName');
          p.should.have.property('repoProvider');
        }

        done();
      });
    });
  });

  describe('#getProject()', function() {
    it('should return a single project', function(done) {
      let codeship = new Codeship(process.env.API_KEY);
      codeship.getProject('111139', (err, result) => {
        if (err) throw err;
        result.should.have.property('id');
        result.should.have.property('uuid');
        result.should.have.property('repository_name');
        result.should.have.property('repository_provider');
        result.should.have.property('builds');
        result.builds.should.be.a.Array;
        done();
      });

    });

  });

  describe('#getProjectBuildData()', function() {
    it('should return build data in a single project', function(done) {
      let codeship = new Codeship(process.env.API_KEY);
      codeship.getProject('111139', (err, result) => {
        if (err) throw err;
        result.should.be.a.Array;
        done();
      });

    });

  });

});

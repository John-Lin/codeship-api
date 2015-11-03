
'use strict';
var request = require('request');

class Codeship {
    constructor(apiKey) {
      if (!apiKey) {
        throw 'Invalid API key error';
      }

      this.URL = 'https://codeship.com/api/v1/';
      this.QUERY_STRING = '?api_key=';
      this.apiKey = apiKey;
    }

    listProjects(callback) {
      let projects = [];
      let project = {};

      request.get(
        {
          url: `${this.URL}projects.json${this.QUERY_STRING}${this.apiKey}`,
        },
        (error, response, body) => {
          if (!error && response.statusCode === 200) {
            var res = JSON.parse(body);
            for (let p of res.projects) {
              project.id = p.id;
              project.uuid = p.uuid;
              project.repoName = p.repository_name;
              project.repoProvider = p.repository_provider;

              // Clone an object and push into projects
              projects.push(JSON.parse(JSON.stringify(project)));
            }

            callback(null, projects);
          } else {
            callback(new Error(error));
          }
        });
    }

    getProject(id, callback) {
      if (!id) {
        callback(new Error('Invalid project ID error'), null);
      }

      request.get(
        {
          url: `${this.URL}projects/${id}.json${this.QUERY_STRING}${this.apiKey}`,
        },
        (error, response, body) => {
          if (!error && response.statusCode === 200) {
            var res = JSON.parse(body);

            callback(null, res);
          } else {
            callback(new Error(error));
          }
        });

    }

    getProjectBuildData(id, callback) {
      if (!id) {
        callback(new Error('Invalid project ID error'), null);
      }

      request.get(
        {
          url: `${this.URL}projects/${id}.json${this.QUERY_STRING}${this.apiKey}`,
        },
        (error, response, body) => {
          if (!error && response.statusCode === 200) {
            var res = JSON.parse(body);
            callback(null, res.builds);
          } else {
            callback(new Error(error));
          }
        });

    }

}

module.exports = Codeship;

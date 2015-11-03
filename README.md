# codeship-api
[![npm version](https://badge.fury.io/js/codeship.svg)](https://badge.fury.io/js/codeship)
[![Build Status](https://travis-ci.org/John-Lin/codeship-api.svg?branch=master)](https://travis-ci.org/John-Lin/codeship-api)

An better API wrapper for Codeship

## Install

With [npm](https://www.npmjs.com/) do:

```sh
npm install codeship
```

## Example usage

```javascript
'use strict';
let Codeship = require('./index.js');
let codeship = new Codeship('APIKEY');

codeship.listProjects((err, results) => {
  if (err) throw err;
  console.log(results);
});

codeship.getProject('111139', (err, result) => {
  if (err) throw err;
  console.log(result);
});

codeship.getProjectBuildData('111139', (err, result) => {
  if (err) throw err;
  console.log(result);
});

```

## APIs

### codeship.listProjects(cb)
Return an array include all projects on codeship.

### codeship.getProject(projectId, cb)
Return a single project `projectId` is required.

### codeship.getProjectBuildData(projectId, cb)
Return build data in a single project `projectId` is required.

## License
MIT © [Che-Wei Lin](https://github.com/John-Lin)

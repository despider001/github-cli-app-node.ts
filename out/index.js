"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var githubAgent_1 = require("./githubAgent");
var githubAgent = new githubAgent_1.GithubAgent();
githubAgent.getInfo('despider001', function (user) {
    console.log(user);
    return user;
});

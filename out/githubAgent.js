"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var Repos_1 = require("./Repos");
var User_1 = require("./User");
var GithubAgent = /** @class */ (function () {
    function GithubAgent() {
        this.OPTIONS = {
            headers: { "User-Agent": "CLI App" },
            json: true,
        };
    }
    // tslint:disable:align
    // tslint:disable:no-unused-expression
    GithubAgent.prototype.getInfo = function (username, cb) {
        var _this = this;
        // tslint:disable:max-line-length
        request.get('https://api.github.com/users/' + username, this.OPTIONS, function (err, httpResponse, body) {
            // tslint:disable:no-console
            var user = new User_1.User(body.login, body.id, body.name);
            request.get('https://api.github.com/users/' + username + '/repos', _this.OPTIONS, function (err2, httpResponse2, body2) {
                var repos = [];
                body2.forEach(function (item) {
                    repos.push(new Repos_1.Repos(item.id, item.name, item.created_at));
                });
                user.repos = repos;
                cb(user);
            });
        });
    };
    return GithubAgent;
}());
exports.GithubAgent = GithubAgent;

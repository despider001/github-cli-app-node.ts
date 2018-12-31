// tslint:disable:no-console
import { User } from './User';
import {GithubAgent as GithubAgent} from './githubAgent';

const githubAgent = new GithubAgent();
const githubUsername = 'despider001';

githubAgent.getInfo(githubUsername, (user: User): User => {
    console.log(user);
    return user;
});

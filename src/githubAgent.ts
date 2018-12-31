import * as request from 'request';
import { Repos as Repos } from './Repos';
import { User as User } from './User';

export class GithubAgent {
    private OPTIONS: any = {
        headers: { "User-Agent": "CLI App" },
        json: true,
    };
    // tslint:disable:align
    // tslint:disable:no-unused-expression
    public getInfo(username: string, cb: (user: User) => User) {
        // tslint:disable:max-line-length
        request.get('https://api.github.com/users/' + username, this.OPTIONS, (err: any, httpResponse: any, body: any) => {
            // tslint:disable:no-console
            const user: User = new User(body.login, body.id, body.name);
            request.get('https://api.github.com/users/' + username + '/repos', this.OPTIONS, (err2: any, httpResponse2: any, body2: any) => {
                const repos: Repos[] = [];
                body2.forEach((item: any) => {
                    repos.push(new Repos(item.id, item.name, item.created_at));
                });
                user.repos = repos;
                cb(user);
            });
        });
    }
}

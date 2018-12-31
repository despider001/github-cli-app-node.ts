import {Repos as Repos} from './Repos';

export class User {
    public login: string;
    public id: number;
    public name: string;
    public repos?: Repos[];

    constructor(login: string, id: number, name: string) {
        this.login = login;
        this.id = id;
        this.name = name;
    }
}

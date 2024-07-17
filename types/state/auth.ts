interface Auth {
    account: string;
    name: string;
    email: string;
    avatar: string;
    token: string;
    uid: number;
    level: -2 | -1 | 0 | 1 | 2 | 999;
}

export type { Auth }
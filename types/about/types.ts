export interface Link {
    github?: string;
    ig?: string;
    facebook?: string;
    twitter?: string;
    discord?: string;
    youtube?: string;
    tiktok?: string;
    plurk?: string;
    twitch?: string;
}

export interface Member {
    photo: string;
    name: string;
    role: string[];
    linkList?: Link;
}
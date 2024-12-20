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

interface Intro {
    '年齡': string;
    '星座': string;
    '社團': string;
    '愛好': string;
}

export interface Clothe {
    '服飾一': string;
    '服飾二': string;
    '服飾三': string;
}

export interface CharaInfo {
	maincolor: string;
    subcolor: string;
	image: string;
    bg: string;
    item: string;
    spellname: string;
    name: string;
    intro: Intro;
    info: string;
    subInfo: string;
	panel: string;
    hashtags: string[];
    clothe: Clothe;
}
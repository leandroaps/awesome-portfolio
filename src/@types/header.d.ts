// @types.header.ts
export interface IHeader {
    title: string;
    nav: IHeaderNav[];
}

export interface IHeaderNav {
    active: boolean;
    content: string;
    href: string;
    id?: number;
    title: string;
    onClick?: void;
}

// @types.todo.ts
export interface IAbout {
    download: string;
    lead: string;
    lorem: string;
    myWork: string;
    subtitle: string;
    title: string;
}

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
}

export interface IContact {
    title: string;
    subtitle: string;
}

export type AppContextType = {
    about: IAbout;
    header: IHeader;
    contact: IContact;

    // saveTodo: (todo: ITodo) => void;
    // updateTodo: (id: number) => void;
};

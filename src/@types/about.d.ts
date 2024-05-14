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
    onClick?: void;
}

export interface IContact {
    title: string;
    subtitle: string;
}

export type AppContextType = {
    about: IAbout;
    header: IHeader;
    contact: IContact;
    setActive: React.Dispatch<React.SetStateAction<IHeader>>;

    // saveTodo: (todo: ITodo) => void;
    // updateTodo: (id: number) => void;
};

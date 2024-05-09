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
    active: boolean;
    content: string;
    href: string;
    id: number;
    title: string;
}

export type AboutContextType = {
    about: IAbout;
    header: IHeader[];
    setActive: (active: boolean) => void;

    // saveTodo: (todo: ITodo) => void;
    // updateTodo: (id: number) => void;
};

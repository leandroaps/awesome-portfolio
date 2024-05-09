// @types.todo.ts
export interface IAbout {
    title: string;
    subtitle: string;
    lead: string;
    download: string;
    myWork: string;
    lorem: string;
}
export type AboutContextType = {
    about: IAbout;
    // saveTodo: (todo: ITodo) => void;
    // updateTodo: (id: number) => void;
};

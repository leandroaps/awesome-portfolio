export type Theme = 'light' | 'dark';
export interface AppContextType {
    theme: Theme;
    changeTheme: (theme: Theme) => void;
    state: [
        {
            foreground: string;
        }
    ];
}

export type Theme = 'light' | 'dark';
export interface PortfolioContextType {
    theme: Theme;
    changeTheme: (theme: Theme) => void;
    state: [
        {
            foreground: string;
        }
    ];
}

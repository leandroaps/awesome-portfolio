import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

describe('A truthy statement', () => {
    test('True to be true', () => {
        expect(true).toBe(true);
    });

    test('should render headline', () => {
        render(<App />);
        expect(screen.getByText('leandroaps')).toBeInTheDocument();
    });
});

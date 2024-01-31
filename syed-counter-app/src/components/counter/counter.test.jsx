import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './counter';

describe('Counter Component', () => {
  it('renders Counter component', () => {
    render(<Counter />);    
    expect(screen.getByTestId('increment-btn')).toBeInTheDocument();
    expect(screen.getByTestId('decrement-btn')).toBeInTheDocument();
  });

  it('clicking Increment button increases the number by 1', () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId('increment-btn');
    fireEvent.click(incrementButton);
    const numberElement = screen.getByText(/1/i);
    expect(numberElement).toBeInTheDocument();
  });

  it('clicking Decrement button decreases the number by 1', () => {
    render(<Counter />);
    const decrementButton = screen.getByTestId('decrement-btn');
    fireEvent.click(decrementButton);
    const numberElement = screen.getByText(/-1/i);
    expect(numberElement).toBeInTheDocument();
  });
});
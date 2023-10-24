import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Player from './Player';

// Test to see if the component with its content is rendered
test('Renders content', () => {
    const player = {
        playerName: 'Test Player',
        nation: 'Nation',
        position: 'XX',
        team: 'International Team',
        rating: 100,
    }

    render(<Player player={player} />)

    const element = screen.getByText('Test Player')
    expect(element).toBeDefined()
})
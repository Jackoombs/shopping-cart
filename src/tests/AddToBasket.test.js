import { render, screen } from '@testing-library/react';
import AddToBasket from '../components/AddToBasket';

test('button fires on click', () => {
  const product = {
    title: 'string',
    image: 'string',
    description: 'string',
    rating: {
      rate: 123,
      count: 123
    }
  }
  const mockState = []
  const setMockState = []
})
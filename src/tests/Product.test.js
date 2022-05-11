import { render, screen } from '@testing-library/react';
import Product from '../components/Product'

test('add to basket renders correctly', () => {
  const product = {
    title: 'string',
    image: 'string',
    description: 'string',
    rating: {
      rate: 123,
      count: 123
    }
  }
  render(<Product product={product}/>)
  const button = screen.getAllByRole('button')
  expect(button[0]).toHaveTextContent('ADD TO BASKET')
})
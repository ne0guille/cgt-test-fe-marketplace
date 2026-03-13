import { render, screen } from '@testing-library/react';
import { CartCountBadge } from './CartCountBadge';

describe('CartCountBadge', () => {
  test('renders null when quantity is 0', () => {
    const { container } = render(<CartCountBadge quantity={0} />);
    expect(container).toBeEmptyDOMElement();
  });

  test('renders badge with quantity when greater than 0', () => {
    render(<CartCountBadge quantity={3} />);
    expect(screen.getByRole('status')).toHaveTextContent('3');
  });

});

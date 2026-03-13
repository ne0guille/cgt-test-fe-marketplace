import { formatPrice } from '../../utils/cartUtils';

export function Price({ amount }) {
  return <>{formatPrice(amount)}</>;
}


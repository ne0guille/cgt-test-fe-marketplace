# Marketplace MVP

The goal of this task is to test your ability to test, refactor and implement new functionality on a given system. Note
that this repository does not represent the actual code of CGTrader, but only acts as a testing ground.

## New Functionality

Imagine the situation where management assigns you a task. Management wants you to implement basic MVP functionality for
the marketplace. User should be able to navigate between home page, product page and cart page, add multiple items to the cart and
see the total amount for payment.

## Tasks

1. Implement MVP cart functionality
2. Refactor implementation code and tests where you see fit. You have as much freedom here as you wish
3. Take UI and UX in consideration. Improve the layout and styles using css/scss
4. Make sure test suite runs through all of the tests successfully

## Notes & Requirements

* You can spend as much time as you want.
* You may refactor not only the application code, but the tests too. Keep in mind that test code is still code that
needs to be maintained.
* Use git to track your changes. **Fork or clone this repository** and commit often.
* When finished, send us the link or the zip of the project via e-mail.

Good luck!

---

## Getting Started

This project uses [Vite](https://vite.dev/) as the build tool and [pnpm](https://pnpm.io/) as the package manager.

### Install dependencies

```bash
pnpm install
```

### Available Scripts

#### `pnpm start`

Runs the app in development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

#### `pnpm test`

Launches [Vitest](https://vitest.dev/) in watch mode.\
Tests re-run automatically when files change.

```bash
# Run all tests once
pnpm test -- --run

# Run a specific test file
pnpm test -- --run src/features/cart/Cart.test.jsx

# Run tests matching a pattern
pnpm test -- --run -t "Cart"

# Run with coverage report
pnpm test -- --run --coverage
```

#### `pnpm build`

Builds the app for production to the `dist` folder.

#### `pnpm preview`

Serves the production build locally for preview.

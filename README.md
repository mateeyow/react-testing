# React TDD

Sample repository for testing in reactjs

## Gotchas

### How to keep your tests DRY

Sometimes you want to add custom matchers, utilities, etc. by importing the packages to your tests. You can avoid it by adding `setupTests.js` to the `src/` folder.

```js
// setupTests.js
import '@testing-library/jest-dom/extend-expect';
```

### firstChild

Rendering the component using `const { container } = render(<Component>)` will return an html

```html
<div>
  ...your component rendered as html
</div>
```

To get the html alone, you can do `container.firstChild` it would render your component as html without the `div` wrapper

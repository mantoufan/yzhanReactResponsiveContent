# yzhan-react-responsive-content

A powerful and flexible React component for creating responsive content with automatic media query generation.

## Features

- **Server-side rendering**: Works out of the box with SSR, no client-side rendering required.
- **Flexible content definition**: Accept a `set` prop similar to `srcSet`, allowing you to define content for different breakpoints easily.
- **Versatile content types**: Supports various content types including strings, HTML tags, React components, null values, and even lists of React nodes.
- **Performance optimized**: Uses pure CSS for control, automatically generating and removing media queries without global CSS pollution.
- **Customizable display property**: Set the display property to match your layout needs (block, flex, grid, inline, inline-block, etc.).
- **SEO-friendly**: Allows web crawlers to index content for both desktop and mobile versions simultaneously.
- **Smart wrapper handling**: Reuses existing wrapper layers when present, avoiding unnecessary DOM nesting and preserving existing style selectors.

## Installation

Install the package using npm:

```bash
npm install yzhan-react-responsive-content
```

Or using yarn:

```bash
yarn add yzhan-react-responsive-content
```

## Usage

Here's a basic example of how to use the `ResponsiveContent` component:

```jsx
import ResponsiveContent from 'yzhan-react-responsive-content';

function MyComponent() {
  return (
    <ResponsiveContent 
      set={[
        ['Mobile Content', 320],
        ['Tablet Content', 768],
        ['Desktop Content']
      ]}
      display='block'
    />
  );
}
```

In this example:
- Content will display as follows:
  - 'Mobile Content' for screen widths up to 320px
  - 'Tablet Content' for screen widths between 321px and 768px
  - 'Desktop Content' for screen widths above 768px

### Advanced Usage

You can use more complex content types, including React components. When using React components or elements, remember to provide a unique `key` prop to each one:

```jsx
import ResponsiveContent from 'yzhan-react-responsive-content';

function MyComponent() {
  return (
    <ResponsiveContent 
      set={[
        [<MobileLayout key="mobile">Mobile specific content</MobileLayout>, 320],
        [<TabletLayout key="tablet">Tablet optimized view</TabletLayout>, 768],
        [<React.Fragment key="desktop">
          <DesktopHeader />
          <DesktopContent />
          <DesktopFooter />
        </React.Fragment>]
      ]}
      display='flex'
    />
  );
}
```

Note: When using React components or elements in the `set` prop, always provide a unique `key` prop to each one. This helps React efficiently update and re-render the content.

## API

### Props

- `set: Array<[ReactNode | null, number?]>`: An array of tuples. Each tuple contains the content to display and an optional breakpoint width. When using React components or elements as content, remember to provide a unique `key` prop to each one.
- `display?: 'block' | 'flex' | 'grid' | 'inline' | 'inline-block'`: The CSS display property to use for the content. Defaults to 'block'.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

// this pattern is described in React's documentation: https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
export default function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'WrappedComponent';
}

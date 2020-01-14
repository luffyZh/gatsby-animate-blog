const React = require('react');
const Layout = require('./src/components/layout').default;

exports.wrapPageElement = ({ element, props }) => {
  return !props.path.includes('/posts')
    ? <Layout {...props}>{element}</Layout>
    : <>{element}</>;
}

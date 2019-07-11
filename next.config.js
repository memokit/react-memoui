import withCSS from '@zeit/next-css';
import withSass from '@zeit/next-sass';
import withLess from '@zeit/next-less';

const isProd = process.env.NODE_ENV === 'production'

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => { }
}

export default withLess(withSass(withCSS({
  lessLoaderOptions: {
    javascriptEnabled: true
  }
})))

export function webpack(config) {
  // Fixes npm packages that depend on `fs` module
  config.node = {
    fs: 'empty'
  };
  return config;
}

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path'); 

// You can delete this file if you're not using it
exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const backendTemplate = path.resolve(`src/templates/backend-render.js`);
  createPage({
    // Path for this page — required
    path: `/backend-render/`,
    component: backendTemplate,
  });
};
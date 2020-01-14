/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path'); 

// You can delete this file if you're not using it
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogListTemplate = path.resolve(`src/templates/blog-list.js`);
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  return graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id,
            html,
            frontmatter {
              title,
              tag,
              description,
              date
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    /**
     * 创建列表模板页
     */
    createPage({
      // Path for this page — required
      path: `list`,
      component: blogListTemplate,
      context: {
        result
      },
    });
    /**
     * 创建文章页
     */
    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        path: `posts/${edge.node.id}`,
        component: blogPostTemplate,
        context: {
          html: edge.node.html,
          frontmatter: edge.node.frontmatter
        }
      });
    });
  });
};
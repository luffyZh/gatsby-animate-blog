import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import "./blog.css";

export default (props) => {
  const { pageContext: { result } } = props;
  return (
    <div className='list-container'>
      <SEO title="Garden" />
      {
        result.data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id} className='list-item'>
            <Link to={`/posts/${post.node.id}`}><h3>{post.node.frontmatter.title}</h3></Link>
            <p>{post.node.frontmatter.description}</p>
          </div>
        ))
      }
    </div>
  )
};
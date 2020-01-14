import React from 'react';
import SEO from '../components/seo';

export default (props) => {
  console.log(props);
  const { pageContext: { html, frontmatter } } = props;
  return (
    <>
      <SEO title={frontmatter.title} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
};
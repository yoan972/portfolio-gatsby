import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import download from "../assets/images/download.svg";
import cv from "../assets/images/CV_YoanHillion.pdf";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <h1 className="presentation">
        <span className="bold">{`${title} `}</span>
      </h1>
      <section className="about">
        <PageContent content={content} />
        <p className="about__button">
          <a href={cv} className="form__button" download="">
            Full CV
          </a>
          <img src={download} alt="download-arrow" className="download-arrow" />
        </p>
      </section>
    </div>
  );
};

AboutPageTemplate.defaultProps = {
  content: "",
  contentComponent: {}
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        titleHoverlined: PropTypes.string
      })
    })
  }).isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        titleHoverlined
      }
    }
  }
`;

import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const ProjectPageTemplate = ({ title, image1 }) => {
  return (
    <div>
      <div className="homeproject__header">
        <h1 className="homeproject__title js-fade__text">{title}</h1>
      </div>
      <section className="homeproject__content">
        <div className="homeproject__item">
          <div className="homeproject__description">
            <h2 className="homeproject__title2">Need a Street food ?</h2>
            <p className="homeproject__text">
              This website aim to present a burger foodtruck. Made with
              HTML5/CSS3 and vanilla Javascript.
            </p>
          </div>
        </div>
        <div className="homeproject__item js-fadeIn__item">
          <img
            alt=""
            className="homeproject__image"
            src={image1.image.childImageSharp.original.src}
          />
        </div>
        <div className="homeproject__landscape js-fadeIn__item">
          <img
            alt=""
            className="homeproject__image"
            src={image1.image.childImageSharp.original.src}
          />
        </div>
        <div className="homeproject__item js-fadeIn__item">
          <img
            alt=""
            className="homeproject__image"
            src={image1.image.childImageSharp.original.src}
          />
        </div>
        <div className="homeproject__item js-fadeIn__item">
          <div className="homeproject__description">
            <h2 className="homeproject__title2">
              First We eat then we do everything else
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProjectPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <ProjectPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        heading2={frontmatter.heading2}
        description={frontmatter.description}
        image1={frontmatter.image1}
        image2={frontmatter.image2}
        image3={frontmatter.image3}
      />
    </Layout>
  );
};

export default ProjectPage;

export const aboutPageQuery = graphql`
  query ProjectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        description
        heading2
        image1 {
          alt
          image {
            childImageSharp {
              original {
                src
              }
            }
          }
        }
        image2 {
          alt
          image {
            absolutePath
          }
        }
        image3 {
          alt
          image {
            absolutePath
          }
        }
      }
    }
  }
`;

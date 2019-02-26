import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export class ProjectPageTemplate extends React.Component {
  fadeInProject() {
    const items = document.querySelectorAll(".js-fadeIn__item");
    items.forEach(item => {
      let bottomOfItem = item.offsetTop + item.scrollHeight;
      let bottomOfWindow = window.scrollY + window.innerHeight;
      if (bottomOfWindow > bottomOfItem) {
        item.style.transform = "translateY(0px)";
        item.style.opacity = "1";
      }
    });
  }
  fadeOnScroll() {
    const h1 = document.querySelector(".js-fade__text");
    if (window.scrollY < 250) {
      let opacityValue = 1 - window.scrollY / 250;
      h1.style.opacity = opacityValue;
    }
  }
  handleScroll = () => {
    this.fadeOnScroll();
    this.fadeInProject();
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const {
      image1,
      image2,
      image3,
      title,
      heading,
      heading2,
      description
    } = this.props;
    return (
      <div>
        <div className="homeproject__header">
          <h1 className="homeproject__title js-fade__text">{title}</h1>
        </div>
        <section className="homeproject__content">
          <div className="homeproject__item">
            <div className="homeproject__description">
              <h2 className="homeproject__title2">{heading}</h2>
              <p className="homeproject__text">{description}</p>
            </div>
          </div>
          <div className="homeproject__item js-fadeIn__item">
            <img
              alt={image1.alt}
              className="homeproject__image"
              src={image1.image.childImageSharp.original.src}
            />
          </div>
          <div className="homeproject__landscape js-fadeIn__item">
            <img
              alt={image2.alt}
              className="homeproject__image"
              src={image2.image.childImageSharp.original.src}
            />
          </div>
          <div className="homeproject__item js-fadeIn__item">
            <img
              alt={image3.alt}
              className="homeproject__image"
              src={image3.image.childImageSharp.original.src}
            />
          </div>
          <div className="homeproject__item js-fadeIn__item">
            <div className="homeproject__description">
              <h2 className="homeproject__title2">{heading2}</h2>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

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
            childImageSharp {
              original {
                src
              }
            }
          }
        }
        image3 {
          alt
          image {
            childImageSharp {
              original {
                src
              }
            }
          }
        }
      }
    }
  }
`;

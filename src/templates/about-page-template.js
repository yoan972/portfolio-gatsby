import React from "react";
import PropTypes from "prop-types";
import Content from "../components/Content";

import download from "../assets/images/download.svg";
import cv from "../assets/images/CV_YoanHillion.pdf";

const AboutPageTemplate = ({ title, content, contentComponent }) => {
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

export default AboutPageTemplate;

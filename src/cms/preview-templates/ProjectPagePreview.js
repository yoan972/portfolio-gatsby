import React from "react";
import PropTypes from "prop-types";
import { ProjectPageTemplate } from "../../templates/project-page";

const ProjectPagePreview = ({ entry, getAsset }) => (
  <ProjectPageTemplate
    image1={{
      image: getAsset(entry.getIn(["data", "main", "image1", "image"])),
      alt: entry.getIn(["data", "main", "image1", "alt"])
    }}
    image2={{
      image: getAsset(entry.getIn(["data", "main", "image2", "image"])),
      alt: entry.getIn(["data", "main", "image2", "alt"])
    }}
    image3={{
      image: getAsset(entry.getIn(["data", "main", "image3", "image"])),
      alt: entry.getIn(["data", "main", "image3", "alt"])
    }}
    description={entry.getIn(["data", "description"])}
    title={entry.getIn(["data", "title"])}
    heading={entry.getIn(["data", "heading"])}
    heading2={entry.getIn(["data", "heading2"])}
  />
);

ProjectPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default ProjectPagePreview;

import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "../styles/styles.scss";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuActive: false };
  }

  toggleMenu = () => {
    const { menuActive } = this.state;
    this.setState({ menuActive: !menuActive });
  };

  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query HeadingQuery {
            site {
              siteMetadata {
                title
                description
              }
            }
          }
        `}
        render={data => (
          <div className={`${!this.state.menuActive ? "" : "lock-screen"}`}>
            <main className="main">
              <Helmet>
                <html lang="en" />
                <title>{data.site.siteMetadata.title}</title>
                <meta
                  name="description"
                  content={data.site.siteMetadata.description}
                />

                <link
                  rel="apple-touch-icon"
                  sizes="180x180"
                  href="/img/apple-touch-icon.png"
                />
                <link
                  rel="icon"
                  type="image/png"
                  href="/img/favicon64px-black.png"
                  sizes="64x64"
                />

                <link
                  rel="mask-icon"
                  href="/img/safari-pinned-tab.svg"
                  color="#ff4400"
                />
                <meta name="theme-color" content="#fff" />

                <meta property="og:type" content="business.business" />
                <meta
                  property="og:title"
                  content={data.site.siteMetadata.title}
                />
                <meta property="og:url" content="/" />
                <meta property="og:image" content="/img/og-image.jpg" />
              </Helmet>
              <Header
                menuActive={this.state.menuActive}
                toggleMenu={this.toggleMenu}
              />
              <Navbar menuActive={this.state.menuActive} />
              <section>{children}</section>
            </main>
            <Footer />
          </div>
        )}
      />
    );
  }
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

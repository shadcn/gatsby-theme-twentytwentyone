import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"

import { useWpMenu } from "../hooks/use-wp-menu"
import { useWpSettings } from "../hooks/use-wp-settings"

interface LayoutProps {
  pageTitle?: string
  pageDescription?: string
  wrapperClassNames?: string[]
  children?: React.ReactNode
}

export function Layout({
  pageTitle,
  pageDescription,
  wrapperClassNames = [],
  children,
  ...props
}: LayoutProps) {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [primaryMenu] = useWpMenu({
    locations: ["PRIMARY"],
  })
  const [footerMenu] = useWpMenu({
    locations: ["FOOTER"],
  })

  const { generalSettings } = useWpSettings()
  const { pathname } = useLocation()

  wrapperClassNames = [
    "page",
    "page-template-default",
    "wp-embed-responsive",
    "is-light-theme",
    menuOpen && "primary-navigation-open lock-scrolling",
    ...wrapperClassNames,
  ]

  if (primaryMenu) {
    wrapperClassNames.push("has-main-navigation")
  }

  return (
    <>
      <Helmet>
        <title>{pageTitle || generalSettings.title}</title>
      </Helmet>
      <div className={wrapperClassNames.join(" ")} {...props}>
        <div id="page" className="site">
          <a className="skip-link screen-reader-text" href="#content">
            Skip to content
          </a>
          <header
            id="masthead"
            className="site-header has-title-and-tagline has-menu"
            role="banner"
          >
            <div className="site-branding">
              {generalSettings.title && (
                <p className="site-title">
                  <Link to="/">{generalSettings.title}</Link>
                </p>
              )}
              {generalSettings.description && (
                <p className="site-description">
                  {generalSettings.description}
                </p>
              )}
            </div>
            {primaryMenu && (
              <nav
                id="site-navigation"
                className="primary-navigation"
                role="navigation"
                aria-label="Primary menu"
              >
                <div className="menu-button-container">
                  <button
                    id="primary-mobile-menu"
                    className="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-controls="primary-menu-list"
                    aria-expanded="false"
                  >
                    <span className="dropdown-icon open">
                      Menu{" "}
                      <svg
                        className="svg-icon"
                        width="24"
                        height="24"
                        aria-hidden="true"
                        role="img"
                        focusable="false"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.5 6H19.5V7.5H4.5V6ZM4.5 12H19.5V13.5H4.5V12ZM19.5 18H4.5V19.5H19.5V18Z"
                          fill="currentColor"
                        ></path>
                      </svg>{" "}
                    </span>
                    <span className="dropdown-icon close">
                      Close{" "}
                      <svg
                        className="svg-icon"
                        width="24"
                        height="24"
                        aria-hidden="true"
                        role="img"
                        focusable="false"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 10.9394L5.53033 4.46973L4.46967 5.53039L10.9393 12.0001L4.46967 18.4697L5.53033 19.5304L12 13.0607L18.4697 19.5304L19.5303 18.4697L13.0607 12.0001L19.5303 5.53039L18.4697 4.46973L12 10.9394Z"
                          fill="currentColor"
                        ></path>
                      </svg>{" "}
                    </span>
                  </button>
                </div>
                <div className="primary-menu-container">
                  <ul id="primary-menu-list" className="menu-wrapper">
                    {primaryMenu.menuItems.nodes.map((node) => (
                      <li
                        key={node.id}
                        className={`menu-item ${
                          pathname === node.path && "current_page_item"
                        }`}
                      >
                        <Link to={node.path}>{node.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            )}
          </header>
          <div id="content" className="site-content">
            <div id="primary" className="content-area">
              <main id="main" className="site-main" role="main">
                {children}
              </main>
            </div>
          </div>
          <footer id="colophon" className="site-footer" role="contentinfo">
            {footerMenu && (
              <nav aria-label="Secondary menu" className="footer-navigation">
                <ul className="footer-navigation-wrapper">
                  {footerMenu.menuItems.nodes.map((node) => (
                    <li
                      key={node.id}
                      className={`menu-item ${
                        pathname === node.path && "current_page_item"
                      }`}
                    >
                      <Link to={node.path}>{node.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
            <div className="site-info">
              <div className="site-name">{generalSettings.title}</div>
              <div className="powered-by">
                Proudly powered by{" "}
                <a href="https://wordpress.org/">WordPress</a> and{" "}
                <a href="https://gatsbyjs.org">Gatsby</a>.
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

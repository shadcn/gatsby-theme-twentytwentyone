import { graphql } from "gatsby"

export const fragment = graphql`
  fragment WpMenuFragment on WpMenu {
    locations
    name
    slug
    count
    menuItems {
      nodes {
        id
        label
        title
        path
      }
    }
  }
`

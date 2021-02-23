import { graphql } from "gatsby"

export const fragment = graphql`
  fragment WpPostFragment on WpPost {
    id
    title
    slug
    content
    date(formatString: "MMMM DD, YYYY")
    excerpt
    author {
      node {
        name
      }
    }
    featuredImage {
      node {
        altText
        caption
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 1240
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
    categories {
      nodes {
        name
        slug
      }
    }
  }
`

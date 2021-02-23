import { graphql } from "gatsby"

export const fragment = graphql`
  fragment WpSettingsFragment on Wp {
    generalSettings {
      title
      description
    }
  }
`

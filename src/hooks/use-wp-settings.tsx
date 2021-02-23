import { graphql, useStaticQuery } from "gatsby"

export function useWpSettings() {
  const data = useStaticQuery(graphql`
    query {
      wp {
        ...WpSettingsFragment
      }
    }
  `)

  if (!data) return null

  return data.wp
}

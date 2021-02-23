import { graphql, useStaticQuery } from "gatsby"
import { applyFilters } from "../utils/apply-filters"

export function useWpMenu(filters) {
  const data = useStaticQuery(graphql`
    query {
      allWpMenu {
        nodes {
          ...WpMenuFragment
        }
      }
    }
  `)

  return applyFilters(data, filters, "slug")
}

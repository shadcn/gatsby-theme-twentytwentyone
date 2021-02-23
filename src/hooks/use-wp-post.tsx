import { graphql, useStaticQuery } from "gatsby"
import { applyFilters } from "../utils/apply-filters"

export function useWpPost(filters = {}) {
  const data = useStaticQuery(graphql`
    query {
      allWpPost(sort: { order: DESC, fields: date }) {
        nodes {
          ...WpPostFragment
        }
      }
    }
  `)

  return applyFilters(data, filters, "slug")
}

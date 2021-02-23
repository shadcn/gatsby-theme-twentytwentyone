import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Page } from "../components/page"

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      page: wpPage(slug: { eq: "home" }) {
        title
        content
      }
    }
  `)

  return <Page title={data.page.title} content={data.page.content} />
}

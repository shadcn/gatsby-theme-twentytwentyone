import * as React from "react"
import { graphql } from "gatsby"
import { Page } from "../components/page"
import { PagePosts } from "../components/page-posts"

interface WpPageProps {
  data: {
    page: {
      title: string
      content: string
      isPostsPage: boolean
      isFrontPage: boolean
    }
  }
}

export default function Component({ data }: WpPageProps) {
  const { page } = data

  // TODO: Filter out front page or redirect?
  // This is handled by pages/index.tsx for now.
  // Return null to prevent duplicate content.
  if (!page || page.isFrontPage) {
    return null
  }

  return page.isPostsPage ? (
    <PagePosts title={page.title} />
  ) : (
    <Page title={page.title} content={page.content} />
  )
}

export const query = graphql`
  query($id: String) {
    page: wpPage(id: { eq: $id }) {
      title
      content
      isPostsPage
      isFrontPage
    }
  }
`

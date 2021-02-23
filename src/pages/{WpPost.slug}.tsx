import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { Post } from "../components/post"
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"

interface PostPageProps {
  data: {
    post: {
      title: string
      content: string
      slug: string
      excerpt?: string
      featuredImage?: {
        node: {
          localFile: FileNode
          altText?: string
          caption?: string
        }
      }
      categories?: {
        nodes: {
          name: string
          slug: string
        }[]
      }
      date?: string
    }
  }
}

export default function Component({ data }: PostPageProps) {
  const { post } = data
  return (
    <Post
      title={post.title}
      content={post.content}
      slug={post.slug}
      date={post.date}
      categories={post.categories?.nodes}
      featuredImage={post.featuredImage.node}
    />
  )
}

export const query = graphql`
  query($id: String) {
    post: wpPost(id: { eq: $id }) {
      ...WpPostFragment
    }
  }
`

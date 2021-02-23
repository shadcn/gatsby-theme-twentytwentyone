import * as React from "react"
import { useWpPost } from "../hooks/use-wp-post"
import { Layout } from "./layout"
import { PostTeaser } from "./post-teaser"

export interface PageProps {
  title: string
}

export function PagePosts({ title }: PageProps) {
  const posts = useWpPost()

  return (
    <Layout wrapperClassNames={["blog"]} pageTitle={title}>
      {posts.map((post) => (
        <PostTeaser
          key={post.id}
          title={post.title}
          slug={post.slug}
          excerpt={post.excerpt}
          date={post.date}
          categories={post.categories?.nodes}
          featuredImage={post.featuredImage.node}
        />
      ))}
    </Layout>
  )
}

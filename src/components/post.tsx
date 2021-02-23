import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"
import * as React from "react"
import { Layout } from "./layout"
import { PostFeaturedImage } from "./post-featured-image"

export interface PostProps {
  title: string
  slug: string
  content?: string
  featuredImage?: {
    localFile: FileNode
    altText?: string
    caption?: string
  }
  categories?: {
    name: string
    slug: string
  }[]
  date?: string
}

export function Post({
  title,
  content,
  slug,
  featuredImage,
  date,
  categories,
}: PostProps) {
  return (
    <Layout
      pageTitle={title}
      wrapperClassNames={["singular", "single", "single-post"]}
    >
      <article
        className={`post type-post hentry entry ${
          featuredImage && "has-post-thumbnail"
        }`}
      >
        <header className="entry-header alignwide">
          {title && <h1 className="entry-title">{title}</h1>}

          {featuredImage && (
            <PostFeaturedImage
              file={featuredImage.localFile}
              alt={featuredImage.altText}
              caption={featuredImage.caption}
              slug={`/${slug}`}
            />
          )}
        </header>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="entry-content"
        />

        {(date || categories.length) && (
          <footer className="entry-footer default-max-width">
            {date && (
              <div className="posted-by">
                <span className="posted-on">
                  Published{" "}
                  <time className="entry-date published updated">{date}</time>
                </span>
              </div>
            )}
            {categories?.length ? (
              <div className="post-taxonomies">
                <span className="cat-links">
                  Categorized as{" "}
                  {categories.map((category, index) => (
                    <>
                      <a href="#" rel="category tag" id={category.slug}>
                        {category.name}
                      </a>
                      {index !== categories.length - 1 && ", "}
                    </>
                  ))}
                </span>
              </div>
            ) : null}
          </footer>
        )}
      </article>
    </Layout>
  )
}

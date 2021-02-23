import * as React from "react"
import { Link } from "gatsby"
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"

import { PostFeaturedImage } from "./post-featured-image"

export interface PostTeaserProps {
  title: string
  slug: string
  excerpt?: string
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

export function PostTeaser({
  title,
  slug,
  excerpt,
  featuredImage,
  date,
  categories,
}: PostTeaserProps) {
  return (
    <article className="post type-post status-publish format-standard hentry entry">
      <header className="entry-header">
        <h2 className="entry-title default-max-width">
          <Link to={`/${slug}`}>{title}</Link>
        </h2>
        {featuredImage && (
          <PostFeaturedImage
            file={featuredImage.localFile}
            alt={featuredImage.altText}
            caption={featuredImage.caption}
            slug={`/${slug}`}
          />
        )}
      </header>

      {excerpt && (
        <div
          className="entry-content"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      )}

      {(date || categories.length) && (
        <footer className="entry-footer default-max-width">
          {date && (
            <span className="posted-on">
              Published{" "}
              <time className="entry-date published updated">{date}</time>
            </span>
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
  )
}

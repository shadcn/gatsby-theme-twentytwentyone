import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"

export interface PostFeaturedImageProps {
  file: FileNode
  alt?: string
  caption?: string
  slug?: string
}

export function PostFeaturedImage({ file, alt, caption, slug }) {
  const image = getImage(file)

  if (!image) return null

  return (
    <figure className="post-thumbnail">
      <Link to={`/${slug}`} className="post-thumbnail-inner alignwide">
        <div className="wp-post-image">
          <GatsbyImage image={image} alt={alt} />
        </div>
      </Link>
      {caption && (
        <figcaption
          className="wp-caption-text"
          dangerouslySetInnerHTML={{ __html: caption }}
        />
      )}
    </figure>
  )
}

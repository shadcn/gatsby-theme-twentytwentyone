import * as React from "react"
import { useLocation } from "@reach/router"
import { Layout } from "./layout"

export interface PageProps {
  title: string
  content: string
}

export function Page({ title, content }: PageProps) {
  const { pathname } = useLocation()
  const isFrontPage = pathname === "/"

  return (
    <Layout pageTitle={!isFrontPage && title} wrapperClassNames={["singular"]}>
      <article className="page type-page hentry entry">
        {title && !isFrontPage && (
          <header className="entry-header alignwide">
            <h1 className="entry-title">{title}</h1>
          </header>
        )}
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="entry-content"
        />
      </article>
    </Layout>
  )
}

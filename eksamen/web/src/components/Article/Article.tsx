import { Link, routes } from '@redwoodjs/router'



interface Props {
  article: Post
}


const Article = ({article}: Props) => {
  return (
    <article>
      <header>
        <h1>
          <Link to={routes.article({id: article.id})}>{article.title}</Link>
        </h1>
      </header>
      <div>{article.body}</div>
      <div>{article.createdAt.slice(0, 10)}</div>
    </article>
  )
}

export default Article

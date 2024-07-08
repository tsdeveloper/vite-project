export function Post(props) {
  console.log(props);
  return (
    <article className="post">
      <header>
        <div className="author">
          <img
            className="avatar"
            src="https://avatars.githubusercontent.com/u/5727326?v=4"
          />
          <div className="author-info">
            <strong>{props.author}</strong>
            <span>{props.position}</span>
          </div>
        </div>

        <time title="09 de julho de 2024" datetime="2024-07-08 01:02">Publicado há 1h</time>
      </header>

      <div className="content">
        <p>{props.content}</p>
      </div>
    </article>
  );
}

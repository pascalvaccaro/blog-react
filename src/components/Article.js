import './Article.css';

function Article(props) {
  return (
    <article>
      <h2>{props.titre}</h2>
      <p className={props.isDissident ? 'red' : ''}>{props.auteur} - <i>{props.date}</i></p>
      {props.children}
    </article>
  );
}

export default Article;
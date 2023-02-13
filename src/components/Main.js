import Article from './Article.js';

function Main() {
  const titre3 = "Mars";
  const auteur3 = "Jimmy Carr";
  const date = new Date();
  return (
    <main>
      <Article titre="Soleil" auteur="Pascal Vaccaro" date="10/2/2023" isDissident={false}>
        <p>Marseille</p>
      </Article>
      <Article titre="Lune" auteur="John Smith" date="10/2/22" isDissident>
        <p>Paris</p>
      </Article>
      <Article titre={titre3 + " et Venus"} auteur={auteur3} date={date.toDateString()} isDissident={true}>
        <p>Toulouse</p>
      </Article>
    </main>
  );
}

export default Main;
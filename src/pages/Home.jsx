import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
      <h1>Trending Today</h1>
      <ul>
        <li>
          <Link to="/movies/:movieId">Lorem, ipsum dolor.</Link>
        </li>
      </ul>
    </section>
  );
}

export default Home;

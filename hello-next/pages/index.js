import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <Layout>
    <h1>Liste des appartements</h1>
    <ul>
      {props.data.map(el => (
        <li key={el.id}>
          <Link as={`/p/${el.id}`} href={`/post?id=${el.id}`}>
            <a>{el.slug}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('http://apirl.xyz/wp-json/wp/v2/appartments?_fields=id,title,slug,acf');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {data};
};

export default Index;
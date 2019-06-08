import Layout from '../components/MyLayout.js';
// import fetch from 'isomorphic-unfetch';

const Post = props => (
  <Layout>

    <h1>{props.data.title.rendered}</h1>
    <p>{props.data.acf.details_full}</p>
    <p>{props.data.acf.price}€/nuit</p>
    <p>Rating : {props.data.acf.rating}</p>
    <img src={props.data.acf.image} />

  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`http://apirl.xyz/wp-json/wp/v2/appartments/${id}?_fields=id,title,slug,acf`);
  const data = await res.json();

  console.log(`Fetched show: ${data.title.rendered}`);

  return { data };
};

export default Post;
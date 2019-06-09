import Layout from '../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';
import "../css/style.css";

const Post = props => (
    
  <Layout>
    <div className="title_appart">
        <img className="img_appart" src={props.data.acf.image} />
        <h1>{props.data.title.rendered}</h1>
        <p className="rating_title">{new Array(parseInt(props.data.acf.rating)).fill('⭐️️️️️')}</p>
        <p className="price_title">${props.data.acf.price} per night</p>
    </div>
    
    <p className="desc_appart" dangerouslySetInnerHTML={{__html: props.data.acf.details_full}}></p>
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
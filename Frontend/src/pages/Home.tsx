import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"

const Home = () => {
  const addToCardHandler=()=>{}
  return (
    <div className="home">
      <section></section>
      <h1>Latest Product
        <Link to={"/search"} className="findmore">More</Link>
      </h1>
      <main>
        <ProductCard productId="abc" name="Macbook" price={232} stock={12}
        handler={addToCardHandler}
        photo="https://m.media-amazon.com/images/I/61Izntd7yML._AC_SX450_.jpg"/>
      </main>
    </div>
  )
}

export default Home

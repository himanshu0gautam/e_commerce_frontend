import Carousel from '../components/Carousel/Carousel'
import PrefFooter from '../components/preFooter/PrefFooter'
import CategorySection from './CategorySection'
import FeaturesSupplier from "../components/features-Supplier/FeaturesSupplier";
const Home = () => {
  return (
    <div>
      <Carousel/>
      <CategorySection/>
      <FeaturesSupplier/>
      <PrefFooter/>
    </div>
  )
}

export default Home
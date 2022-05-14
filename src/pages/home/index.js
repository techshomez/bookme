import Featured from '../../components/feature';
import FeaturedProperty from '../../components/fproperties';
import Header from '../../components/header';
import PropertyList from '../../components/listing';
import Navbar from '../../components/navbar';
import './home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">
          Browse by property type
        </h1>
        <PropertyList />
        <h1 className="homeTitle">
          Homes guests love
        </h1>
        <FeaturedProperty />
      </div>
    </div>
    
  );
}

export default Home
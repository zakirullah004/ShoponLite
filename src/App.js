import './App.css';
import MyNavbar from './components/navbar';
import MyCarousel from './components/carousel';
import MyCategories from './components/categoriesCards';

//! importing images 
import giftCard from './images/shopon.pk-1741372708474/gift-card.png';
import grocery from './images/shopon.pk-1741372708474/grocery.png';
import fashion from './images/shopon.pk-1741372708474/fashion.png';
import beauty from './images/shopon.pk-1741372708474/beauty.png';
import homeDecor from './images/shopon.pk-1741372708474/home-decor-item.png';
import mobile from './images/shopon.pk-1741372708474/mobiles.png';
import electronics from './images/shopon.pk-1741372708474/electonics.png';


function App() {

  const categories = [
    { title: "Gift Cards", imglink: giftCard },
    { title: "Grocery", imglink: grocery },
    { title: "Fashion", imglink: fashion },
    { title: "Beauty", imglink: beauty },
    { title: "Home & Decor", imglink: homeDecor },
    { title: "Mobile & Tablets", imglink: mobile },
    { title: "Electronics", imglink: electronics }
  ];



  return(
    <>
    <MyNavbar/>
    <MyCarousel />
    <MyCategories data={categories} />
    </>
  )
}

export default App;

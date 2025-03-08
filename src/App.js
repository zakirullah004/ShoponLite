import './App.css';
import MyNavbar from './components/navbar';
import MyCarousel from './components/carousel';
import MyCategories from './components/categoriesCards';
import SalesCard from './components/salesCard';

//! importing images 
import giftCard from './images/shopon.pk-1741372708474/gift-card.png';
import grocery from './images/shopon.pk-1741372708474/grocery.png';
import fashion from './images/shopon.pk-1741372708474/fashion.png';
import beauty from './images/shopon.pk-1741372708474/beauty.png';
import homeDecor from './images/shopon.pk-1741372708474/home-decor-item.png';
import mobile from './images/shopon.pk-1741372708474/mobiles.png';
import electronics from './images/shopon.pk-1741372708474/electonics.png';


import sc1 from './images/shopon.pk-1741372708474/swl-28-scenes-21.jpg'
import sc2 from './images/shopon.pk-1741372708474/swl-38-1-1024x688.jpg'
import sc3 from './images/shopon.pk-1741372708474/SWL-24NewMain-396226_26edac8b-87fb-410d-b8b4-2b5089f74860.jpg'
import sc4 from './images/shopon.pk-1741372708474/images_pxkt-00.jpg'
import sc5 from './images/shopon.pk-1741372708474/download_05rq-1g.jpg'
import sc6 from './images/shopon.pk-1741372708474/download_-_2024-05-27T185348.480.jpeg'
import sc7 from './images/shopon.pk-1741372708474/13074bc992f42fb8b95b359a3a97fd6b.jpg_750x750.jpg_.png'
import sc8 from './images/shopon.pk-1741372708474/01_1_8c357341-83a8-49c7-8267-761cb48e7eab_grande.jpg'


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

  const saleProducts = [
    {
      imgSrc : sc1 ,
      name : "Decor Lights",
      oldPrice : 4499,
      newPrice : 3999
    },{
      imgSrc : sc2 ,
      name : "Ring Light",
      oldPrice : 4499,
      newPrice : 3999
    },{
      imgSrc : sc3 ,
      name : "Solar Wall Light",
      oldPrice : 5499,
      newPrice : 4999
    },{
      imgSrc : sc4 ,
      name : "Mini smart headset",
      oldPrice : 899,
      newPrice : 649
    },{
      imgSrc : sc5 ,
      name : "2.0v Fast Hdmi cable",
      oldPrice : 1000,
      newPrice : 800
    },{
      imgSrc : sc6 ,
      name : "ARAGAMI",
      oldPrice : 12000,
      newPrice : 10800
    },
    ,{
      imgSrc : sc7 ,
      name : "JBL M3 Speakers",
      oldPrice : 2099,
      newPrice : 1699
    },
    ,{
      imgSrc : sc8 ,
      name : "Girls Suit",
      oldPrice : 7599,
      newPrice : 6199
    },
  ]



  return(
    <>
    <MyNavbar/>
    <MyCarousel />
    <MyCategories data={categories} />
    <SalesCard data={saleProducts} />
    </>
  )
}

export default App;

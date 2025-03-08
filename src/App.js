import './App.css';
import MyNavbar from './components/navbar';
import MyCarousel from './components/carousel';
import MyCategories from './components/categoriesCards';
import SalesCard from './components/salesCard';
import MyGiftCard from './components/giftcards';
import Accessories from './components/Accessories';

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

import psCard from './images/shopon.pk-1741372708474/Playstation-card-from-shopon.jpg'
import googleCard from './images/shopon.pk-1741372708474/Google-Play-gift-card.jpg'
import iTuneCard from './images/shopon.pk-1741372708474/itune-gift-card.jpg'
import AmaCard from './images/shopon.pk-1741372708474/Amazon-gift-card.jpg'

//! importing mobile images 
import oppo from './images/shopon.pk-1741372708474/oppo-reno-12f-5g-pakistan-priceoye-i5ee8.jpg'
import oppoRe from './images/shopon.pk-1741372708474/funda_carbon_ultra_oppo_reno_2_01_negro_l.jpg'
import oppo1 from './images/shopon.pk-1741372708474/OppoA92020-b.jpg'
import iphon1 from './images/shopon.pk-1741372708474/iPhone-14-Mini.jpg'
import iphon2 from './images/shopon.pk-1741372708474/Apple-iPhone-14-Plus-6.jpg'
import iphon3 from './images/shopon.pk-1741372708474/Apple-iPhone-14-Plus.jpg'
import iphon4 from './images/shopon.pk-1741372708474/iPhone-14-Pro-Max-Silver.jpg'

import Xiaom from './images/shopon.pk-1741372708474/xiaomi-redmi-note-13-pro-pakistan-priceoye-8zikv-500x500.jpg'
import s25 from './images/shopon.pk-1741372708474/s25.jpg'
import s23 from './images/shopon.pk-1741372708474/samsung-galaxy-s23-ultra-pakistan-priceoye-ndm7s-500x500.jpg'
import s24 from './images/shopon.pk-1741372708474/samsung-galaxy-s24-ultra-pakistan-priceoye-q3c0e-500x500.jpg'
import s24U from './images/shopon.pk-1741372708474/download__4__li7m-sy.jpg'
import a55 from './images/shopon.pk-1741372708474/pk-galaxy-a55-5g-sm-a556-sm-a556ezkwpkd-thumb-541456407.png'
import a54 from './images/shopon.pk-1741372708474/pk-galaxy-a54-5g-sm-a546-sm-a546elgdpkd-538125029.png'
import a33 from './images/shopon.pk-1741372708474/samsung-galaxy-a33-pakistan-priceoye-ylulk.jpg'
import a04 from './images/shopon.pk-1741372708474/Samsung-Galaxy-A13-Awesom-Blue-7.png'
import zFlip from './images/shopon.pk-1741372708474/samsung-galaxy-z-flip-4-pakistan-priceoye-phrl2.jpg'




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
      imgSrc: sc1,
      name: "Decor Lights",
      oldPrice: 4499,
      newPrice: 3999
    }, {
      imgSrc: sc2,
      name: "Ring Light",
      oldPrice: 4499,
      newPrice: 3999
    }, {
      imgSrc: sc3,
      name: "Solar Wall Light",
      oldPrice: 5499,
      newPrice: 4999
    }, {
      imgSrc: sc4,
      name: "Mini smart headset",
      oldPrice: 899,
      newPrice: 649
    }, {
      imgSrc: sc5,
      name: "2.0v Fast Hdmi cable",
      oldPrice: 1000,
      newPrice: 800
    }, {
      imgSrc: sc6,
      name: "ARAGAMI",
      oldPrice: 12000,
      newPrice: 10800
    },
    , {
      imgSrc: sc7,
      name: "JBL M3 Speakers",
      oldPrice: 2099,
      newPrice: 1699
    },
    , {
      imgSrc: sc8,
      name: "Girls Suit",
      oldPrice: 7599,
      newPrice: 6199
    },
  ]

  const cardsGift = [
    { id: 1, img: psCard },
    { id: 2, img: googleCard },
    { id: 3, img: iTuneCard },
    { id: 4, img: AmaCard },
  ]

  const iphoneMobiles = [
    {
      name:"Oppo Reno 11 5g",
      img:oppo,
      price:96999
    },
    {
      name:"Oppo Reno 2F",
      img:oppoRe
    },
    {
      name:"Oppo A9",
      img:oppo1
    },
    {
      name:"Apple iphone 14",
      img:iphon1
    },
    {
      name:"Apple iphone 14 plus",
      img:iphon2
    },
    {
      name:"Apple iphone 14 Mini",
      img:iphon3
    },
    {
      name:"Apple iphone 14 Pro Max",
      img:iphon4,
      price:386999
    }
  ]

  const samsungMobiles = [
    {
      name:"Xiaomi Redmoi note 13 Pro",
      img:Xiaom,
      price:79999
    },
    {
      name:"Samsung galaxy S23 ultra",
      img:s23,
    },
    {
      name:"Samsung galaxy S24 ultra",
      img:s24U
    },
    {
      name:"Samsung galaxy ZFold ",
      img:zFlip,
      price:482999
    },
    {
      name:"Samsung galaxy A55",
      img:a55,
      price:130000
    },
    {
      name:"Samsung galaxy A54",
      img:a54,
      price:100000
    },
    {
      name:"Samsung galaxy A55",
      img:a33,
    },
    {
      name:"Samsung galaxy A04",
      img:a04,
      price:38999
    }
  ]




  return (
    <>
      <MyNavbar />
      <MyCarousel />
      <MyCategories data={categories} />
      <SalesCard data={saleProducts} />
      <MyGiftCard data={cardsGift} />
      <Accessories data={iphoneMobiles} />
      <Accessories data={samsungMobiles} />
    </>
  )
}

export default App;

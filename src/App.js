import './App.css';
import MyNavbar from './components/navbar';
import MyCarousel from './components/carousel';
import MyCategories from './components/categoriesCards';
import SalesCard from './components/salesCard';
import MyGiftCard from './components/giftcards';
import Accessories from './components/Accessories';
import MyFooter from './components/footer';

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

import elecImgTitle from './images/shopon.pk-1741372708474/electronics-collection.jpg'
import des from './images/shopon.pk-1741372708474/summer-new-arrials.jpg'

//! importing Electonic images

import tv1 from './images/shopon.pk-1741372708474/15492060143e6a5a507dc420622ffc6e9b00a69c9d.jpg'
import tv2 from './images/shopon.pk-1741372708474/ezgif.com-gif-maker-8.jpg'
import tv3 from './images/shopon.pk-1741372708474/43X755.jpg'
import tv4 from './images/shopon.pk-1741372708474/sss.jpg'
import tv5 from './images/shopon.pk-1741372708474/32.jpg'
import tv6 from './images/shopon.pk-1741372708474/40R352.jpg'
import sink from './images/shopon.pk-1741372708474/61se8BZarSL.jpg'
import candy from './images/shopon.pk-1741372708474/candy.jpg'
import dis from './images/shopon.pk-1741372708474/gallery2.jpg'
import wash from './images/shopon.pk-1741372708474/download_qdz4-yj.jpg'
import griz from './images/shopon.pk-1741372708474/download_n2v2-91.jpg'
import gas from './images/shopon.pk-1741372708474/download_4xnf-js.jpg'
import wpoint from './images/shopon.pk-1741372708474/westpoint_insect_killer_wf-7108_15000_2_6.jpg'
import oven from './images/shopon.pk-1741372708474/10.jpg'
import ac from './images/shopon.pk-1741372708474/mega_t_30.png'
import stabli from './images/shopon.pk-1741372708474/a-16d-universal__16549_zoom.jpg'
import Fridge from './images/shopon.pk-1741372708474/download_tkg8-ck.jpg'

//! --------------------------------

import men from './images/shopon.pk-1741372708474/MEN.jpg'
import women from './images/shopon.pk-1741372708474/women.jpg'
import kids from './images/shopon.pk-1741372708474/kids.jpg'
import shoes from './images/shopon.pk-1741372708474/dd.jpg'

//! -------------------------------

import game1 from './images/shopon.pk-1741372708474/con1.jpg'
import game2 from './images/shopon.pk-1741372708474/t49.jpg'
import game3 from './images/shopon.pk-1741372708474/WhatsApp_Image_2021-10-16_at_3.04.04_PM.jpeg'
import game4 from './images/shopon.pk-1741372708474/WhatsApp_Image_2021-10-16_at_2.34.27_PM__1__68gq-rz.jpeg'
import game5 from './images/shopon.pk-1741372708474/WhatsApp_Image_2021-10-16_at_3.04.06_PM.jpeg'
import game6 from './images/shopon.pk-1741372708474/1__36_-1000x1000.jpg'

//! --------------------------------

import lap1 from './images/shopon.pk-1741372708474/4zu3_Dell_Vostro_15_3558__19542_zoom.jpg'
import lap2 from './images/shopon.pk-1741372708474/4zu3_HP_Probook_645_G4.jpg'
import lap3 from './images/shopon.pk-1741372708474/62edce24d0278fd051847a20033990ef.jpg'
import lap4 from './images/shopon.pk-1741372708474/419724579-800x600.jpeg'
import lap5 from './images/shopon.pk-1741372708474/5590-3.jpg'
import lap6 from './images/shopon.pk-1741372708474/copy-1--1540-14392-170223102308-17888-0-280823093555621.jpg'
import lap7 from './images/shopon.pk-1741372708474/Dell-Latitude-7280.jpg'
import lap8 from './images/shopon.pk-1741372708474/Dell-Latitude-7480-1.jpg'
import lap9 from './images/shopon.pk-1741372708474/dsa-300x300.jpg'
import lap10 from './images/shopon.pk-1741372708474/E5470-1.jpg'
import lap11 from './images/shopon.pk-1741372708474/images.jpg'
import lap12 from './images/shopon.pk-1741372708474/P8agK8Aifu.jpg'


// ! ------------------------------------
import setDecor from './images/shopon.pk-1741372708474/decore-roome.jpg'

import dec1 from './images/shopon.pk-1741372708474/791d1b218a7031a53b50e71e5d5a0739.jpg'
import dec2 from './images/shopon.pk-1741372708474/c5f9a761931a392cb5bb51948825400e.jpg'
import dec3 from './images/shopon.pk-1741372708474/ca08bcf7394bd53d4b079902f5062b73.jpg'
import dec4 from './images/shopon.pk-1741372708474/e896078edc1035491da7b1b93302cf8b.jpg'
import dec5 from './images/shopon.pk-1741372708474/fd26b7957f67b1638286ae62fa990288.jpg'
import dec6 from './images/shopon.pk-1741372708474/28e5978720e5f09d6cb603e48d02a101.jpg'
import dec7 from './images/shopon.pk-1741372708474/Revolving-8-Pcs-Spice-Rack-Tower-Kitchen-Masala-Jar-rs-1500-_1_360x.jpg'
import dec8 from './images/shopon.pk-1741372708474/1-_176_360x.jpg'
import dec9 from './images/shopon.pk-1741372708474/dde953cc-29cd-47ce-84df-bf02d9aa6766_1_360x.jpg'

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

  
  const fashionCards = [
    { id: 1, img: men },
    { id: 2, img: women },
    { id: 3, img: kids },
    { id: 4, img: shoes },
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

  const electronicItems = [
    {
      name : "Ecostar TV",
      price:74000,
      img:tv1
    },
    {
      name : "Samsung UHD TV",
      price:152999,
      img:tv2
    },
    {
      name : "Sony LED TV",
      price:161405,
      img:tv3
    },
    {
      name : "Full HD TV",
      price:139460,
      img:tv4
    },
    {
      name : "Sony HD TV",
      price:49685,
      img:tv5
    },
    {
      name : "Sony FHD TV",
      price:77615,
      img:tv6
    },
    {
      name:"Electronic Sink",
      price:4490,
      img:sink
    },
    {
      name:"Prtable Cotton Candy",
      price:8990,
      img:candy
    },
    {
      name:"MIDAS Dispanser ",
      price:44490,
      img:dis
    },
    {
      name:"Washing Machine",
      price:114155,
      img:wash
    },
    {
      name:"Gas Geyser ",
      price:50240,
      img:griz
    },
    {
      name:"Dawlance HOB",
      price:65500,
      img:gas
    },
    {
      name:"West Point Insect Killer",
      price:17999,
      img:wpoint
    },
    {
      name:"Microwave Oven",
      price:42999,
      img:oven
    },
    {
      name:"Dawlance AC",
      price:160000,
      img:ac
    },
    {
      name:"Universal Stabilizer",
      price:12999,
      img:stabli
    },
    {
      name:"Dawlance Refrigerator",
      price:96200,
      img:Fridge
    }
  ]

  const popularGames = [
    {
      id : 1,
      img : game1
    },
    {
      id : 1,
      img : game2
    },
    {
      id : 1,
      img : game3
    },
    {
      id : 1,
      img : game4
    },
    {
      id : 1,
      img : game5
    },
    {
      id : 1,
      img : game6
    }
  ]

  let laptops1 = [
    {
      id:1,
      img : lap1,
      name:"DELL 5590 core i5",
      price : 75000
    },
    {
      id:2,
      img : lap2,
      name:"DELL 5580 core i5 7th",
      price : 75000
    },
    {
      id:3,
      img : lap3,
      name:"HP 645 G4 ryzen",
      price : 90000
    },
    {
      id:4,
      img : lap4,
      name:"HP 840 cire i5 8th",
      price : 125000
    },
    {
      id:5,
      img : lap5,
      name:"DELL 5590 core i5",
      price :5000
    },
    {
      id:6,
      img : lap6,
      name:"VAIO 5590 core i7",
      price :13000
    }
  ]

  let laptops2 = [
    {
      id:7,
      img : lap7,
      name:"DELL 7390 core i5",
      price : 59990
    },
    {
      id:8,
      img : lap8,
      name:"HP core i5 7th",
    },
    {
      id:9,
      img : lap9,
      name:"HP 645 G4 ryzen",
    },
    {
      id:10,
      img : lap10,
      name:"DELL 840 cire i5 8th",
      price : 115000
    },
    {
      id:11,
      img : lap11,
      name:"DELL 5590 core i5",
      price :29990
    },
    {
      id:12,
      img : lap12,
      name:"VAIO 5590 core i7",
    }
  ]

  let decor = [
    {
      id : 1,
      img : dec1,
      name : "tijarat Artifical Grass",
      price:3999
    },
    {
      id : 2,
      img : dec2,
      name : "Artifical Plants set of 4",
      price:999
    },{
      id : 3,
      img : dec3,
      name : "Artificial Flowers",
      price:1399
    },
    {
      id : 4,
      img : dec4,
      name : "Wooden Wall Clock",
    },
    {
      id : 5,
      img : dec5,
      name : "wall Clock",
      price:1999
    },
    {
      id : 6,
      img : dec6,
      name : "The Ride wall Clock",
      price:1999
    },
    {
      id : 7,
      img : dec7,
      name : "Kitchen Masala Jar",
      price:2999
    },
    {
      id : 8,
      img : dec8,
      name : "Hanging Basket",
      price:2899
    },
    {
      id : 9,
      img : dec9,
      name : "Glass Spice Jar(3)",
      price:3399
    },
    
  ]

  const usefulLinksData = ["About us", "Gift certificates", "Our brands", "Sitemap", "Blog"];
  const myAccount = ["Sign in", "Create Accout"];
  const customer = ["Payment & Shipping", "Privacy Policy","Terms and Conditions","FAQ's","Returns & Exchange","About your Order","Wishlist","Comparision List"];
  const contact = [", 15E Officers Colony Bosan Road Multan", "03336198169","Mon-Sun 09:00 AM to 11:30 PM","admin@shopon.pk","View on map"];
  const keppinTouch = ["Facebook","Instagram","Twitter","Youtube"];

  return (
    <>
      <MyNavbar />
      <MyCarousel />
      <MyCategories data={categories} />
      <SalesCard data={saleProducts} />
      <MyGiftCard data={cardsGift} />

      <h3 className='text-center' style={{color:"#363636",fontSize:"24px",fontWeight:"bold",marginTop:"50px"}}>MOBILE & ACCESSORIES</h3>
      <Accessories data={iphoneMobiles} />
      <Accessories data={samsungMobiles} />

      <div  className='mx-auto text-center'>
      <img src={elecImgTitle} alt="" />
      <h3 className='text-center' style={{color:"#363636",fontSize:"24px",fontWeight:"bold",marginTop:"10px"}}>ELECTRONICS</h3>
      </div>
      <Accessories data={electronicItems} disableScroll={true} />

      <div className='mx-auto text-center'>
      <h3 className='text-center' style={{color:"#363636",fontSize:"24px",fontWeight:"bold",marginTop:"10px"}}>FASHION</h3>
      <img src={des} alt="" />
      </div>

      <MyGiftCard data={fashionCards} />

      <h3 className='text-center' style={{color:"#363636",fontSize:"24px",fontWeight:"bold",marginTop:"10px"}}>POPULAR VIDEO GAMES</h3>
      <Accessories data={popularGames} />

      <h3 className='text-center' style={{color:"#363636",fontSize:"24px",fontWeight:"bold",marginTop:"10px"}}>Laptops</h3>
      <Accessories data={laptops1} />
      <Accessories data={laptops2} />


      <div  className='mx-auto text-center'>
      <img src={setDecor} alt="" />
      <h3 className='text-center' style={{color:"#363636",fontSize:"24px",fontWeight:"bold",marginTop:"10px"}}>HOME AND DECOR</h3>
      </div>
      <Accessories data={decor} disableScroll={true} />

      <MyFooter keepin={keppinTouch} customer={customer} contact={contact} myAccout={myAccount} usefulLinks={usefulLinksData} />

    </>
  )
}

export default App;

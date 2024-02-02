import { FaUser, FaCartShopping, FaPaintRoller } from "react-icons/fa6";
import { HiOutlineSearch } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa";
import { TfiHummer,TfiYoutube  } from "react-icons/tfi";
import { MdElectricalServices, MdOutlinePlumbing, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { GiDrill } from "react-icons/gi";
import { TiEye } from "react-icons/ti";
import { FaFacebookF, FaTwitter } from "react-icons/fa";



import './App.css';
import logo from './image/logo.png';
import slider from './image/slider1.png';
import photo1 from './image/banner1.png';
import photo2 from './image/banner2.png';
import pro_img1 from './image/pro_img1.png';
import pro_img2 from './image/pro_img2.png';
import pro_img3 from './image/pro_img3.png';
import pro_img4 from './image/pro_img4.png';
import store from './image/store.png';
import pro_img5 from './image/pro_img5.png';
import pro_img6 from './image/pro_img6.png';
import slider2 from './image/slider4.png';
import sliderImg from './image/slider_img.png';
import sliderImg2 from './image/slider_img2.png';
import sliderImg3 from './image/slider_img3.png';
import sliderImg4 from './image/slider_img4.png';
import sliderImg5 from './image/slider_img5.png';
import sliderImg6 from './image/slider_img6.png';

function App() {
  return (
    <div>
      {/* Top Info start */}
      <div className="topinfo">
        <div className="container">
          <div className="flex">
            <div>
              <ul className="d-flex userAct">
                <li><a href=''><FaUser className="userIcon"></FaUser> My account</a> </li>
              </ul>
            </div>
            <div className="social">
              <div className="d-flex">
                <HiOutlineSearch style={{ color: "F5C042", margin: "auto 15px" }}></HiOutlineSearch>
                <div className="shoping">
                  <FaCartShopping className="troli"></FaCartShopping> <span>0</span>
                </div>
                <div className="usd">
                  <span>USD <FaAngleDown className="down"></FaAngleDown></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Top Info end */}

      {/* main menu strat*/}

      <header>
        <div className="container">
          <div className="flex">
            <div className="logo">
              <img src={logo}></img>
            </div>
            <nav>
              <ul className="main_menu d-flex">
                <li><a href="">HOME</a></li>
                <li><a href="">ABOUT US</a></li>
                <li><a href="">CATALOG</a></li>
                <li><a href="">COLLECTIONS</a></li>
                <li><a href="">BLOG</a></li>
                <li><a href="">CONTACT US</a></li>
              </ul>
            </nav>
          </div>

        </div>
      </header>
      {/* main menu end*/}

      {/* slider start*/}
      <div class="item">
        <img src={slider} className="slider"></img>

        <div class="contact">
          <h2>ONE SHOP</h2>
          <p>FOR ALL YOU BULDING NEEDS</p>
          <div class="button">READ MORE</div>
        </div>
      </div>

      {/* slider end*/}
      {/* tool start */}
      <section>
        <div className="flex">
          <div className="width">
            <div className="tool_par">
              <div className="tool">
                <TfiHummer className="hummer"></TfiHummer>
              </div>
              <h3>Hand Tools</h3>
            </div>
          </div>
          <div className="width">
            <div className="tool_par">
              <div className="tool">
                <FaPaintRoller className="hummer"></FaPaintRoller>
              </div>
              <h3>Paint Tools</h3>
            </div>
          </div>
          <div className="width">
            <div className="tool_par">
              <div className="tool">
                <MdElectricalServices className="hummer"></MdElectricalServices>
              </div>
              <h3>Electircticion</h3>
            </div>
          </div>
          <div className="width">
            <div className="tool_par">
              <div className="tool">
                <HiMiniWrenchScrewdriver className="hummer"></HiMiniWrenchScrewdriver>
              </div>
              <h3>Fastenrs</h3>
            </div>
          </div>
          <div className="width">
            <div className="tool_par">
              <div className="tool">
                <GiDrill className="hummer"></GiDrill>
              </div>
              <h3>Power Tools</h3>
            </div>
          </div>
          <div className="width">
            <div className="tool_par">
              <div className="tool">
                <MdOutlinePlumbing className="hummer"></MdOutlinePlumbing >
              </div>
              <h3>Plumbing Tools</h3>
            </div>
          </div>
        </div>
      </section>

      {/* tool end */}

      {/* discount start */}

      <div className="space"></div>
      <section>
        <div className="flex">
          <div className="Img_par">
            <div className="txt_par">
              <img src={photo1} className="photo"></img>
              <div className="txt">
                <h3>Save UP</h3>
                <h4>to <span style={{ color: "#F5C042" }}>20%</span></h4>
                <p className="paregraf">The offer covers all of our power tools selections, regardless of the item's price before the discount!</p>
                <button>SHOP NOW</button>
              </div>
            </div>

          </div>
          <div className="Img_par">
            <div className="txt_par">
              <img src={photo2} className="photo"></img>
              <div className="txt">
                <h3>Plumbing Tools</h3>
                <h4>are on a 25% SALE</h4>
                <p className="paregraf">This means that if you'll be quick enough to take advantage of the offer, you will be saving tons of money!</p>
                <button>SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* discount end */}

      {/* products start */}
      <div className="container">
        <div className="flex">
          <div>
            <h3 className="pro_txt">Feature Products</h3>
          </div>
          <div className="left_arrow">
            <MdKeyboardArrowLeft className="LEFT"></MdKeyboardArrowLeft>
            <MdKeyboardArrowRight className="RIGHT"></MdKeyboardArrowRight>
          </div>
        </div>
        <div className="flex">
          <div>
            <div className="slider2">
              <img src={pro_img1} className="pro_img"></img>
              {/* <div className="eye">
                <TiEye className="eyeIcon"></TiEye>
              </div> */}
            </div>
            <div className="pro_pare">
              <p>PORTER-CABLE PIN138 23-Gaug...</p>
              <h4>$120-$135.00</h4>
            </div>
          </div>
          <div>
            <div className="slider2">
              <img src={pro_img2} className="pro_img"></img>
            </div>
            <div className="pro_pare">
              <p>LGI Premium Watch Repair Ki...</p>
              <h4>$90</h4>
            </div>
          </div>
          <div>
            <div className="slider2">
              <img src={pro_img3} className="pro_img"></img>
            </div>
            <div className="pro_pare">
              <p>DEWALT DCK290L2 20-Volt MAX...</p>
              <h4>89.00</h4>
            </div>
          </div>
          <div>
            <div className="slider2">
              <img src={pro_img4} className="pro_img"></img>
            </div>
            <div className="pro_pare">
              <p>POWERTEC BS900 Band Saw 9-Inch</p>
              <h4>$90</h4>
            </div>
          </div>
        </div>

      </div>
      {/* products end */}
      {/* about our store */}

      <div className="space"></div>

      <div className="store">
        <img src={store} className="storeImg"></img>
        <div className="container">
          <div className="storeTxt">
            <h1>About Our Store</h1>
            <p>Welcome to the most reliable building store. We know what a mistake may cost, and this is why we only provide the most reliable building materials for you. What do we offer? In past times there was a rule that every...</p>
            <div class="button">READ MORE</div>
          </div>
        </div>
      </div>
      {/* about our end */}



      {/* On Sale start */}
      <div className="space"></div>
      <div className="container">
        <div className="flex">
          <div>
            <h3 className="pro_txt">Feature Products</h3>
          </div>
          <div className="left_arrow">
            <MdKeyboardArrowLeft className="LEFT"></MdKeyboardArrowLeft>
            <MdKeyboardArrowRight className="RIGHT"></MdKeyboardArrowRight>
          </div>
        </div>
        <div className="flex">
          <div>
            <div className="slider2">
              <img src={pro_img1} className="pro_img"></img>
              {/* <div className="eye">
                <TiEye className="eyeIcon"></TiEye>
              </div> */}
            </div>
            <div className="pro_pare">
              <p>PORTER-CABLE PIN138 23-Gaug...</p>
              <h4>$120-$135.00</h4>
            </div>
          </div>
          <div>
            <div className="slider2">
              <img src={pro_img2} className="pro_img"></img>
            </div>
            <div className="pro_pare">
              <p>LGI Premium Watch Repair Ki...</p>
              <h4>$90</h4>
            </div>
          </div>
          <div>
            <div className="slider2">
              <img src={pro_img5} className="pro_img"></img>
            </div>
            <div className="pro_pare">
              <p>DEWALT DCK290L2 20-Volt MAX...</p>
              <h4>89.00</h4>
            </div>
          </div>
          <div>
            <div className="slider2">
              <img src={pro_img6} className="pro_img"></img>
            </div>
            <div className="pro_pare">
              <p>POWERTEC BS900 Band Saw 9-Inch</p>
              <h4>$90</h4>
            </div>
          </div>
        </div>

      </div>
      {/* On Sale end */}

      {/* bright house start */}
      <div className="space"></div>
      <div className="sliderReac">
        <img src={slider2} className="slider9"></img>
        <div className="container">
          <div className="flex">
            <div className="new_poision">
              <div className="poision">
                <img src={sliderImg}></img>
              </div>
            </div>
            <div className="new_poision">
              <div className="poision">
                <img src={sliderImg2}></img>
              </div>
            </div>
            <div className="new_poision">
              <div className="poision">
                <img src={sliderImg3}></img>
              </div>
            </div>
            <div className="new_poision">
              <div className="poision">
                <img src={sliderImg4}></img>
              </div>
            </div>
            <div className="new_poision">
              <div className="poision">
                <img src={sliderImg5}></img>
              </div>
            </div>
            <div className="new_poision">
              <div className="poision">
                <img src={sliderImg6}></img>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* bright house end*/}

      {/* last start */}
      <div className="space"></div>
      <div className="container">
        <div className="flex">
          <div>
            <h5>Information</h5>
            <ul className="list">
              <li><a href="">Home</a></li>
              <li><a href="">Search</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
            <div className="book">
              <FaFacebookF className="face"></FaFacebookF>
              <FaTwitter className="face"></FaTwitter>
              <TfiYoutube className="face"></TfiYoutube>
            </div>
          </div>
          <div>
            <h5>My Account</h5>
            <ul className="list">
              <li><a href="">Air Intakes</a></li>
              <li><a href="">Body Kits</a></li>
              <li><a href="">Brake Systems</a></li>
              <li><a href="">Car Seats</a></li>
              <li><a href="">View all collections</a></li>
            </ul>
          </div>
          <div>
            <h5>Our Shop</h5>
            <ul className="list">
              <li><a href="">Address</a></li>
              <li><a href="">4578 Marmora St, San Francisco D04 89GR</a></li>
              <li><a href="">Phone</a></li>
              <li><a href="">1-800-1234-567</a></li>
            </ul>
          </div>
          <div>
            <h5>Newsletter</h5>
            <ul className="list">
              <li><a href="">Join our mailing list</a></li>
              <input type="text" placeholder="Enter Your Email"></input>
            </ul>
          </div>
        </div>
      </div>
      <div className="space"></div>
      {/* last end*/}

      {/* footer start */}
      <div className="buttom">
          <div className="container">
            <div className="copyright">
              <div className="allright">
                <p>©Kardone. Powered by Shopify</p>
              </div>
            </div>
          </div>
        </div>

      {/* footer end */}
    </div>
  );
}

export default App;

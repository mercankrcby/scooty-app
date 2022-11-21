import logo from './logo.svg';
import trail from './thumbnail.jpeg';
import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import BikeScooterIcon from '@mui/icons-material/BikeScooter';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import ListAltIcon from '@mui/icons-material/ListAlt';

function App() {
  return (
    <div className="App">
      <div class="header-info">
        <MenuIcon></MenuIcon>
        <div class="scooty-app-name">Scooty</div>
        <div class="account-circle-icon">
          <AccountCircleIcon></AccountCircleIcon>
        </div>
      </div>
      <div class ="rent-summary">
        <div class="rent-summary-text">Kiralama Özeti</div>
        <div class="summary">
          <div class="date-summary">
            <div class="today-summary">
              <HomeIcon></HomeIcon>
              <div class="today-text"> Bugün</div>
              <div class="amount">37.02 TL</div>
            </div>
            <div class="week-summary">
              <BusinessCenterIcon></BusinessCenterIcon>
              <div class="week-text"> Bu Hafta</div>
              <div class="amount">97.02 TL</div>
            </div>
            
          </div>
          <div class = "scooter-map">
              <img src={trail} className="app-map" alt="logo" />
            </div>
        </div>
      </div>

      <div class="find-rent">
        <div class="rent-summary-text">Scooter Kirala</div>
        <div class="find-past-black">
          <div class= "find-close">
            <FindReplaceIcon></FindReplaceIcon>
            <div>Yakınımda Bul</div>
          </div>
          <div class="seperator"></div>
          <div class="location-past">
            <ShareLocationIcon></ShareLocationIcon>
            <div>Konum Geçmişi</div>
          </div>
          <div class="seperator"></div>
          <div class="black-list">
            <ListAltIcon></ListAltIcon>
            <div>Kara Liste</div>
          </div>
        </div>
      </div>

      <div class="last-rent-summary">
        <div class="rent-summary-text">Son Kiralama Özeti</div>
        <div>21 Kasım , 2022</div>
        <div class="last-rent-summary-alt">
          <div class= "power-usage">
            <div class="wh-km">35.6</div>
            <div class="short-wh">wh/km</div>
            <div class="last-rent-desc">Güç Sarfiyatı</div>
          </div>
          <div class="seperator"></div>
          <div class="time">
            <div class="wh-km">16</div>
            <div class="short-wh">Dakika</div>
            <div class="last-rent-desc">Süre</div>
          </div>
          <div class="seperator"></div>
          <div class="max-speed">
            <div class="wh-km">42</div>
            <div class="short-wh">km/h</div>
            <div class="last-rent-desc">Maks. Hızı</div>
          </div>
        </div>
      </div>

      <button class="button">Hemen Kirala</button>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header> */}
    </div>
  );
}

export default App;

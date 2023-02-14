import './App.css';
import MainLineSearch from './components/MainLineSearch';
import ServiceLinks from './components/ServiceLinks';
import SearchLine from './components/SearchLine';
import Upper from './components/Upper';
// import Item from './components/Item';

function App() {
  const AppLogo = () => <img src='https://avatars.mds.yandex.net/get-bunker/135516/b5d842dd0e03a26c54749891dd1b0876edbae05d/orig' alt="MainLogo" className="AppLogo" />;
  const ContentArea = (props) => <main className="MainContent">{ props.children }</main>

  const SearchSnippet = ({ stringToSaearch }) => (
    <div className="SearchSnippet">
      <span className="SearchSnippetText">Найдется все, например </span>
      <span className="StringToSearch">{ stringToSaearch }</span>
    </div>)
  
  const AdsBanner = ({ bannerData }) => (<img src={bannerData.url} alt={bannerData.text} />);

  return (
    <div className="App">
      <Upper />
      <ContentArea>
        <div className="LogoContainer">
          <AppLogo />
        </div> 
        <div className="InfoArea">
          <MainLineSearch>
            <ServiceLinks>
              <a href={document.location.href} className="serviceLink">Видео</a>
              <a href={document.location.href} className="serviceLink">Картинки</a>
              <a href={document.location.href} className="serviceLink">Новости</a>
              <a href={document.location.href} className="serviceLink">Карты</a>
              <a href={document.location.href} className="serviceLink">Маркет</a>
              <a href={document.location.href} className="serviceLink">Переыводчик</a>
              <a href={document.location.href} className="serviceLink">Эфир</a>
              <a href={document.location.href} className="serviceLink">ещё</a>
            </ServiceLinks>
            <SearchLine />
            <SearchSnippet stringToSaearch={'фаза луны сегодня'}/>
            <AdsBanner bannerData={{url: '#', text: 'banner Text',}} />
          </MainLineSearch>
        </div>
      </ContentArea>
    </div>
  );
}

export default App;

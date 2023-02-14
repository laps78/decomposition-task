import Item from "./Item";

function Upper(props) {
  const UpperLeftCol = ({ children }) => (<div className="upper-left-col">{children}</div>);
  const UpperRightCol = ({ child }) => (<div className="upper-right-col">{child}</div>)
  const UpperMenuLine = ({ children }) => (<div className="UpperMenuLine">{children}</div>);
  
  return (
    <div сlassName="Upper">
      <UpperLeftCol>
        <UpperMenuLine>
          <a href={document.location.href} сlassName="UpperMenuMainItem">Сейчас в СМИ </a>
          <a href={document.location.href} сlassName="UpperMenuItem">в Германии </a>
          <a href={document.location.href} сlassName="UpperMenuItem">Рекомендуем </a>
          <span className="currentDate">31 июля, среда 02:32</span>
        </UpperMenuLine>
        <Item
          type="UpperLeftColItem"
          iconUrl="https://cdn-icons-png.flaticon.com/512/3658/3658773.png"
          textContent="Очередная текстовая новость-ссылка"
          link={document.location.href}
        />
        <Item
          type="UpperLeftColItem"
          iconUrl="https://cdn-icons-png.flaticon.com/512/3658/3658773.png"
          textContent="Очередная текстовая новость-ссылка"
          link={document.location.href}
        />
        <Item
          type="UpperLeftColItem"
          iconUrl="https://cdn-icons-png.flaticon.com/512/3658/3658773.png"
          textContent="Очередная текстовая новость-ссылка"
          link={document.location.href}
        />
        <Item
          type="UpperLeftColItem"
          iconUrl="https://cdn-icons-png.flaticon.com/512/3658/3658773.png"
          textContent="Очередная текстовая новость-ссылка"
          link={document.location.href}
        />
        <Item
          type="UpperLeftColItem"
          iconUrl="https://cdn-icons-png.flaticon.com/512/3658/3658773.png"
          textContent="Очередная текстовая новость-ссылка"
          link={document.location.href}
        />
        <Item
          type="UpperLeftColItem"
          iconUrl="https://cdn-icons-png.flaticon.com/512/3658/3658773.png"
          textContent="Очередная текстовая новость-ссылка"
          link={document.location.href}
        />
      </UpperLeftCol>
      <UpperRightCol>
        <Item
          type="UpperRightColItem"
          iconUrl="https://cdn-icons-png.flaticon.com/512/3658/3658773.png"
          textContent="Текст ссылки на новость в правом верхнем контейнере!"
          link={document.location.href}
        />
      </UpperRightCol>
    </div>  
  )
}

export default Upper;
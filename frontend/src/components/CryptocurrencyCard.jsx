import { Card } from 'antd';

function CryptocurrencyCard(props) {
  const {currency} = props  
    return (
      <div>
        <Card
            title={
                <div className="flex items-center gap-3">
                    <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`}></img>
                    <span>{currency.name}</span>
                </div>
            }
            bordered={false}
            style={{
            width: 300,
            }}
        >
            <p>Текущая цена: {Math.round(currency.quote.USD.price)}</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
        
      </div>
    )
  }
  
  export default CryptocurrencyCard
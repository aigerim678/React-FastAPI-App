import { Card } from 'antd';



function formatNumber(num) {
  if (num >= 1e12) {
    return (num / 1e12).toFixed(2) + 'T'; // Триллионы
  } else if (num >= 1e9) {
    return (num / 1e9).toFixed(2) + 'B'; // Миллиарды
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(2) + 'M'; // Миллионы
  } else {
    return num.toFixed(2); // Если меньше миллиона
  }
}

function CryptocurrencyCard(props) {
  const {currency} = props  
  const  market_cap = currency.quote.USD.market_cap.toFixed(2)
  const price = Math.round(currency.quote.USD.price)
  const percent_change_24h = currency.quote.USD.percent_change_24h.toFixed(2)
    return (
      <div>
        <Card
            className='border-gray-500 border-4 p-8'
            title={
                <div className="flex items-center gap-3">
                    <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`}></img>
                    <span style={{ fontSize: '24px' }}>{currency.name}</span>
                </div>
            }
            
            style={{
              width: '100%',       
              height: 'auto',           
              fontSize: '1.25rem',      
              maxWidth: '600px',        
              padding: '2rem', 
            }}
        >
            <p>Текущая цена: {price}</p>
            <p>Изменение цены за 24 часа: {percent_change_24h}%</p>
            <p>Текущая капитализация: ${formatNumber(market_cap)}</p>
        </Card>
        
      </div>
    )
  }
  
  export default CryptocurrencyCard
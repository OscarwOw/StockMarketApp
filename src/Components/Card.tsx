import React from 'react'

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({companyName, ticker, price}: Props) : JSX.Element => {
  return (
    <div className='card'>Card
        <img src="https://www.savour.cz/img/post/9-5d2390fe0421b.jpg" alt="Image" />
    
    <div className='details'>
        <h2>{companyName}({ticker})</h2>
        <p>{price}</p>
 
    </div>
    <p className='infon'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ad beatae quaerat assumenda fugit eligendi at et quasi blanditiis est reiciendis corrupti eos natus eius sed suscipit tempora, consequuntur necessitatibus.</p>
    </div>
  )
}

export default Card
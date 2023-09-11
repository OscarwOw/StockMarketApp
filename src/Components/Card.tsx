import React from 'react'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='card'>Card
        <img src="https://www.savour.cz/img/post/9-5d2390fe0421b.jpg" alt="Image" />
    
    <div className='details'>
        <h2>AAPL</h2>
        <p>$110</p>

    </div>
    <p className='infon'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ad beatae quaerat assumenda fugit eligendi at et quasi blanditiis est reiciendis corrupti eos natus eius sed suscipit tempora, consequuntur necessitatibus.</p>
    </div>
  )
}

export default Card
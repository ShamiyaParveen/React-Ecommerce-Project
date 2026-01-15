import React, { useState } from 'react'


const ProductQuantity = () => {

        const [inputvalue, setInputValue] = useState(1);
       
          const minus = () =>{
              if(inputvalue !== 1 && inputvalue > 0){
                setInputValue(inputvalue-1)
              }
                
            }
        
                const plus = () =>{
                    setInputValue(inputvalue + 1);
            }

  return (
    <>

        

          {/* Actions: Quantity & Add to Cart */}
                    <div className="action-wrapper">
                      <div className="qty-selector">
                        <button onClick={minus}>-</button>
                        <input type="text" value={inputvalue} />
                        <button onClick={plus}>+</button>
                      </div>
                      </div>
                   
                   
    </>
  )
}

export default ProductQuantity
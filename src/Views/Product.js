import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Product(){
	const url = 'https://6062c61e0133350017fd176e.mockapi.io/api/cake/:endpoint'

	const [product, setProduct] = useState(null)

	let content = null

	useEffect(() => {
		axios.get(url)
		.then(response => {
			setProduct(response.data)

		})

	}, [url])

	if(product){
		content =
	
		<div>
		  <h1 className="text-2xl font-bold mb-3">
		  	  {product.name}
		  </h1>	
		  <div>
			  <img
			  	src={product.images[0].imageUrl}
			  	alt={product.name}
			  />

		  </div>

			<div className="font-bold text-xl mb-3">
				$ {product.price}
			</div>

			<div>
			{product.description}
			</div>
		</div>

	}

		return(
			<div>
			{content}

			</div>

			)
	}

	


	

export default Product
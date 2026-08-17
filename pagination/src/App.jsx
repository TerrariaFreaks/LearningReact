import { useEffect, useState } from 'react'
import './App.css'

const PAGE_SIZE = 10

function App() {

  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(0)

  const ProductCard = ({image, title}) => {
    return <div className='product-card'>
      <img src= {image} alt={title}/>
      <span>{title}</span>
    </div>
  }

  const totalProducts = products.length
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE)
  
const fetchData = async () => {
  const data = await fetch("https://dummyjson.com/products")
  const json = await data.json()
  setProducts(json.products)
}

useEffect (()=> {
  fetchData()
}, [])

const start = currentPage * PAGE_SIZE
const end = start + PAGE_SIZE

const handlePageChange = (n) => {
  setCurrentPage(n)
}

  return !products.length ? <h1>No Products Found</h1> : (
    <div>
      <h1>Pagination</h1>
      <div>
        {[...Array(noOfPages).keys()].map((n)=>{
          return(<span key={n} onClick={()=> handlePageChange(n)}>{n}</span>)
        })}
      </div>
      <div>
        {
        products.slice(start, end).map(p => <ProductCard key={p.id} image={p.thumbnail} title={p.title}/>)
      }
      </div>
    </div>
  )
}

export default App

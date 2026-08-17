import { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const observer = useRef()

  const fetchProducts = async (pageNo) => {
    setLoading(true)
    try{
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${(pageNo - 1) * 10}`)
    const data = await res.json()
    setProducts(prev=>[...prev, ...data.products])
    setHasMore(data.products.length > 0 && products.length + data.products.length < data.total)
    } catch(err){
      console.error("Fetch error", err)
    } finally{
      setLoading(false)
    }
  }

  useEffect(()=> {
    fetchProducts(page)
  }, [page])

  const lastElementRef = useCallback((node) => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore){
          setPage(prevPage => prevPage + 1)
        }
      }, {threshold: 0.5})
      if (node) observer.current.observe(node)
  }, [loading, hasMore])


  return (
  <div
    style={{
      background: '#1e293b',
      padding: '1.5rem',
      borderRadius: '0.5rem',
    }}
  >
    <h2>Product Catalog</h2>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1rem',
      }}
    >
      {products.map((item, index) => {
        const isLast = products.length === index + 1;

        return (
          <div
            key={`${item.id}-${index}`}
            ref={isLast ? lastElementRef : null}
            style={{
              background: '#0f172a',
              padding: '1rem',
              borderRadius: '0.5rem',
            }}
          >
            <h4>{item.title}</h4>
            <p style={{ color: '#38bdf8' }}>${item.price}</p>
          </div>
        );
      })}
    </div>

    {loading && (
      <p style={{ textAlign: 'center', margin: '1rem' }}>
        Loading...
      </p>
    )}

    {!hasMore && (
      <p style={{ textAlign: 'center', margin: '1rem' }}>
        No more products
      </p>
    )}
  </div>
);
};


export default App

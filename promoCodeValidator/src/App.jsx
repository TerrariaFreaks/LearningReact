import { useState } from 'react'
import './App.css'

const PROMO_CODES = {
  'SAVE10' : {type: 'percent', val: 10, minSpend: 50},
  'FLAT25' : {type: 'flat', val: 25, minSpend: 100}
}

function App({subTotal = 120}) {
  const [code, setCode] = useState('')
  const [appliedPromo, setAppliedPromo] = useState(null)
  const [error, setError] = useState('')

  const applyCode = () => {
    setError('')
    const rule = PROMO_CODES[code.toUpperCase()]

    if (!rule){
      setError("Invalid PROMO CODE")
      return
    }
    if (subTotal < rule.minSpend){
      setError(`Minimum order total of ${rule.minSpend} required`)
      return
    }
    setAppliedPromo({code: code.toUpperCase(), ...rule})
  }

  const discountAmount = appliedPromo ? appliedPromo.type === 'percent' ? (subTotal * appliedPromo.val) / 100 : appliedPromo.val : 0

  
    return (
    <div
      style={{
        background: '#1e293b',
        padding: '1.5rem',
        borderRadius: '0.5rem',
      }}
    >
      <h3>Order Summary</h3>

      <p>Subtotal: ${subTotal}</p>

      {appliedPromo && (
        <p style={{ color: '#4ade80' }}>
          Discount: -${discountAmount}
        </p>
      )}

      <h4>Total: ${subTotal - discountAmount}</h4>

      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          marginTop: '1rem',
        }}
      >
        <input
          placeholder="Promo Code"
          value={code}
          onChange={e => setCode(e.target.value)}
          style={{ flex: 1, padding: '0.4rem' }}
        />

        <button
          onClick={applyCode}
          style={{
            background: '#38bdf8',
          }}
        >
          Apply
        </button>
      </div>

      {error && (
        <p
          style={{
            color: '#ef4444',
            fontSize: '0.85rem',
          }}
        >
          {error}
        </p>
      )}
    </div>
  );

}

export default App

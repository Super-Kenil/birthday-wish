import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

const Wish = lazy(() => import('./pages/Wish'))
const WishMaker = lazy(() => import('./pages/WishMaker'))

function App() {

  return (
      <main className="">
        <Routes>
          <Route path="/" element={
            <Suspense>
              <WishMaker />
            </Suspense>
          } />
          <Route path="/w" element={
            <Suspense>
              <Wish />
            </Suspense>
          } />
        </Routes>
      </main>
  )
}

export default App

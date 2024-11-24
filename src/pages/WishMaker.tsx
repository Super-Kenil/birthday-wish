import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export const WishMaker = () => {

  const [inputValue, setInputValue] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigator.clipboard.writeText(`${window.location.href}w?n=${inputValue}`).then(() => {
      navigate(`/w?n=${inputValue}`)
    }, (err) => {
      alert(err)
    })
  }

  return (
      <>
        <main className="flex items-center justify-center min-h-screen">
          <div>
            <h1 className="text-7xl tracking-wide font-masterscript text-center max-sm:leading-normal">Birthday Wisher</h1>
            <form className="mt-16 w-full mx-auto" onSubmit={handleSubmit}>
              <div className="group relative w-72 md:w-80 lg:w-96 mx-auto">
                <label className="w-full pb-2 text-2xl text-gray-800 transition-all duration-200 ease-in-out group-focus-within:text-red-500 font-bold">Name:</label>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" className="peer h-10 w-full py-2 font-semibold rounded-xl bg-gray-50 px-4 outline-none border-2 transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-0" />
              </div>
              <div className="w-full flex">
                <button type="submit" disabled={!inputValue} className="disabled:opacity-50 disabled:hover:bg-red-50 disabled:hover:text-red-500 mt-4 mx-auto py-2 px-4 rounded-xl border-2 border-red-500 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-500 font-semibold">Copy Link</button>
              </div>
            </form>
          </div>
        </main>
      </>
  )
}

export default WishMaker
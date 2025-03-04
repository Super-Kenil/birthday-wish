import { useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { toTitleCase } from '../utils/transform'

export const Wish = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const personName = searchParams.get('n')

  useEffect(() => {
    if (!personName) navigate('/')
    if (document) document.title = `Happy Birthday ${toTitleCase(personName ?? '')}`
  }, [])

  return (
      <main className="min-h-dvh">
          <h1 className="sm:text-7xl text-4xl tracking-wide font-masterscript text-center max-sm:leading-normal sm:mb-2 mb-2 pt-12">Happy Birthday
            <br />
            <span className="capitalize leading-loose text-red-600 font-semibold">
              {personName}
            </span>
          </h1>
          {window.location.hostname === 'localhost' ? (
            <div className="h-[70dvh] w-screen rounded-lg bg-pink-100 mx-auto bottom-0" />
          ) : (
            <iframe src="https://bdaycake.com/kenil_1662" className="h-[70dvh] w-screen rounded-lg mx-auto" />
          )}
        <p className='fixed bottom-0 w-full text-nowrap flex justify-center'>Powered by&nbsp; <a href="https://bdaycake.com/" target='_blank' className='text-red-500 underline'>bdaycake.com</a></p>
      </main>
  )
}

export default Wish
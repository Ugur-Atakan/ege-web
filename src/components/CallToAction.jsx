import { Container } from '../components/Container'
import backgroundImage from '../images/background-call-to-action.jpg'
import React from 'react'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <img
          src={backgroundImage}
          alt=""
          width={2347}
          height={1244}
          layout="fixed"
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            It is time to be your own boss. Start your business today.
          </p>
          <button
              type="submit"
              onClick={() => {
                window.location.href = '/pricing/form-my-company'
              }}
              className="flex w-full justify-center rounded-md border border-transparent bg-white py-2 px-4 text-xl font-medium shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
            >
             Form My Company
            </button>
        </div>
      </Container>
    </section>
  )
}

export default CallToAction
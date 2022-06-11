import React from 'react'
import { getProviders, signIn } from 'next-auth/react'

function home({ providers }) {

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-zinc-600'>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <div className="pl-4">
            <button
              className="text-black font-semibold rounded-full border bg-white hover:bg-pink-500 px-5 py-1.5 transition-all hover:border-2"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Sign in
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default home

export async function getStaticProps(context) {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  }
}
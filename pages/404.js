import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Head from 'next/head'
import { ArrowPathIcon } from '@heroicons/react/20/solid'

export default function Custom404() {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000)
    })
    return (
        <div>
            <Head>
                <title>404 Not Found</title>
            </Head>
            <main className="h-screen w-full flex flex-col pt-24 items-center bg-white">
                <h1 className="text-9xl font-extrabold text-[#1A2238] tracking-widest">404</h1>
                <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute font-semibold">
                    Page Not Found
                </div>
                <button className="mt-5">
                    <a
                        className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
                    >
                        <span
                            className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
                        ></span>
                    </a>
                </button>
                <div className="flex items-center gap-1 text-gray-500">
                <ArrowPathIcon className="h-5 w-5 animate-spin" />
                <p>Redirecting...</p>
                </div>
            </main>
        </div>
    )
}

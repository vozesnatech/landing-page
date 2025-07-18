"use client"

import React from "react";
import Headers from "../components/header";
import Image from "next/image";


function Login() {
    return (

        <div className="absolute top-0 left-0 w-full h-full">
            <Headers />
            <div className="flex min-h-full flex-col items-center bg-purple-100 justify-center px-6 py-12 lg:px-8">
            <div className="w-full max-w-sm space-y-1">
            <Image src="/img/logo.png"
             width={100}
             height={100}
             className="mx-auto  h-35 w-auto"
            alt="Vozes na Tech Logo"
            />
                <h1 className="text-3xl font-bold mb-7 text-purple-900 text-shadow-md text-center tracking-tight ">Login</h1>
            </div>
                <form className="bg-white p-6 rounded shadow-md w-96">
                    <div className="mb-4">
                        <label className="block text-sm/6 font-semibold text-gray-900" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block text-sm/6 font-semibold text-gray-900" htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 hover:bg-purple-400 transition duration-200"
                    >
                        Entrar
                    </button>
                </form>
                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Não tem uma conta? <a href="https://docs.google.com/forms/d/e/1FAIpQLSfOqBjxTorLz0x0jtC_sUSk1C4HPLf9CweJFnRk7aJZMJQ3rA/viewform" className="text-purple-500 font-semibold hover:text-purple-600">Cadastre-se</a>
                </p>
            </div>
        </div>
    );
}
export default Login;
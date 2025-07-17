"use client"

import React from "react";


function Login() {
    return ( 
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-8">Login</h1>
            <form className="bg-white p-6 rounded shadow-md w-96">
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2" htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                >
                    Entrar
                </button>
            </form>
            <p className="mt-4 text-gray-600">
                Não tem uma conta? <a href="/register" className="text-blue-500 hover:underline">Registrar</a>
            </p>
        </div>
    );
}
export default Login;
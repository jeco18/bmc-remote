import React from 'react'

const login = () => {
  return (
    <div>
      <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4 bg-[#202020]">
            <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                <div className="w-16 h-16 outline outline-red-700 outline-[15px] mx-auto mb-10 rotate-45"></div>
                <h1 className="text-center font-bold text-[#e4e4e4] tracking-widest uppercase">Building metrics</h1>
                <div className="bg-white shadow p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5"
                    >
                        <h1 className="text-center font-extrabold text-2xl text-[#202020] tracking-widest">LOGIN</h1>
                        <div>
                            <input
                                placeholder="Username"
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#202020] shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <input
                                placeholder="Password"
                                type="password"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#202020] shadow-sm rounded-lg"
                            />
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white hover:text-[#202020] font-medium bg-[#202020] hover:bg-[#e4e4e4] active:bg-[#202020] hover:outline hover:outline-1 hover:border-[#202020] rounded-lg duration-150"
                        >
                            Sign in
                        </button>
                    </form>
                </div>
                <div className="text-center">
                    <a href="www.google.com" className="text-grey hover:text-[#e4e4e4]">Forgot password?</a>
                </div>
            </div>
        </main>
    </div>
  )
}

export default login

import { useState, useEffect } from "react";
import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen">
          <div className="flex flex-1">
            <div className="flex flex-col w-64 bg-gray-800">
              <div className="flex items-center justify-center h-14 border-b border-gray-700">
                <div className="text-xl font-semibold tracking-widest text-gray-100 uppercase">
                  Admin
                </div>
              </div>
              <div className="flex flex-col flex-1 overflow-hidden">
                <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto">
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 space-x-2 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-white"
                  >
                    <span className="text-lg font-semibold">Dashboard</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 space-x-2 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-white"
                  >
                    <span className="text-lg font-semibold">Users</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 space-x-2 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-white"
                  >
                    <span className="text-lg font-semibold">Settings</span>
                  </a>
                </nav>
              </div>
            </div>

            <div className="flex flex-col flex-1">
              <header className="flex items-center justify-between px-4 py-2 bg-white border-b">
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                    <svg className="w-6 h-6" viewBox="0 0 24 24"></svg>
                  </button>
                  <h1 className="text-xl font-semibold">Dashboard</h1>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                    <svg className="w-6 h-6" viewBox="0 0 24 24"></svg>
                  </button>
                </div>
              </header>
              <main className="flex-1 p-4 overflow-hidden bg-gray-100">
                <div className="flex flex-col flex-1">
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center justify-between px-4 py-2">
                      {children}
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

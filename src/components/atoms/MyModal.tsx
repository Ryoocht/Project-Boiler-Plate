import React from 'react'
import { ChildrenProp } from '../../types/propTypes'
import { RFC } from '../../types/reactTypes'

const MyModal:RFC<ChildrenProp> = ({ children }) => {
  return (
    <>
      <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
        Toggle modal
      </button>

      <div id="popup-modal" tabIndex={-1} className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                { children }
            </div>
        </div>
      </div>
    </>
  )
}

export default MyModal
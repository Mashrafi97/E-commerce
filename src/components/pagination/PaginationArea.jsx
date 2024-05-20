import React from 'react'

const PaginationArea = ({pageNumber,paginate}) => {

  return (
    <>
    <nav className='pt-[50px]' aria-label="Page navigation example">
    <ul className="inline-flex space-x-[15px] text-sm">
      {/* <li>
        <a href="#"
          className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
      </li> */}
      {pageNumber.map((item)=>(
      <li onClick={()=>paginate(item)}>
        <a 
          className="flex items-center justify-center px-3 h-8 leading-tight text-[#767676] text-[14px] font-normal font-dm bg-white border border-[#F0F0F0] hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white "
        >
          {item + 1}
        </a>
      </li>
      ))}
      {/* <li>
        <a
          href="#"
          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </a>
      </li> */}
    </ul>
  </nav>
</>
  )
}

export default PaginationArea
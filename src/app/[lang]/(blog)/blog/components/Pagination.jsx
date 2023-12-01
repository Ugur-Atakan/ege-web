import React from 'react'
import { useRouter } from 'next/navigation'

const Pagination = ({ currentPage, setCurrentPage, totalPages, lang }) => {
  const router = useRouter()

  const handleNext = () => {
    const newPageNumber = Math.min(currentPage + 1, totalPages)
    setCurrentPage(newPageNumber)
    router.push(`/${lang}/blog?page=` + newPageNumber)
  }

  const handlePrevious = () => {
    const newPageNumber = Math.max(currentPage - 1,1)
    setCurrentPage(newPageNumber)
    router.push(`/${lang}/blog?page=` + newPageNumber)
  }

  const renderPageNumbers = () => {
    const pageNumbers = [];

    pageNumbers.push(
      <span
        key={currentPage}
        className="cursor-pointer mx-2 font-bold"
      >
        {currentPage}
      </span>
    )

    if (currentPage < totalPages) {
      pageNumbers.push(
        <span
          key={currentPage + 1}
          className="cursor-pointer mx-2"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          {currentPage + 1}
        </span>
      );
    }

    if (currentPage < totalPages - 1) {
      pageNumbers.push(
        <span key="dots" className="mx-2">...</span>
      );
    }
    pageNumbers.push(
      <span
        key={totalPages}
        className="cursor-pointer mx-2"
        onClick={() => setCurrentPage(totalPages)}
      >
        {totalPages}
      </span>
    );

    return pageNumbers;
  }

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        disabled={currentPage === 1}
        onClick={handlePrevious}
        className='p-2 bg-blue-600 text-white font-semibold rounded-[200px] flex-col justify-center items-center gap-2'
      >
        Previous
      </button>
        {renderPageNumbers()}
      <button
        disabled={currentPage === totalPages}
        onClick={handleNext}
        className='px-4 py-2 bg-blue-600 text-white font-semibold rounded-[200px] flex-col justify-center items-center gap-2'
      >
        Next
      </button>
    </div>
  );
}

export default Pagination

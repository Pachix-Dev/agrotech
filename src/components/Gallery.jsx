import { useState } from 'react';

const Lightbox = ({ images }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const getPaginatedImages = () => {
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    return images.slice(startIndex, endIndex);
  };

  return (
    <>
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-start'>
        {getPaginatedImages().map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              alt={image.alt}
              onClick={() => openLightbox(index)}
            />
            <p className='text-center font-bold text-xl'>{image.title}</p>
          </div>
        ))}

        {lightboxOpen && (
          <div className="lightbox">          
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 text-white absolute top-[10px] right-10 close cursor-pointer" onClick={closeLightbox}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <a href={images[currentImage].src} download target="_blank" rel="noopener" aria-label="Download">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 text-white absolute top-[10px] right-24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </a>

            <div className="lightbox-content">
              <img src={images[currentImage].src} alt={images[currentImage].alt} />            
              <p className='text-center text-white font-bold text-xl'>{images[currentImage].title}</p>
              <a className="prev" onClick={prevImage}>&#10094;</a>
              <a className="next" onClick={nextImage}>&#10095;</a>
            </div>
          </div>
        )}

        <style>
          {`          
            .gallery img {
              width: 100px;
              height: 100px;
              margin: 5px;
              cursor: pointer;
            }

            .lightbox {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.9);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 999;
            }

            .lightbox-content {
              position: relative;
            }

            .lightbox img {            
              border: 2px solid #fff;
              box-shadow: 0 0 20px rgba(0, 0, 0, 0.9);
            }        

            .lightbox .prev,
            .lightbox .next {
              cursor: pointer;
              position: absolute;
              top: 50%;
              width: auto;
              padding: 16px;
              color: white;
              font-weight: bold;
              font-size: 20px;
              transition: 0.6s ease;
              border-radius: 0 3px 3px 0;
              user-select: none;
            }

            .lightbox .next {
              right: 0;
              border-radius: 3px 0 0 3px;
            }
          `}
        </style>

      </div>
      {
        images.length > imagesPerPage && 
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-sm">
            <li>
              <a
                href="#"
                onClick={() => handlePageClick(currentPage - 1)}
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            {/* Render pagination based on the number of pages */}
            {Array.from({ length: Math.ceil(images.length / imagesPerPage) }, (_, index) => (
              <li key={index}>
                <a
                  href="#"
                  onClick={() => handlePageClick(index + 1)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight ${
                    currentPage === index + 1
                      ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                      : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  }`}
                >
                  {index + 1}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                onClick={() => handlePageClick(currentPage + 1)}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      }
    </>
  );
};

export default Lightbox;

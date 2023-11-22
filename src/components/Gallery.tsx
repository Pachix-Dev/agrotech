interface Props{
    images: Array<{       
        src: string;
        alt: string;
        title: string;
        width: number;
        height: number;
      }>;
}

import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export function Gallery({images}: Props) {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (        
        <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-start'   
        >            
            {images.map((image, index) => (
                <a key={index} data-src={image.src} className="gallery-item">
                    <p className='text-gray-600 text-lg font-bold text-center pb-5'>{image.title}</p>
                    <img src={image.src} alt={image.alt} width={image.width}  />
                </a>
            ))}            
        </LightGallery>
    );
}


import Marquee from 'react-fast-marquee'

export function MarqueeReact({ images, direction = 'right' }) {
  return (
    <Marquee gradient direction={direction}>
      {images.map((image, index) => (
        <div key={index} className='m-4 text-center h-100'>
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading='lazy'
            style={{ maxWidth: '100%' }}
          />
        </div>
      ))}
    </Marquee>
  )
}

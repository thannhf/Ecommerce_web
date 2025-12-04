import React from 'react'

const ProductDescription = () => {
  return (
    <div className='mt-20'>
        <div className='flex gap-3 mb-4'>
            <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36'>Description</button>
            <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Care Guide</button>
            <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Size Guide</button>
        </div>
        <div className='flex flex-col pb-16'>
            <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium voluptates quo magnam autem itaque. A ipsam illo adipisci expedita accusamus necessitatibus tempore culpa, nam nobis mollitia nihil maiores sequi ipsum, repudiandae, ullam laborum nostrum esse nesciunt recusandae iure incidunt commodi quae maxime aut! Commodi ratione earum rem possimus? Tenetur facere asperiores architecto aspernatur eos! Vitae!</p>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus neque repellendus sit placeat adipisci cum distinctio repudiandae corrupti, veritatis pariatur quia aliquid cumque. Officiis unde in neque?</p>
        </div>
    </div>
  )
}

export default ProductDescription
import Image from 'next/image'
import React from 'react'

const MicroAnalitica = () => {
  return (
    <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col smd:flex-col  justify-between items-center gap-8 max-w-7xl mx-auto xl:h-[400px] lg:h-[400px] md:h-[400px] sm:h-[500px] smd:h-[500px] mb-8">
      <div className='flex flex-row justify-center items-center'>
        <Image src="/power-BI.jpeg" alt='Imagen de Power BI' width={800} height={800} className='w-[600px] h-auto rounded-lg border-[1px] border-gray-200' />
      </div>
      <div className='flex flex-col justify-center items-start h-full p-5 xl:w-[600px] lg:w-[600px] w-full'>
        <h4 className='xl:text-4xl lg:text-3xl text-2xl font-bold text-gray-900'> ¿Por qué elegir Power BI para Bordex?</h4>
        <p className='text-gray-600 xl:text-lg lg:text-lg text-sm my-2 mt-5'>👉 Facilita la toma de decisiones basada en datos.</p>
        <p className='text-gray-600 xl:text-lg lg:text-lg text-sm my-2'>👉 Ahorra tiempo con automatización y reportes dinámicos.</p>
        <p className='text-gray-600 xl:text-lg lg:text-lg text-sm my-2'>👉 Mejora la eficiencia y el control de inventario con análisis detallados.</p>
      </div>
    </div>
  )
}

export default MicroAnalitica
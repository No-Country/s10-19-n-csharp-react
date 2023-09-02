import { MdOutlineCalendarMonth, MdOutlineShoppingCart } from 'react-icons/md'
import { IoSearch } from 'react-icons/io5'
import { FaMoneyCheckDollar } from 'react-icons/fa6'

export const OrderCard = ({ order }) => {
  // const { price, date, amount } = order
  const openModal = () => {
    console.log('Abrir modal con detalles del pedido')
  }
  return (
    <div className='flex items-end justify-between bg-white border-2 border-marronCustom rounded-lg max-w-[470px] text-xl text-black p-8'>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-2 items-center'>
          <MdOutlineCalendarMonth className='text-greenCard text-3xl' />
          <span>25 / 08 / 2023</span>
        </div>
        <div className='flex gap-2 items-center'>
          <FaMoneyCheckDollar className='text-greenCard  text-3xl' />
          <span>$ 12.000</span>
        </div>
        <div className='flex gap-2 items-center'>
          <MdOutlineShoppingCart className='text-greenCard text-3xl' />
          <span>5 platillos</span>
        </div>
      </div>
      <button onClick={openModal} className='flex text-greenCard gap-2 items-center font-bold'>
        <IoSearch className='text-3xl' /> Ver detalles
      </button>
    </div>
  )
}

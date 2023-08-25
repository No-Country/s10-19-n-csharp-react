import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { LiaPiggyBankSolid } from 'react-icons/lia';
import featureImage from '../../images/feature.png'

export default function Features() {

    const featuresData = [
        {
            icon: <TfiHeadphoneAlt/>,
            title: '24/7 Online Support',
            body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem repudiandae doloribus praesentium quod provident?'
        },
        {
            icon: <FaRegMoneyBillAlt/>,
            title: 'Money Guarantee',
            body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem repudiandae doloribus praesentium quod provident?'
        },
        {
            icon: <LiaPiggyBankSolid/>,
            title: 'Get 100% Money Back',
            body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem repudiandae doloribus praesentium quod provident?'
        },
    ]

    return (
        <div className='bg-white text-greyCustom flex flex-col px-5 gap-y-10 py-10 md:pt-28'>

            <div className='flex flex-col gap-y-5 md:flex-row md:gap-x-5 max-w-7xl mx-auto'>
                {featuresData.map(featureData => (
                    <div className='flex flex-col items-center gap-3'>
                        <p className='text-2xl bg-gray-200 p-3 rounded-full'>{featureData.icon}</p>
                        <p className='text-black'>{featureData.title}</p>
                        <p className='text-center'>{featureData.body}</p>
                    </div>
                ))}
            </div>

            <div className='flex flex-col md:flex-row items-center md:justify-center gap-y-5 gap-x-5'>
                <img src={featureImage} alt="" className='w-full max-w-lg'/>
                <img src={featureImage} alt="" className='w-full max-w-lg'/>
            </div>   
        </div>
    )
}

import IconSearch from '@assets/svg/ic-search.svg?react';
import Swiper from '@components/Swiper/Swiper';
import { UserButton } from '@components/UserButton';

const Subscription: React.FC = () => {
	return (
		<div className='w-full'>
			<div className='items-center justify-between hidden lg:flex'>
				<div className='relative h-59px rounded-100px !b-2px b-solid b-lightgrey bg-[rgba(217,217,217,0.15)] min-w-727px flex items-center gap-2 p-3'>
					<IconSearch className='size-32px' />
					<input
						autoComplete='false'
						type='text'
						className='h-6 w-full placeholder:(text-base text-grey) bg-transparent flex-1 min-w-0 focus:outline-none caret-grey'
						placeholder='Search your product'
					/>
				</div>
				<UserButton
					avatarSize='size-64px'
					className='gap-10px'
					titleStyle='text-2xl font-bold'
					subtitleStyle='text-base'
				/>
			</div>
			<div className='inline-flex flex-col justify-center items-start gap-5.122px lg:(gap-10px mt-10)'>
				<span className='text-base font-500 leading-25px c-background lg:(text-32px font-bold leading-48px)'>
					Our Pricing Plan
				</span>
				<span className='text-8.195px c-boldgrey leading-12px max-w-326px lg:(text-base leading-24px max-w-822px)'>
					Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
					vulputate libero et velit interdum, ac aliquet odio mattis. Class
					aptent taciti sociosqu ad litora torquent per conubia nostra, per
					inceptos himenaeos. Curabitur tempus urna at turpis condimentum
					lobortis.
				</span>
			</div>
			<Swiper />
		</div>
	);
};

export default Subscription;

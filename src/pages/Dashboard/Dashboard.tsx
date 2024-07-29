import IconArrowRight from '@assets/svg/ic-arrow-right.svg?react';
import IconArrowWise from '@assets/svg/ic-arrow-wise.svg?react';
import IconCart from '@assets/svg/ic-cart.svg?react';
import IconDot from '@assets/svg/ic-dot.svg?react';
import IconProduct from '@assets/svg/ic-product.svg?react';
import IconSearch from '@assets/svg/ic-search.svg?react';
import IconUser from '@assets/svg/ic-user.svg?react';
import { UserButton } from '@components/UserButton';
import c from 'classnames';
import { useState } from 'react';
import { DashboardCard, IDashboardCard } from './components/DashboardCard';

const cardTemp: IDashboardCard[] = [
	{
		title: 'Total Users',
		value: '2,789',
		icon: <IconUser className='size-25.572px xl:size-60px' />,
		iconDesc: 'ic user',
	},
	{
		title: 'Total Products',
		value: '2,789',
		icon: <IconProduct className='size-25.572px xl:size-60px' />,
		iconDesc: 'ic product',
	},
];

const Dashboard: React.FC = () => {
	const [sliderValue, setSliderValue] = useState(50);

	const handleSliderChange = (newValue: number) => {
		setSliderValue(newValue);
	};

	return (
		<div className='w-full text-sm'>
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
			<div
				className={c(
					'hidden text-[32px] font-bold leading-[48px] text-background mt-10',
					'xl:flex'
				)}
			>
				Dashboard
			</div>
			<div
				className={c('grid grid-cols-2 gap-3', 'lg:gap-[43px] lg:mt-[30px]')}
			>
				{cardTemp.map((item, idx) => (
					<DashboardCard
						key={idx}
						title={item.title}
						value={item.value}
						icon={item.icon}
						iconDesc={item.iconDesc}
					/>
				))}
			</div>
			<div
				className={c(
					'flex flex-col w-full rounded-20px bg-white shadow-[0px_4px_40px_0px_rgba(0,0,0,0.08)] p-7px pb-37.51px mt-22.67px',
					'xl:grid xl:grid-cols-2 xl:gap-43px xl:pl-3 xl:py-14px xl:pr-30px xl:mt-10 xl:rounded-50px'
				)}
			>
				<div
					className={c(
						'h-197.879px w-full flex-shrink-0 rounded-19.2px bg-[linear-gradient(90deg,_#754DFB_0.05%,_#F561C0_99.93%)] pt-17.43px pl-19.11px pr-17.18px pb-18.78px',
						'xl:h-352px xl:py-8 xl:pl-34px xl:pr-30px xl:rounded-50px'
					)}
				>
					{/* Mobile */}
					<div className='grid grid-cols-2 xl:hidden'>
						<div className='flex flex-col'>
							<div className='inline-flex items-center gap-4.497px'>
								<IconCart className='size-17.989px' />
								<span className='text-11.243px font-medium'>Subscription</span>
							</div>
							<div className='flex flex-col items-start mt-[29.73px]'>
								<span className='text-11.243px leading-17px'>
									Remaining Credits
								</span>
								<span className='text-35.978px font-medium leading-54px'>
									15,000
								</span>
							</div>
							<span className='text-10.119px font-normal mt-5'>
								20,000+ item in ABC 50.1
							</span>
						</div>
						<div className='flex items-end justify-end'>
							<button className='relative flex items-center pt-13.13px pb-13.35px pl-21.36px pr-2.78px bg-white max-h-42.471px min-w-116.602px rounded-9.652px'>
								<div className='flex items-center gap-2.82px'>
									<IconArrowWise className='size-12.355px' />
									<span className='text-background font-medium text-10.811px leading-16px'>
										Change
									</span>
								</div>
								<IconArrowRight className='size-9.266px' />
								<div className='absolute top-3.86px left-6.95px h-47.49px w-101.93px rounded-9.652px bg-[rgba(255,255,255,0.2)] backdrop-opacity-[.772px]' />
							</button>
						</div>
					</div>
					{/* Desktop */}
					<div className='flex-col hidden xl:flex'>
						<div className='inline-flex items-center gap-2'>
							<IconCart className='size-32px' />
							<span className='font-medium text-xl leading-30px'>
								Subscription
							</span>
						</div>
						<div className='grid w-full h-full grid-cols-2 mt-38px'>
							<div className='flex flex-col items-start'>
								<span
									className={c('text-base', '2xl:text-xl 2xl:leading-30px')}
								>
									Remaining Credits
								</span>
								<span
									className={c(
										'text-48px font-medium mt-3',
										'2xl:text-64px 2xl:leading-96px 2xl:mt-0'
									)}
								>
									15,000
								</span>
							</div>
							<div className='flex flex-col items-end'>
								<div className='flex flex-col items-start'>
									<span
										className={c('text-base', '2xl:text-xl 2xl:leading-30px')}
									>
										Total Credits
									</span>
									<span
										className={c(
											'text-48px font-medium mt-3',
											'2xl:text-64px 2xl:leading-96px 2xl:mt-0'
										)}
									>
										15,000
									</span>
								</div>
							</div>
						</div>
						<div className='grid w-full h-full grid-cols-2 mt-17px'>
							<div className='flex flex-col items-start'>
								<span className='text-18px font-normal mt-34px leading-27px'>
									20,000+ item in ABC 50.1
								</span>
							</div>
							<div className='flex items-end justify-end'>
								<button className='relative flex items-center py-27px pl-38px pr-4.95px bg-white min-w-207.419px max-h-75.55px rounded-17.17px'>
									<div className='flex items-center gap-2.82px'>
										<IconArrowWise className='size-21.978px' />
										<span className='text-background font-medium text-19.231px leading-29px'>
											Change
										</span>
									</div>
									<IconArrowRight className='size-16.484px' />
									<div className='absolute top-6.87px left-12.36px h-84.478px w-181.32px rounded-17.17px bg-[rgba(255,255,255,0.2)] backdrop-opacity-[.772px]' />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className={c('flex flex-col mt-15px px-6px', 'xl:mt-8 ')}>
					<div className='flex flex-col items-start'>
						<span
							className={c(
								'text-base font-medium text-background leading-24px',
								'xl:text-32px xl:leading-48px'
							)}
						>
							Subscription Overview
						</span>
						<span
							className={c(
								'text-10px font-medium text-grey leading-15px',
								'xl:text-18px xl:leading-27px'
							)}
						>
							Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
							vulputate libero et velit interdum, ac aliquet odio mattis. Class
							aptent taciti sociosqu ad litora torquent per conubia nostra, per
							inceptos himenaeos.
						</span>
					</div>
					<div
						className={c(
							'flex flex-col justify-center items-start gap-9px mt-26px',
							'xl:mt-30px'
						)}
					>
						<div className={c('flex items-center gap-2.91px')}>
							<IconDot className={c('size-10.465px', 'xl:size-18px')} />
							<span
								className={c(
									'text-10.465px font-medium text-background',
									'xl:text-18px'
								)}
							>
								Total Usage
							</span>
						</div>
						{/* <Slider
							onChange={handleSliderChange}
							defaultValue={50}
							min={0}
							max={100}
						/> */}
					</div>
					<div
						className={c(
							'flex flex-col justify-center items-start gap-9px mt-26px',
							'xl:mt-30px'
						)}
					>
						<div className={c('flex items-center gap-2.91px')}>
							<IconDot className={c('size-10.465px', 'xl:size-18px')} />
							<span
								className={c(
									'text-10.465px font-medium text-background',
									'xl:text-18px'
								)}
							>
								Remaining Usage
							</span>
						</div>
						{/* <Slider
							onChange={handleSliderChange}
							defaultValue={50}
							min={0}
							max={100}
						/> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;

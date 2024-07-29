// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import IconBasic from '@assets/svg/ic-basic.svg?react';
import IconStandard from '@assets/svg/ic-standard.svg?react';
import IconPremium from '@assets/svg/ic-premium.svg?react';
import IconCheck from '@assets/svg/ic-check-circle.svg?react';
import IconXCircle from '@assets/svg/ic-x-circle.svg?react';
import { useScreenSize } from '@hooks/useScreenSize';

export default () => {
	const isMobile = useScreenSize('lg');
	return (
		<Swiper
			spaceBetween={isMobile ? 39.74 : 46}
			slidesPerView='auto'
			className='mt-62.88px min-1728px:95px overflow-hidden'
			scrollbar={{ draggable: true }}
			allowTouchMove
			autoplay
		>
			<SwiperSlide className='!relative !flex justify-end max-w-298.065px min-1728px:min-w-420px'>
				<div className='flex flex-col w-280px min-h-425.806px rd-21.29px bg-white shadow-[0px_4.258px_35.484px_0px_rgba(0,0,0,0.09)] min-1728px:(w-395px h-600px rd-30px shadow-[0px_6px_50px_0px_rgba(0,0,0,0.09)])'>
					<IconBasic className='w-237.032px h-73.806px ml--37px mt-31.394px min-1728px:(w-334px h-104px ml--52px mt-77px)' />
					<div className='flex flex-col mt-22px px-26px pb-22.29px gap-24px min-1728px:gap-37px'>
						<div className='flex justify-center'>
							<div className='flex items-baseline'>
								<span className='text-17.032px min-1728px:text-2xl c-background text-end'>
									ABC
								</span>
								&nbsp;
								<span className='text-45.419px leading-68px min-1728px:(text-64px leading-96px) c-background font-bold'>
									4.9
								</span>
							</div>
						</div>
						<div className='inline-flex flex-col items-start gap-15px [&>div]:(flex items-center gap-2 c-black text-11.355px leading-15px min-1728px:(text-base leading-24px)) [&>svg]:(size-17.032px)'>
							<div>
								<IconCheck />
								<span>Porem ipsum dolor sit amet.</span>
							</div>
							<div>
								<IconXCircle />
								<span>Porem ipsum dolor sit amet.</span>
							</div>
							<div>
								<IconXCircle />
								<span>Porem ipsum dolor sit amet.</span>
							</div>
							<div>
								<IconXCircle />
								<span>Porem ipsum dolor sit amet.</span>
							</div>
						</div>
						<div className='flex justify-center items-center'>
							<div className='inline-flex py-9.94px px-46.839px justify-center items-center gap-7.097px rd-70.988px primary-gradient w-202px min-1728px:(py-14px px-66px rd-100px w-286px)'>
								<span className='text-sm leading-21px font-600 min-1728px:(text-xl leading-30px)'>
									Buy Now
								</span>
							</div>
						</div>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide className='!relative !flex justify-end max-w-298.065px min-1728px:min-w-420px'>
				<div className='flex flex-col w-280px min-h-425.806px rd-21.29px bg-white shadow-[0px_4.258px_35.484px_0px_rgba(0,0,0,0.09)] min-1728px:(w-395px h-600px rd-30px shadow-[0px_6px_50px_0px_rgba(0,0,0,0.09)])'>
					<IconStandard className='w-237.032px h-73.806px ml--37px mt-31.394px min-1728px:(w-334px h-104px ml--52px mt-77px)' />
					<div className='flex flex-col mt-22px px-26px pb-22.29px gap-24px min-1728px:gap-37px'>
						<div className='flex justify-center'>
							<div className='flex items-baseline'>
								<span className='text-17.032px min-1728px:text-2xl c-background text-end'>
									ABC
								</span>
								&nbsp;
								<span className='text-45.419px leading-68px min-1728px:(text-64px leading-96px) c-background font-bold'>
									4.9
								</span>
							</div>
						</div>
						<div className='inline-flex flex-col items-start gap-15px [&>div]:(flex items-center gap-2 c-black text-11.355px leading-15px min-1728px:(text-base leading-24px)) [&>svg]:(size-17.032px)'>
							<div>
								<IconCheck />
								<span>Porem ipsum dolor sit amet.</span>
							</div>
							<div>
								<IconXCircle />
								<span>Porem ipsum dolor sit amet.</span>
							</div>
							<div>
								<IconXCircle />
								<span>Porem ipsum dolor sit amet.</span>
							</div>
							<div>
								<IconXCircle />
								<span>Porem ipsum dolor sit amet.</span>
							</div>
						</div>
						<div className='flex justify-center items-center'>
							<div className='inline-flex py-9.94px px-46.839px justify-center items-center gap-7.097px rd-70.988px primary-gradient w-202px min-1728px:(py-14px px-66px rd-100px w-286px)'>
								<span className='text-sm leading-21px font-600 min-1728px:(text-xl leading-30px)'>
									Buy Now
								</span>
							</div>
						</div>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide className='!relative !flex justify-end max-w-298.065px min-1728px:min-w-420px'>
				<div className='flex flex-col w-280px min-h-425.806px rd-21.29px bg-white shadow-[0px_4.258px_35.484px_0px_rgba(0,0,0,0.09)] min-1728px:(w-395px h-600px rd-30px shadow-[0px_6px_50px_0px_rgba(0,0,0,0.09)])'>
					<IconPremium className='w-237.032px h-73.806px ml--37px mt-31.394px min-1728px:(w-334px h-104px ml--52px mt-77px)' />
					<div className='flex flex-col mt-22px px-26px pb-22.29px gap-24px min-1728px:gap-37px'>
						<div className='flex justify-center'>
							<div className='flex items-baseline'>
								<span className='text-17.032px min-1728px:text-2xl c-background text-end'>
									ABC
								</span>
								&nbsp;
								<span className='text-45.419px leading-68px min-1728px:(text-64px leading-96px) c-background font-bold'>
									4.9
								</span>
							</div>
						</div>
						<div className='inline-flex flex-col items-start gap-15px [&>div]:(flex items-center gap-2 c-black text-11.355px leading-15px min-1728px:(text-base leading-24px)) [&>svg]:(size-17.032px)'>
							<div>
								<IconCheck />
								<span>Porem ipsum dolor sit amet.</span>
							</div>
							<div>
								<IconXCircle />
								<span>Porem ipsum dolor sit amet.</span>
							</div>
							<div>
								<IconXCircle />
								<span>Porem ipsum dolor sit amet.</span>
							</div>
							<div>
								<IconXCircle />
								<span>Porem ipsum dolor sit amet.</span>
							</div>
						</div>
						<div className='flex justify-center items-center'>
							<div className='inline-flex py-9.94px px-46.839px justify-center items-center gap-7.097px rd-70.988px primary-gradient w-202px min-1728px:(py-14px px-66px rd-100px w-286px)'>
								<span className='text-sm leading-21px font-600 min-1728px:(text-xl leading-30px)'>
									Buy Now
								</span>
							</div>
						</div>
					</div>
				</div>
			</SwiperSlide>
			...
		</Swiper>
	);
};

import { useEffect, useRef } from 'react';
import IconClose from '@assets/svg/ic-close.svg?react';
import IconCheck from '@assets/svg/ic-check.svg?react';
import icProduct from '@assets/images/ic-product.png';
import IconError from '@assets/svg/ic-error.svg?react';

interface IModalSuccess {
	isShowing: boolean;
	hide: (v: boolean) => void;
	item?: any;
}

export const ModalSuccess: React.FC<IModalSuccess> = ({
	isShowing,
	item,
	hide,
}) => {
	const useOutsideAlerter = (ref: any) => {
		useEffect(() => {
			/**
			 * Alert if clicked on outside of element
			 */
			function handleClickOutside(event: any) {
				if (ref.current && !ref.current.contains(event.target)) {
					hide(false);
				}
			}
			// Bind the event listener
			document.addEventListener('mousedown', handleClickOutside);
			return () => {
				// Unbind the event listener on clean up
				document.removeEventListener('mousedown', handleClickOutside);
			};
		}, []);
	};

	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef);

	return (
		<>
			<div className='modal-overlay-1'>
				<div
					ref={wrapperRef}
					className='w-full flex flex-col justify-center items-center border-t-[1px] border-[#2D313E] bg-[#1A1C24] publish-modal lg:(max-w-640px rd-39px)'
				>
					<div className='flex items-center justify-end w-full pt-12.86px pl-12.86px lg:(pt-23px pr-27px)'>
						<IconClose onClick={() => hide(false)} className='lg:size-31px' />
					</div>
					{/* Success status */}
					{/* <div className='flex flex-col items-center justify-center mt-14.54px px-33px pb-29.64px lg:(px-65px pb-35px mt-29.87px)'>
						<IconCheck className='lg:size-97.561px' />
						<span className='text-linear text-17.46px font-500 leading-26px text-center mt-7.64px tracking--0.327px lg:(mt-13.66px text-31.22px)'>
							Congratulations!
						</span>
						<div className='flex flex-col mt-10.32px lg:(mt-17.95px)'>
							<span className='text-13.422px text-center font-500 tracking--0.327px leading-20px lg:(text-2xl)'>
								Product Successfully Uploaded
							</span>
							<span className='text-11.185px text-center leading-17px tracking--0.327px c-gray lg:hidden'>
								Congratulations! Your booking is set and secured. Get ready to
								embark on an unforgettable experience.
							</span>
							<div className='hidden lg:flex flex-col items-center justify-center text-center text-xl tracking--0.585px mt-6.83px'>
								<span>Next steps:</span>
								<span className='c-gray'>1. Publish your product info.</span>
								<span className='c-gray'>
									2. Use Taplink Mobile App to write product info on the NFC
									tag.
								</span>
							</div>
						</div>
						<img
							src={icProduct}
							alt='ic product'
							className='w-full h-full mt-25.84px lg:(max-w-509px max-h-360px)'
						/>
					</div> */}
					{/* Fail status */}
					<div className='w-full flex flex-col items-center justify-center mt-14.54px px-33px pb-29.64px lg:(px-65px pb-35px mt-29.87px)'>
						<IconError className='lg:size-97.561px' />
						<span className='text-17.46px font-500 leading-26px text-center mt-7.64px tracking--0.327px lg:(mt-13.66px text-31.22px) c-red'>
							Error!
						</span>
						<div className='flex flex-col mt-10.32px lg:(mt-17.95px)'>
							<span className='text-13.422px text-center font-500 tracking--0.327px leading-20px lg:(text-2xl)'>
								Adding Product Failed
							</span>
							<span className='text-11.185px text-center leading-17px tracking--0.327px c-gray lg:hidden'>
								Congratulations! Your booking is set and secured. Get ready to
								embark on an unforgettable experience.
							</span>
							<div className='hidden lg:flex flex-col items-center justify-center text-center text-xl tracking--0.585px mt-6.83px c-gray'>
								<span>Please try again or contact support.</span>
							</div>
						</div>
						<img
							src={icProduct}
							alt='ic product'
							className='w-full h-full mt-25.84px lg:(max-w-509px max-h-360px)'
						/>
					</div>
				</div>
			</div>
		</>
	);
};

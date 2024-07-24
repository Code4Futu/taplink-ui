import { IProduct } from '@pages/Products/Products';
import c from 'classnames';
import { useEffect, useRef } from 'react';
interface IModalPublish {
	hide: (v: boolean) => void;
	itemCount: number;
	products: IProduct[];
}

export const ModalPublish: React.FC<IModalPublish> = ({
	products,
	itemCount,
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
					className='w-full flex justify-center items-center lg:items-start border-t-[1px] border-[#2D313E] bg-[#1A1C24] publish-modal md:max-w-553px'
				>
					<div
						className={c(
							'w-full flex flex-col pt-13.07px pb-25.56px px-23.08px items-start',
							'lg:(px-37px pt-26px pb-38px)'
						)}
					>
						<div className='flex flex-col justify-center items-center self-stretch'>
							<span
								className={c(
									'text-xl font-bold leading-30px',
									'lg:(text-32px leading-48px)'
								)}
							>
								Publish Item
							</span>
							<div className='hidden lg:flex flex-col text-center text-18px font-500 text-red leading-27px'>
								<span>Credit Balance is insufficient.</span>
								<span>Please contact Taplink Support Team.</span>
							</div>
						</div>
						<div
							className={c(
								'flex flex-col self-stretch mt-21.81px gap-12.48px',
								'lg:mt-35px'
							)}
						>
							<div
								className={c(
									'flex justify-between items-center h-36.184px rd-31.193px bg-input shadow-[0px,3.743px,49.91px,0px,rgba(0,0,0,0.16)] pt-8.73px pb-8.45px pl-20.59px pr-18.94px leading-19px text-12.477px',
									'lg:(h-59px rd-50px shadow-[0px,6px,80px,0px,rgba(0,0,0,0.16)] px-33px py-14px text-xl)'
								)}
							>
								<span>Total Items</span>
								<span>{itemCount}</span>
							</div>
							<div
								className={c(
									'flex justify-between items-center h-36.184px rd-31.193px bg-input shadow-[0px,3.743px,49.91px,0px,rgba(0,0,0,0.16)] pt-8.73px pb-8.45px pl-20.59px pr-18.94px leading-19px text-12.477px',
									'lg:(h-59px rd-50px shadow-[0px,6px,80px,0px,rgba(0,0,0,0.16)] px-33px py-14px text-xl)'
								)}
							>
								<span>Per Item Fee</span>
								<span>0.3 ABC</span>
							</div>
							<div className='hidden lg:flex flex-col gap-12.48px'>
								<div
									className={c(
										'flex justify-between items-center h-36.184px rd-31.193px bg-input shadow-[0px,3.743px,49.91px,0px,rgba(0,0,0,0.16)] pt-8.73px pb-8.45px pl-20.59px pr-18.94px leading-19px text-12.477px',
										'lg:(h-59px rd-50px shadow-[0px,6px,80px,0px,rgba(0,0,0,0.16)] px-33px py-14px text-xl)'
									)}
								>
									<span>Current Credit Balance</span>
									<span>10</span>
								</div>
								<div
									className={c(
										'flex justify-between items-center h-36.184px rd-31.193px bg-input shadow-[0px,3.743px,49.91px,0px,rgba(0,0,0,0.16)] pt-8.73px pb-8.45px pl-20.59px pr-18.94px leading-19px text-12.477px',
										'lg:(h-59px rd-50px shadow-[0px,6px,80px,0px,rgba(0,0,0,0.16)] px-33px py-14px text-xl)'
									)}
								>
									<span>Per Item Fee</span>
									<span>0.3 ABC</span>
								</div>
							</div>
						</div>
						<div className='flex self-stretch justify-center items-center mt-30px'>
							<div className='flex flex-col items-center gap-1.248px'>
								<span className='text-12.477px c-boldgrey lg:text-xl'>
									Total Fee
								</span>
								<span className='text-linear text-22.459px font-bold lg:(text-36px leading-54px)'>
									1.9968 ABC
								</span>
							</div>
						</div>
						<div className='grid grid-cols-2 w-full gap-16.84px mt-46.82px'>
							<button
								className={c(
									'inline-flex h-41.175px py-15.6px px-45.54px justify-center items-center rd-31.193px b-0.624px b-solid b-white shadow-[0px,12.477px,21.835px,0px,rgba(0,0,0,0.15)] bg-transparent hover:op-80 transition-all',
									'lg:(py-25px px-73px rd-50px) shadow-[0px,20px,35px,0px,rgba(0,0,0,0.15)] b-1px'
								)}
								onClick={() => hide(false)}
							>
								<span className='font-600 text-9.982px leading-10px lg:(text-base leading-16px)'>
									Cancel
								</span>
							</button>
							<button
								className={c(
									'inline-flex h-41.175px py-15.6px px-45.54px justify-center items-center rd-31.193px b-0.624px b-solid b-transparent primary-gradient shadow-[0px,12.477px,21.835px,0px,rgba(0,0,0,0.15)] hover:op-80 transition-all',
									'lg:(py-25px px-73px rd-50px) shadow-[0px,20px,35px,0px,rgba(0,0,0,0.15)] b-1px'
								)}
							>
								<span className='font-600 text-9.982px leading-10px text-white lg:(text-base leading-16px)'>
									Confirm
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

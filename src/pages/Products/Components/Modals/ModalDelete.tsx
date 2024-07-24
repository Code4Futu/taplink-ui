import IconWarning from '@assets/svg/ic-warning.svg?react';
import { IProduct } from '@pages/Products/Products';
import { useEffect, useRef } from 'react';

interface IModalDelete {
	hide: (v: boolean) => void;
	products: IProduct[];
}

export const ModalDelete: React.FC<IModalDelete> = ({ products, hide }) => {
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
					className='w-full flex flex-col justify-center items-center border-t-[1px] border-[#2D313E] bg-[#1A1C24] publish-modal py-33.45px px-51.84px lg:(max-w-636px py-60px px-93px)'
				>
					<div className='w-full flex flex-col justify-center items-center'>
						<IconWarning className='lg:size-58px' />
						<div className='flex flex-col gap-7.8px mt-9.48px lg:(mt-17px gap-14px)'>
							<span className='text-13.379px font-500 text-center lg:text-2xl'>
								Delete Product
							</span>
							<span className='text-11.149px text-#8D8D92 text-center lg:text-xl'>
								Are you sure you want to delete this Product?
							</span>
						</div>
						<div className='w-full grid grid-cols-2 gap-7.8px mt-26.76px lg:mt-48px'>
							<button
								className='py-12.82px px-auto flex justify-center items-center rd-27.874px b-0.557px b-solid b-white hover:op-80 transition-all bg-transparent lg:(py-23px rd-50px b-1)'
								onClick={() => hide(false)}
							>
								<span className='text-11.149px font-500 leading-8px lg:(text-xl leading-14px)'>
									Cancel
								</span>
							</button>
							<button className='py-12.82px px-auto flex justify-center items-center rd-27.874px b-0.557px b-solid b-transparent hover:op-80 transition-all primary-gradient lg:(py-23px rd-50px)'>
								<span className='text-11.149px font-500 leading-8px lg:(text-xl leading-14px b-1)'>
									Yes
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

import SearchInput from '@components/Inputs/SearchInput';
import { IAdmin } from '@pages/Admins/Admin';
import c from 'classnames';
import { useEffect, useRef } from 'react';

interface IEditAdmin {
	admin: IAdmin | undefined;
	hide: (v: boolean) => void;
}
export const EditAminModal: React.FC<IEditAdmin> = ({ admin, hide }) => {
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

	if (!admin) {
		return;
	}
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
						<div className='w-full flex justify-center items-center'>
							<span className='text-base font-bold leading-24px'>
								Edit Admin
							</span>
						</div>
						<div className='w-full flex flex-col gap-15.55px mt-34.77px'>
							<div className='flex flex-col gap-7.858px'>
								<span className='text-11.225px font-500 leading-17px'>
									Username
								</span>
								<SearchInput
									placeholder={admin.username}
									containerStyle='h-39.85px rd-28.063px b-1.123px !b-border bg-transparent lg:!min-w-0'
									inputType='text'
									isHiddenIcon
								/>
							</div>
							<div className='flex flex-col gap-7.858px'>
								<span className='text-11.225px font-500 leading-17px'>
									Wallet Address
								</span>
								<SearchInput
									placeholder={admin.address}
									containerStyle='h-39.85px rd-28.063px b-1.123px !b-border bg-transparent lg:!min-w-0'
									inputType='text'
									isHiddenIcon
								/>
							</div>
						</div>
						<div className='grid grid-cols-2 w-full gap-16.84px mt-46.82px'>
							<button
								className={c(
									'inline-flex h-41.175px py-15.6px px-45.54px justify-center items-center rd-31.193px b-0.624px b-solid b-white shadow-[0px_12.477px_21.835px_0px_rgba(0,0,0,0.15)] bg-transparent hover:op-80 transition-all',
									'lg:(py-25px px-73px rd-50px) shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)] b-1px'
								)}
								onClick={() => hide(false)}
							>
								<span className='font-600 text-9.982px leading-10px lg:(text-base leading-16px)'>
									Cancel
								</span>
							</button>
							<button
								className={c(
									'inline-flex h-41.175px py-15.6px px-45.54px justify-center items-center rd-31.193px b-0.624px b-solid b-transparent primary-gradient shadow-[0px_12.477px_21.835px_0px_rgba(0,0,0,0.15)] hover:op-80 transition-all',
									'lg:(py-25px px-73px rd-50px) shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)] b-1px'
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

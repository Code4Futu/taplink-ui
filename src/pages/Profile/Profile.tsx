import icAvatar from '@assets/images/ic-avatar.png';
import IconCamera from '@assets/svg/ic-camera.svg?react';
import IconSearch from '@assets/svg/ic-search.svg?react';
import SearchInput from '@components/Inputs/SearchInput';
import { UserButton } from '@components/UserButton';
import { shortenAddress } from '@utils/addresses';
import c from 'classnames';
import { useAccount } from 'wagmi';

const Profile: React.FC = () => {
	const { address } = useAccount();
	return (
		<div className='flex flex-col w-full min-h-[calc(100vh-109.3px)]'>
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
				Profile
			</div>
			<div className='relative flex justify-center items-center'>
				<div className='relative flex size-90px lg:size-140px'>
					{/* <IconAvatar className='size-90px lg:size-140px' /> */}
					<img src={icAvatar} className='w-full h-full' alt='avatar' />
					<div className='absolute bottom-0 right-0 flex justify-center items-center size-21.857px bg-white drop-shadow-[0px_1.286px_6.429px_rgba(0,0,0,0.23)] rd-full overflow-hidden cursor-pointer lg:(size-34px bottom-5px)'>
						<IconCamera className='lg:size-24px' />
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-22.217px items-start mt-56px lg:(gap-31px items-center justify-center)'>
				<div className='flex flex-col gap-10px w-full lg:(gap-14px max-w-607px)'>
					<span className='text-14px font-500 c-background leading-22px lg:(text-xl leading-30px)'>
						Username
					</span>
					<SearchInput
						placeholder='Cristofer'
						containerStyle='h-51px rd-35.833px b-1.433px bg-transparent lg:(!min-w-0 h-71px py-24px)'
						inputType='text'
						isHiddenIcon
					/>
				</div>
				<div className='flex flex-col w-full lg:(gap-14px max-w-607px)'>
					<span className='text-14px font-500 c-background leading-22px lg:(text-xl leading-30px)'>
						Wallet
					</span>
					<div className='relative flex flex-col mt-10px gap-4.72px lg:(flex-row gap-13px items-center)'>
						<SearchInput
							placeholder={shortenAddress(address, 5, 3)}
							containerStyle='h-51px rd-35.833px b-1.433px bg-transparent lg:(!min-w-0 h-71px py-24px)'
							inputType='text'
							isHiddenIcon
						/>
						<div className='hidden lg:flex absolute right--113px cursor-pointer'>
							<span className='text-linear text-base leading-24px font-600'>
								Disconnect?
							</span>
						</div>
						<div className='flex justify-end lg:hidden cursor-pointer'>
							<span className='text-linear text-10px font-600'>
								Disconnect?
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className='relative flex flex-1 h-full justify-end items-end lg:(justify-center mt-4)'>
				<div className='w-full lg:max-w-607px'>
					<button
						className={c(
							'w-full inline-flex h-41.175px py-19px px-auto justify-center items-center rd-50px primary-gradient shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)] hover:op-80 transition-all',
							'lg:(py-25px max-w-161px h-66px)'
						)}
					>
						<span className='font-600 text-14px leading-14px text-white lg:(text-base leading-16px)'>
							Edit
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Profile;

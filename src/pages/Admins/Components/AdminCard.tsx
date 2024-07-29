import IconPencil from '@assets/svg/ic-pencil.svg?react';
import IconTrash from '@assets/svg/ic-trash.svg?react';
import { shortenAddress } from '@utils/addresses';
import c from 'classnames';
import { IAdmin } from '../Admin';

export interface IAdminCard {
	admin: IAdmin;
	setOpenEditAdmin: (v: boolean) => void;
	setSelectedAdmin: (admin: IAdmin | undefined) => void;
	setOpenDeleteAdmin: (v: boolean) => void;
}

const AdminCard: React.FC<IAdminCard> = ({
	admin,
	setOpenEditAdmin,
	setSelectedAdmin,
	setOpenDeleteAdmin,
}) => {
	return (
		<>
			{/* Admin card mobile */}
			<div
				className={c(
					'flex flex-col rounded-20px bg-white shadow-[0px_6px_50px_0px_rgba(0,0,0,0.08)] pt-14px pb-20px b-2px b-solid b-transparent transition-all',
					'xl:hidden'
				)}
			>
				<div className='flex justify-between items-center pl-14px pr-13.08px'>
					<div className='flex items-center gap-6px'>
						<img
							src={admin.avatar}
							alt='ic avatar'
							className='w-full h-full size-53px'
						/>
						<span className='text-container text-base font-500 leading-12px'>
							{admin.username}
						</span>
					</div>
					<div className='flex items-center gap-5.08px'>
						<button
							className='h-6 py-6.46px px-12.92px flex justify-center items-center rounded-46.154px bg-container transition-all hover:op-80'
							onClick={() => {
								setOpenEditAdmin(true);
								setSelectedAdmin(admin);
							}}
						>
							<IconPencil className='size-11.077px c-white' />
						</button>
						<button
							className={c(
								'h-6 py-6.46px px-12.92px flex justify-center items-center rounded-46.154px bg-white b-0.923px b-solid b-lightgrey transition-all hover:op-80'
							)}
							onClick={() => {
								setOpenDeleteAdmin(true);
								setSelectedAdmin(admin);
							}}
						>
							<IconTrash className='size-11.077px c-grey' />
						</button>
					</div>
				</div>
				<div className='flex flex-col gap-10px mt-10px pl-14px pr-13px'>
					<div className='flex'>
						<span className='text-xs text-boldgrey leading-18px'>
							Wallet address:
						</span>
						<div className='flex justify-end ml-auto'>
							<span className='text-xs leading-18px font-500 text-linear text-end'>
								{shortenAddress(admin.address as `0x${string}`, 5, 3)}
							</span>
						</div>
					</div>
					<div className='flex'>
						<span className='text-xs text-boldgrey leading-18px'>
							Join date:
						</span>
						<div className='flex justify-end ml-auto'>
							<span className='text-xs leading-18px font-500 c-container text-end'>
								{admin.joinDate}
							</span>
						</div>
					</div>
				</div>
			</div>
			{/* Admin card desktop */}
			<div className='hidden xl:block w-full rd-30px shadow-[0px_6px_50px_0px_rgba(0,0,0,0.08)] px-40px mt-21px'>
				<div className='table w-full'>
					<div className='table-row [&>div]:(!table-cell vertical-mid pb-29px) text-12px whitespace-nowrap font-400 c-grey'>
						<div className='w-32%'>
							<div className='!flex items-center h-full'>
								<img
									src={admin.avatar}
									alt='ic product'
									className='size-64px large:size-133px'
								/>
								<span className='text-xl large:text-2xl font-500 c-container ml-10px'>
									{admin.username}
								</span>
							</div>
						</div>
						<div className='text-base large:text-xl font-500 c-boldgrey w-27% text-linear'>
							{shortenAddress(admin.address as `0x${string}`, 5, 3)}
						</div>
						<div className='text-base large:text-xl font-500 c-container w-16%'>
							{admin.joinDate}
						</div>
						<div className='w-20%'>
							<div className='flex items-center gap-11px'>
								<div
									className={c(
										'h-52px py-7px px-14px flex justify-center items-center rounded-100px bg-container transition-all hover:op-80',
										'large:(py-12px px-28px)'
									)}
									onClick={() => {
										setOpenEditAdmin(true);
										setSelectedAdmin(admin);
									}}
								>
									<IconPencil className='size-6 c-white' />
									<span className='text-base font-500 w-42px c-white ml-1'>
										Edit
									</span>
								</div>
								<div
									className={c(
										'h-52px py-7px px-14px flex justify-center items-center rounded-100px bg-white b-2px b-solid b-lightgrey transition-all hover:op-80',
										'large:(py-14px px-28px)'
									)}
									onClick={() => {
										setOpenDeleteAdmin(true);
										setSelectedAdmin(admin);
									}}
								>
									<IconTrash className='size-6 c-grey' />
									<span className='text-base font-500 c-grey ml-1'>Delete</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminCard;

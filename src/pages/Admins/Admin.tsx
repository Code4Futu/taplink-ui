import icAvatar from '@assets/svg/ic-account.svg';
import IconArrowLeft from '@assets/svg/ic-arrow-left-light.svg?react';
import IconArrowRight from '@assets/svg/ic-arrow-right-light.svg?react';
import IconPlus from '@assets/svg/ic-plus.svg?react';
import IconSearch from '@assets/svg/ic-search.svg?react';
import { CheckBox } from '@components/Checkbox';
import { Divider } from '@components/Divider';
import { UserButton } from '@components/UserButton';
import c from 'classnames';
import { useState } from 'react';
import AdminCard from './Components/AdminCard';
import { AddAminModal } from './Components/Modals/AddAdminModal';
import { ModalDeleteAdmin } from './Components/Modals/DeleteAdminModal';
import { EditAminModal } from './Components/Modals/EditAdminModal';

interface IAdminPage {
	openAddAdmin: boolean;
	setOpenAddAdmin: (v: boolean) => void;
}

export interface IAdmin {
	adminId: number;
	avatar: string;
	username: string;
	address: string;
	joinDate: string;
}

const mockAdmins: IAdmin[] = [
	{
		adminId: 898988,
		avatar: icAvatar,
		username: 'Jackson',
		address: '0x2387879799809820190830183',
		joinDate: 'May 1st, 2024',
	},
	{
		adminId: 898989,
		avatar: icAvatar,
		username: 'Jackson',
		address: '0x2387879799809820190830183',
		joinDate: 'May 1st, 2024',
	},
	{
		adminId: 898990,
		avatar: icAvatar,
		username: 'Jackson',
		address: '0x2387879799809820190830183',
		joinDate: 'May 1st, 2024',
	},
];

const Admin: React.FC<IAdminPage> = ({ openAddAdmin, setOpenAddAdmin }) => {
	const [openEditAdmin, setOpenEditAdmin] = useState<boolean>(false);
	const [selectedAdmin, setSelectedAdmin] = useState<IAdmin | undefined>();
	const [openDeleteAdmin, setOpenDeleteAdmin] = useState<boolean>();

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
			<div className='hidden xl:flex items-center justify-between mt-30px flex-wrap'>
				<div className='hidden lg:flex items-baseline'>
					<span className='text-32px text-background font-bold leading-48px'>
						Manage Products
					</span>
					&nbsp;
					<span className='text-base text-grey'>(1,000)</span>
				</div>
				<button
					className={c(
						'py-14px px-4 flex items-center justify-center rd-100px primary-gradient shadow-[0px,4px,20px,0px,rgba(0,0,0,0.16)]',
						'2xl:px-28px'
					)}
					onClick={() => setOpenAddAdmin(true)}
				>
					<IconPlus className='size-32px' />
					<span className='text-base font-500 leading-24px'>Add New</span>
				</button>
			</div>
			{/* Admin list mobile */}
			<div className={c('grid grid-rows-auto mt-15px gap-15px', 'xl:hidden')}>
				{mockAdmins.map((admin) => (
					<AdminCard
						key={admin.adminId}
						admin={admin}
						setOpenEditAdmin={setOpenEditAdmin}
						setOpenDeleteAdmin={setOpenDeleteAdmin}
						setSelectedAdmin={setSelectedAdmin}
					/>
				))}
			</div>
			{/* Admin list desktop */}
			<div className='overflow-auto hidden xl:block mt-48.49px'>
				<div className='xl:table xl:b-border w-100%'>
					<div
						className={c(
							'hidden xl:table-row h-32px',
							'[&>div]:(table-cell text-xl c-container font-500)',
							'[&>div:first-child]:pl-40px',
							'[&>div:last-child]:pr-auto'
						)}
					>
						<div className='w-2%'>
							<div className='size-24px relative pt-2 mr-1'>
								<CheckBox checked size={24} className='absolute' />
							</div>
						</div>
						<div className='w-27%'>Username</div>
						<div className='w-30% whitespace-nowrap'>Wallet Address</div>
						<div className='w-24%'>Join Date</div>
						<div className='w-19%'>Action</div>
					</div>
				</div>
				<div
					className={c(
						'w-full rd-30px bg-white shadow-[0px,6px,50px,0px,rgba(0,0,0,0.08)] mt-17px pt-29px'
					)}
				>
					<div className='table w-full'>
						{mockAdmins.map((admin) => (
							<>
								<AdminCard
									key={admin.adminId}
									admin={admin}
									setOpenEditAdmin={setOpenEditAdmin}
									setOpenDeleteAdmin={setOpenDeleteAdmin}
									setSelectedAdmin={setSelectedAdmin}
								/>
								<Divider />
							</>
						))}
					</div>
					<div className='h-70px large:h-101px flex items-center justify-center'>
						<div className='flex gap-21.09px'>
							<button className='py-11.25px px-21.09px flex justify-center items-center rd-35.156px b-0.703px b-solid b-grey bg-transparent hover:op-80 transition-all'>
								<IconArrowLeft className='size-22.5px' />
							</button>
							<span className='text-xl font-500 c-boldgrey leading-15px flex items-center'>
								Page 1 of 100
							</span>
							<button className='py-11.25px px-21.09px flex justify-center items-center rd-35.156px b-0.703px b-solid b-container bg-container hover:op-80 transition-all'>
								<IconArrowRight className='size-22.5px' />
							</button>
						</div>
					</div>
				</div>
			</div>
			{openEditAdmin && (
				<EditAminModal hide={setOpenEditAdmin} admin={selectedAdmin} />
			)}
			{openDeleteAdmin && (
				<ModalDeleteAdmin hide={setOpenDeleteAdmin} admin={selectedAdmin} />
			)}
			{openAddAdmin && <AddAminModal hide={setOpenAddAdmin} />}
		</div>
	);
};

export default Admin;

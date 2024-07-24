import icProduct from '@assets/images/ic-product.png';
import IconArrowLeft from '@assets/svg/ic-arrow-left-light.svg?react';
import IconArrowRight from '@assets/svg/ic-arrow-right-light.svg?react';
import IconFilter from '@assets/svg/ic-filter.svg?react';
import IconPlus from '@assets/svg/ic-plus.svg?react';
import { CheckBox } from '@components/Checkbox';
import { Divider } from '@components/Divider';
import SearchInput from '@components/Inputs/SearchInput';
import { UserButton } from '@components/UserButton';
import c from 'classnames';
import { useState } from 'react';
import { EditDetailProduct } from './Components/Edits/EditDetailProduct';
import { EditProduct } from './Components/Edits/EditProduct';
import { ModalDelete } from './Components/Modals/ModalDelete';
import { ModalPublish } from './Components/Modals/ModalPublish';
import { ModalSuccess } from './Components/Modals/ModalSuccess';
import ProductCard from './Components/ProductCard';
import { FirstStep } from './Components/Steps/FirstStep';
import { SecondStep } from './Components/Steps/SecondStep';
import { Tab } from './Components/Tab';

export interface IProduct {
	productId: number;
	image: string;
	productName: string;
	brandName: string;
	colour: string;
	description: string;
}

const mockProducts: IProduct[] = [
	{
		productId: 898988,
		image: icProduct,
		productName: 'Title',
		brandName: 'Nike',
		colour: 'Green, Black. White',
		description:
			'Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
	},
	{
		productId: 898989,
		image: icProduct,
		productName: 'Title',
		brandName: 'Nike',
		colour: 'Green, Black. White',
		description:
			'Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
	},
];

interface IProductPage {
	openAddProduct: boolean;
	setOpenAddProduct: (v: boolean) => void;
}

const Products: React.FC<IProductPage> = ({
	openAddProduct,
	setOpenAddProduct,
}) => {
	const [filter, setFilter] = useState<'draft' | 'published' | 'selected'>(
		'draft'
	);
	const [selectedItems, setSelectedItems] = useState<IProduct[]>([]);
	const [openPublishModal, setOpenPublishModal] = useState<boolean>(false);
	const [openEditProduct, setOpenEditProduct] = useState<boolean>(false);
	const [openModalSuccess, setOpenModalSuccess] = useState<boolean>(false);
	const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
	const [all, setAll] = useState<boolean>(false);
	const [editTab, setEditTab] = useState<number>(0);
	const [tab, setTab] = useState<number>(0);

	const handleSelectedItem = (product: IProduct) => {
		const newSelectedItems = [...selectedItems];
		const itemIndex = newSelectedItems.indexOf(product);
		if (itemIndex !== -1) {
			newSelectedItems.splice(itemIndex, 1);
		} else {
			newSelectedItems.push(product);
		}
		setSelectedItems(newSelectedItems);
	};

	const [cid, setCid] = useState('');
	const [uploading, setUploading] = useState(false);
	const [file, setFile] = useState('');

	// TODO: Define type
	const uploadFile = async (fileToUpload: any) => {
		try {
			setUploading(true);
			const formData = new FormData();
			formData.append('file', fileToUpload, fileToUpload.name);
			const res = await fetch('/api/files', {
				method: 'POST',
				body: formData,
			});
			const ipfsHash = await res.text();
			setCid(ipfsHash);
			setUploading(false);
		} catch (e) {
			console.log(e);
			setUploading(false);
			alert('Trouble uploading file');
		}
	};

	// TODO: Define type
	const handleChange = (e: any) => {
		setFile(e.target.files[0]);
		uploadFile(e.target.files[0]);
	};

	const handleIncTab = () => {
		if (tab >= 1) {
			return;
		}
		setTab(tab + 1);
	};

	const handleDecTab = () => {
		if (tab <= 0) {
			return;
		}
		setTab(tab - 1);
	};

	const handleIncEditTab = () => {
		if (editTab >= 1) {
			return;
		}
		setEditTab(editTab + 1);
	};

	const handleDecEditTab = () => {
		if (editTab <= 0) {
			return;
		}
		setEditTab(editTab - 1);
	};

	return (
		<div className='w-full text-sm'>
			<SearchInput
				inputType='text'
				placeholder='Search your product'
				containerStyle='lg:hidden'
			/>
			<div className='hidden xl:flex justify-between'>
				<div className='hidden lg:flex items-baseline'>
					<span className='text-32px text-background font-bold leading-48px'>
						Manage Products
					</span>
					&nbsp;
					<span className='text-base text-grey'>(1,000)</span>
				</div>
				<UserButton />
			</div>
			<div className='xl:hidden'>
				<Tab filter={filter} setFilter={setFilter} />
			</div>
			<div className='hidden xl:flex items-center justify-between mt-30px flex-wrap'>
				<Tab filter={filter} setFilter={setFilter} />
				<div className='flex gap-19px'>
					<button
						className={c(
							'py-18px px-4 flex items-center justify-center rd-100px primary-gradient shadow-[0px,4px,20px,0px,rgba(0,0,0,0.16)]',
							'2xl:px-37px',
							{
								'!hidden': filter === 'published',
							}
						)}
						onClick={() => setOpenPublishModal(true)}
					>
						<span className='text-base font-500 leading-24px'>
							{filter === 'selected' ? 'Publish Items' : 'Add to Selected'}
						</span>
					</button>
					<button
						className={c(
							'py-19px px-4 flex items-center justify-center rd-100px b-1px b-solid b-grey',
							'2xl:px-28px'
						)}
					>
						<IconFilter />
						<span className='text-base font-500 leading-24px c-background'>
							Filter
						</span>
					</button>
					<button
						className={c(
							'py-14px px-4 flex items-center justify-center rd-100px primary-gradient shadow-[0px,4px,20px,0px,rgba(0,0,0,0.16)]',
							'2xl:px-28px'
						)}
						onClick={() => setOpenAddProduct(true)}
					>
						<IconPlus className='size-32px' />
						<span className='text-base font-500 leading-24px'>Add New</span>
					</button>
				</div>
			</div>
			<div className={c('text-10px font-500 leading-15px mt-9px', 'lg:hidden')}>
				<span className='text-boldgrey'>Instruction:</span>&nbsp;
				<span className='text-grey'>
					Hold down on any item to select it". Maybe below the Draft/Published
					tab
				</span>
			</div>
			{/* Product list mobile */}
			<div className={c('grid grid-rows-auto mt-15px gap-15px', 'xl:hidden')}>
				{(filter === 'selected'
					? mockProducts.filter((product) => selectedItems.includes(product))
					: mockProducts
				).map((product) => (
					<ProductCard
						key={product.productId}
						product={product}
						filter={filter}
						handleSelectedItem={handleSelectedItem}
						selectedItems={selectedItems}
						handleEditItem={setOpenEditProduct}
					/>
				))}
			</div>
			{/* Product list desktop */}
			<div className='overflow-auto hidden xl:block mt-48.49px'>
				<div className='xl:table xl:b-border w-100%'>
					<div
						className={c(
							'hidden xl:table-row h-32px',
							'[&>div]:(table-cell text-xl c-container font-500)',
							'[&>div:first-child]:pl-20px',
							'[&>div:last-child]:pr-auto'
						)}
					>
						<div className='w-2%'>
							<div className='size-24px relative pt-2 mr-1'>
								<CheckBox checked size={24} className='absolute' />
							</div>
						</div>
						<div className='w-6%'>All</div>
						<div className='w-20% whitespace-nowrap'>Title</div>
						<div className='w-18%'>Date Created</div>
						<div className='w-12%'>Brand</div>
						<div className='w-14% whitespace-nowrap'>Colours</div>
						<div className='w-14% whitespace-nowrap'>Creator</div>
						<div className='w-14% whitespace-nowrap'>Action</div>
					</div>
				</div>
				<div
					className={c(
						'w-full rd-30px bg-white shadow-[0px,6px,50px,0px,rgba(0,0,0,0.08)] mt-17px pt-29px',
						{
							hidden: filter === 'selected' && selectedItems.length === 0,
						}
					)}
				>
					<div className='table w-full'>
						{(filter === 'selected'
							? mockProducts.filter((product) =>
									selectedItems.includes(product)
							  )
							: mockProducts
						).map((product) => (
							<>
								<ProductCard
									key={product.productId}
									product={product}
									filter={filter}
									handleSelectedItem={handleSelectedItem}
									selectedItems={selectedItems}
									handleEditItem={setOpenEditProduct}
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
			{selectedItems.length && filter !== 'published' && (
				<div
					className='w-full inline-flex py-18px px-auto justify-center items-center rounded-100px bg-#141316 transition-all hover:op-80 mt-39px'
					onClick={() => setOpenPublishModal(true)}
				>
					<span className='text-base font-500 leading-24px text-center'>
						Publish Items
					</span>
				</div>
			)}
			{openAddProduct && (
				<>
					<div className='absolute w-full h-full inset-x-0 top-0 z-1 backdrop-blur-sm' />
					<div
						className={c(
							'absolute w-full h-full inset-x-0 bg-container top-0 z-999 transition-all z-2',
							'lg:(w-80% inset-y-0 left-20% rd-l-50px shadow-[0px,6px,80px,0px,rgba(0,0,0,0.16)] max-w-1293px overflow-hidden',
							{
								'min-h-[calc(100vh+320px)]': tab === 1,
							}
						)}
					>
						{/* Add product content mobile */}
						<div className='flex flex-col w-full h-full pt-13px pl-22px pr-26px lg:hidden'>
							{tab === 0 && (
								<FirstStep
									handleChange={handleChange}
									setOpenAddProduct={setOpenAddProduct}
								/>
							)}
							{tab === 1 && <SecondStep handleDecTab={handleDecTab} />}
							<>
								{tab === 0 && (
									<div className='flex flex-1 items-end w-full mb-6'>
										<button
											className='inline-flex w-full h-60px py-18px px-auto justify-center items-center rd-100px primary-gradient hover:op-80 transition-all'
											onClick={() => handleIncTab()}
										>
											<span className='font-500 text-base leading-24px c-white'>
												Continue
											</span>
										</button>
									</div>
								)}
								{tab === 1 && (
									<div className='flex flex-1 items-end w-full mb-6'>
										<button className='inline-flex w-full h-60px py-18px px-auto justify-center items-center rd-100px primary-gradient hover:op-80 transition-all'>
											<span className='font-500 text-base leading-24px c-white'>
												Add
											</span>
										</button>
									</div>
								)}
							</>
						</div>
						{/* Add product content desktop */}
						<div className='hidden w-full h-full lg:grid grid-cols-[55%_45%]'>
							<div className='flex flex-col pt-39px pl-58px pr-30px max-w-667px'>
								<FirstStep
									handleChange={handleChange}
									setOpenAddProduct={setOpenAddProduct}
								/>
							</div>
							<div className='flex flex-col bg-background rd-50px shadow-[0px,6px,80px,0px,rgba(0,0,0,0.16)] overflow-hidden py-29px px-47px max-w-535px'>
								<SecondStep handleDecTab={handleDecTab} />
								<div className='flex justify-center items-center gap-33px mt-auto'>
									<button
										className='inline-flex w-full h-48px py-18px px-auto justify-center items-center rd-50px bg-transparent hover:op-80 transition-all b-2px b-solid b-white'
										onClick={() => setOpenAddProduct(false)}
									>
										<span className='font-500 text-base leading-16px c-white'>
											Cancel
										</span>
									</button>
									<button className='inline-flex w-full h-48px py-18px px-auto justify-center items-center rd-50px bg-boldgrey hover:op-80 transition-all b-2px b-solid b-boldgrey'>
										<span className='font-500 text-base leading-16px c-[rgba(255,255,255,0.28)]'>
											Add
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
			{openEditProduct && (
				<div
					className={c(
						'absolute w-full h-full bg-container top-0 inset-x-0 z-999 transition-all',
						'lg:(max-w-545px max-h-778px bg-white shadow-[0px,6px,50px,0px,rgba(0,0,0,0.14)] rd-30px !inset-x-48%)'
					)}
				>
					{/* Edit Content Mobile */}
					<div className='flex flex-col w-full h-full pt-13px pl-22px pr-26px lg:hidden'>
						{editTab === 0 && (
							<EditProduct
								handleChange={handleChange}
								setOpenEditProduct={setOpenEditProduct}
							/>
						)}
						{editTab === 1 && (
							<EditDetailProduct handleDecEditTab={handleDecEditTab} />
						)}
						<>
							{editTab === 0 && (
								<div className='flex flex-1 items-end w-full mb-6'>
									<button
										className='inline-flex w-full h-60px py-18px px-auto justify-center items-center rd-100px primary-gradient hover:op-80 transition-all'
										onClick={() => handleIncEditTab()}
									>
										<span className='font-500 text-base leading-24px text-white'>
											Continue
										</span>
									</button>
								</div>
							)}
							{editTab === 1 && (
								<div className='flex flex-1 items-end w-full mb-6'>
									<button className='inline-flex w-full h-60px py-18px px-auto justify-center items-center rd-100px primary-gradient hover:op-80 transition-all'>
										<span className='font-500 text-base leading-24px text-white'>
											Edit
										</span>
									</button>
								</div>
							)}
						</>
					</div>
					{/* Edit Content Desktop */}
					<div className='flex flex-col w-full h-full pt-33px pl-31px pr-33px pb-29px'>
						<div className='flex flex-col gap-15px'>
							<span className='text-xl font-500 c-background leading-30px'>
								Title
							</span>
							<SearchInput
								placeholder='Title'
								containerStyle='lg:(h-71px rd-50 b-2px !b-lightgrey bg-transparent !min-w-0 w-full pl-22px)'
								inputType='text'
								isHiddenIcon
							/>
						</div>
						<div className='flex flex-col gap-15px mt-17px'>
							<span className='text-xl font-500 c-background leading-30px'>
								Creator
							</span>
							<SearchInput
								placeholder='Search Name'
								containerStyle='lg:(h-71px rd-50 b-2px !b-lightgrey bg-transparent !min-w-0 w-full pl-22px)'
								inputType='text'
								isHiddenIcon
							/>
						</div>
						<div className='flex flex-col gap-15px mt-17px'>
							<span className='text-xl font-500 c-background leading-30px'>
								Time
							</span>
							<div className='grid grid-cols-2 gap-13px'>
								<SearchInput
									placeholder=''
									containerStyle='lg:(h-71px rd-50 b-2px !b-lightgrey bg-transparent !min-w-0 w-full pl-22px placehoder:c-grey)'
									inputType='time'
									isHiddenIcon
								/>
								<SearchInput
									placeholder=''
									containerStyle='lg:(h-71px rd-50 b-2px !b-lightgrey bg-transparent !min-w-0 w-full pl-22px placehoder:c-grey)'
									inputType='time'
									isHiddenIcon
								/>
							</div>
						</div>
						<div className='flex flex-col gap-15px mt-17px'>
							<span className='text-xl font-500 c-background leading-30px'>
								Date
							</span>
							<div className='grid grid-cols-2 gap-13px'>
								<SearchInput
									placeholder=''
									containerStyle='lg:(h-71px rd-50 b-2px !b-lightgrey bg-transparent !min-w-0 w-full pl-22px placehoder:c-grey)'
									inputType='date'
									isHiddenIcon
								/>
								<SearchInput
									placeholder=''
									containerStyle='lg:(h-71px rd-50 b-2px !b-lightgrey bg-transparent !min-w-0 w-full pl-22px placehoder:c-grey)'
									inputType='date'
									isHiddenIcon
								/>
							</div>
						</div>
						<div className='flex flex-col gap-15px mt-17px'>
							<span className='text-xl font-500 c-background leading-30px'>
								Remaining NFC
							</span>
							<div className='flex gap-65px'>
								<CheckBox
									title='Yes'
									titleStyle='text-xl font-500 leading-30px c-container'
									size={30}
									className='items-center'
								/>
								<CheckBox
									title='No'
									size={30}
									className='items-center'
									titleStyle='text-xl font-500 leading-30px c-container'
									checked
								/>
							</div>
						</div>
						<div className='grid grid-cols-2 gap-29px mt-auto'>
							<button
								className={c(
									'py-25px px-auto flex items-center justify-center rd-50px b-2px b-solid b-background bg-transparent'
								)}
								onClick={() => setOpenEditProduct(false)}
							>
								<span className='text-base font-600 leading-16px c-background'>
									Cancel
								</span>
							</button>
							<button
								className={c(
									'py-25px px-auto flex items-center justify-center rd-50px b-2px b-solid b-transparent primary-gradient'
								)}
							>
								<span className='text-base font-600 leading-16px'>Save</span>
							</button>
						</div>
					</div>
				</div>
			)}
			{openPublishModal && (
				<ModalPublish
					products={selectedItems}
					hide={setOpenPublishModal}
					itemCount={selectedItems.length}
				/>
			)}
			{openModalSuccess && (
				<ModalSuccess isShowing={openModalSuccess} hide={setOpenModalSuccess} />
			)}
			{openModalDelete && (
				<ModalDelete products={selectedItems} hide={setOpenModalDelete} />
			)}
		</div>
	);
};

export default Products;

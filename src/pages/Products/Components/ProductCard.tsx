import IconPencil from '@assets/svg/ic-pencil.svg?react';
import IconTrash from '@assets/svg/ic-trash.svg?react';
import { CheckBox } from '@components/Checkbox';
import { UserButton } from '@components/UserButton';
import c from 'classnames';
import { IProduct } from '../Products';

interface IProductCard {
	filter: 'draft' | 'published' | 'selected';
	product: IProduct;
	selectedItems: IProduct[];
	handleSelectedItem: (product: IProduct) => void;
	handleEditItem: (v: boolean) => void;
}

const ProductCard: React.FC<IProductCard> = ({
	product,
	filter,
	selectedItems,
	handleSelectedItem,
	handleEditItem,
}) => {
	return (
		<>
			{/* Product card mobile */}
			<div
				className={c(
					'flex flex-col rounded-20px bg-white shadow-[0px_6px_50px_0px_rgba(0,0,0,0.08)] pt-5px pb-11px b-2px b-solid b-transparent transition-all',
					'2xl:hidden',
					{
						'hover:b-#754DFB cursor-pointer': filter !== 'published',
					},
					{
						'!b-#754DFB':
							filter !== 'published' &&
							selectedItems &&
							selectedItems.indexOf(product) !== -1,
					}
				)}
				onClick={() => handleSelectedItem(product)}
			>
				<div className='flex justify-between items-center pl-5px pr-13.08px'>
					<div className='flex items-center gap-6px'>
						<div className='w-85px h-76px rounded-15px overflow-hidden'>
							<img
								src={product.image}
								alt='ic product'
								className='w-full h-full'
							/>
						</div>
						<span className='text-container text-base font-500 leading-12px'>
							{product.productName}
						</span>
					</div>
					<div className='flex items-center gap-5.08px'>
						<div
							className='h-6 py-6.46px px-12.92px flex justify-center items-center rounded-46.154px bg-container transition-all hover:op-80'
							onClick={() => handleEditItem(true)}
						>
							<IconPencil className='size-11.077px c-white' />
						</div>
						<div
							className={c(
								'h-6 py-6.46px px-12.92px flex justify-center items-center rounded-46.154px bg-white b-0.923px b-solid b-lightgrey transition-all hover:op-80'
							)}
						>
							<IconTrash className='size-11.077px c-grey' />
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-10px mt-10px pl-14px pr-13px'>
					{filter === 'published' && (
						<div className='flex'>
							<span className='text-xs text-boldgrey leading-18px'>ID:</span>
							<div className='flex justify-end ml-auto'>
								<span className='text-xs leading-18px font-500 text-linear text-end'>
									#{product.productId}
								</span>
							</div>
						</div>
					)}
					<div className='flex'>
						<span className='text-xs text-boldgrey leading-18px'>Brand:</span>
						<div className='flex justify-end ml-auto'>
							<span className='text-xs leading-18px font-500 text-container text-end'>
								{product.brandName}
							</span>
						</div>
					</div>
					<div className='flex'>
						<span className='text-xs text-boldgrey leading-18px'>Colours:</span>
						<div className='flex justify-end ml-auto'>
							<span className='text-xs leading-18px font-500 text-container text-end'>
								{product.colour}
							</span>
						</div>
					</div>
					<div className='flex flex-col'>
						<span className='text-xs text-boldgrey leading-18px'>
							Description:
						</span>
						<span className='leading-18px text-xs text-container font-500'>
							{product.description}
						</span>
					</div>
				</div>
			</div>
			{/* Product card desktop */}
			<div className='hidden 2xl:block w-full rd-30px shadow-[0px_6px_50px_0px_rgba(0,0,0,0.08)] pl-20px mt-21px'>
				<div className='table w-full'>
					<div className='table-row [&>div]:(!table-cell vertical-mid pb-29px) text-12px whitespace-nowrap font-400 c-grey'>
						<div className='flex items-center w-5%'>
							<CheckBox size={24} />
						</div>
						<div className='w-17%'>
							<div className='!flex items-center h-full'>
								<img
									src={product.image}
									alt='ic product'
									className='size-64px large:size-133px'
								/>
								<span className='text-xl large:text-2xl font-500 c-container ml-22px'>
									{product.productName}
								</span>
							</div>
						</div>
						<div className='text-base large:text-xl font-500 c-boldgrey w-19%'>
							25 May, 2024 08:43 PM
						</div>
						<div className='text-base large:text-xl font-500 c-boldgrey w-7%'>
							{product.brandName}
						</div>
						<div className='text-base large:text-xl font-500 c-container w-14%'>
							{product.colour}
						</div>
						<div className='w-14%'>
							<UserButton />
						</div>
						<div className='w-14%'>
							<div className='flex items-center gap-11px'>
								<div
									className={c(
										'h-52px py-7px px-14px flex justify-center items-center rounded-100px bg-container transition-all hover:op-80',
										'large:(py-12px px-28px)'
									)}
									onClick={() => handleEditItem(true)}
								>
									<IconPencil className='size-6 c-white' />
								</div>
								<div
									className={c(
										'h-52px py-7px px-14px flex justify-center items-center rounded-100px bg-white b-2px b-solid b-lightgrey transition-all hover:op-80',
										'large:(py-14px px-28px)'
									)}
								>
									<IconTrash className='size-6 c-grey' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCard;

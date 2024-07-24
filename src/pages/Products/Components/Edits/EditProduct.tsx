import IconArrowLeft from '@assets/svg/ic-arrow-left.svg?react';
import IconPlus from '@assets/svg/ic-plus.svg?react';
import IconQuestion from '@assets/svg/ic-question.svg?react';
import Tooltip from '@components/Tooltip';

interface IEditProduct {
	handleChange: (e: any) => void;
	setOpenEditProduct: (v: boolean) => void;
}
export const EditProduct: React.FC<IEditProduct> = ({
	handleChange,
	setOpenEditProduct,
}) => {
	return (
		<>
			<div className='relative flex justify-center items-center'>
				<IconArrowLeft
					className='absolute left-0'
					onClick={() => setOpenEditProduct(false)}
				/>
				<span className='text-base font-bold leading-24px'>Edit Product</span>
			</div>
			<div className='flex flex-col gap-3 mt-29px'>
				<span className='text-20.3px font-bold leading-30px'>Add Images</span>
				<div className='ml-6'>
					<ul className='list-disc text-12.688px text-list leading-trim'>
						<li>Maximum of 7 images can be uploaded.</li>
						<li>Each image should be between 200KB and 20MB in size.</li>
					</ul>
				</div>
			</div>
			<div className='flex flex-col gap-10.78px mt-8.69px'>
				<div className='flex gap-8.25px items-center'>
					<span className='text-15.255px leading-23px font-500'>
						Featured Image
					</span>
					<Tooltip content='Tooltip'>
						<IconQuestion />
					</Tooltip>
				</div>
				<div className='relative flex items-center justify-center w-133.554px h-131.317px rd-12.688px b-0.634px b-dashed b-boldgrey cursor-pointer'>
					<IconPlus className='size-38.06px' />
					<input
						className='absolute w-full h-full op-0'
						id='image'
						type='file'
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-10.78px mt-37.27px'>
				<div className='flex gap-8.25px items-center'>
					<span className='text-15.255px leading-23px font-500'>
						Additional Images
					</span>
				</div>
				<div className='relative flex items-center justify-center w-133.554px h-131.317px rd-12.688px b-0.634px b-dashed b-boldgrey cursor-pointer'>
					<IconPlus className='size-38.06px' />
					<input
						className='absolute w-full h-full op-0'
						id='image'
						type='file'
						onChange={handleChange}
					/>
				</div>
			</div>
		</>
	);
};

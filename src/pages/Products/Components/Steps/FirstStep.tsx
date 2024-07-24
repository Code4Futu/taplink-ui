import IconArrowLeft from '@assets/svg/ic-arrow-left.svg?react';
import IconPlus from '@assets/svg/ic-plus.svg?react';
import IconQuestion from '@assets/svg/ic-question.svg?react';
import Tooltip from '@components/Tooltip';
import c from 'classnames';
interface IFirstStep {
	handleChange: (e: any) => void;
	setOpenAddProduct: (v: boolean) => void;
}
export const FirstStep: React.FC<IFirstStep> = ({
	handleChange,
	setOpenAddProduct,
}) => {
	return (
		<>
			<div className='relative flex justify-center items-center lg:hidden'>
				<IconArrowLeft
					className='absolute left-0'
					onClick={() => setOpenAddProduct(false)}
				/>
				<span className='text-base font-bold leading-24px'>Add Product</span>
			</div>
			<div className='flex flex-col gap-3 mt-29px lg:mt-0'>
				<span
					className={c(
						'text-20.3px font-bold leading-30px',
						'lg:(text-32px leading-48px)'
					)}
				>
					Add Images
				</span>
				<div className='ml-6 lg:mt-18px'>
					<ul
						className={c(
							'list-disc text-12.688px text-list leading-trim',
							'text-20px'
						)}
					>
						<li>Maximum of 7 images can be uploaded.</li>
						<li>Each image should be between 200KB and 20MB in size.</li>
					</ul>
				</div>
			</div>
			<div className='flex flex-col gap-10.78px mt-8.69px lg:(mt-44px gap-17px)'>
				<div className='flex gap-8.25px items-center lg:gap-13px'>
					<span
						className={c('text-15.255px leading-23px font-500', 'lg:text-2xl')}
					>
						Featured Image
					</span>
					<Tooltip content='Tooltip'>
						<IconQuestion className='lg:size-32px' />
					</Tooltip>
				</div>
				<div className='relative flex items-center justify-center w-133.554px h-131.317px rd-12.688px b-0.634px b-dashed b-boldgrey cursor-pointer lg:(w-179px h-207px b-1px)'>
					<IconPlus className='size-38.06px lg:size-60px' />
					<input
						className='absolute w-full h-full op-0'
						id='image'
						type='file'
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-10.78px mt-37.27px lg:(mt-59px gap-17px)'>
				<div className='flex gap-8.25px items-center'>
					<span
						className={c('text-15.255px leading-23px font-500', 'lg:text-2xl')}
					>
						Additional Images
					</span>
				</div>
				<div className='relative flex items-center justify-center w-133.554px h-131.317px rd-12.688px b-0.634px b-dashed b-boldgrey cursor-pointer lg:(w-179px h-207px b-1px)'>
					<IconPlus className='size-38.06px lg:size-60px' />
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

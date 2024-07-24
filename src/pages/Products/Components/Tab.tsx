import c from 'classnames';

interface ITab {
	filter: 'draft' | 'published' | 'selected';
	setFilter: (v: 'draft' | 'published' | 'selected') => void;
}

export const Tab: React.FC<ITab> = ({ filter, setFilter }) => {
	return (
		<>
			{/* Mobile */}
			<div className='xl:hidden w-full h-45px grid grid-cols-2 items-center rounded-30px bg-container p-1px mt-4'>
				<div
					className={c(
						'py-13.21px px-auto flex items-center justify-center bg-white rounded-30px text-10.435px font-500 leading-16px text-black transiton-all',
						{
							'!bg-transparent !text-white': filter !== 'draft',
						}
					)}
					onClick={() => setFilter('draft')}
				>
					<span>Draft</span>
				</div>
				<div
					className={c(
						'py-13.21px px-auto flex items-center justify-center bg-white rounded-30px text-10.435px font-500 leading-16px text-black transiton-all',
						{
							'!bg-transparent !text-white': filter !== 'published',
						}
					)}
					onClick={() => setFilter('published')}
				>
					<span>Published</span>
				</div>
			</div>
			{/* Desktop */}
			<div className='hidden w-full h-69px xl:grid grid-cols-3 items-center rounded-46.04px bg-container p-1 max-w-471px'>
				<div
					className={c(
						'py-20.26px px-auto flex items-center justify-center bg-white rounded-46.04px text-base font-500 leading-16px text-black transiton-all cursor-pointer',
						{
							'!bg-transparent !text-white': filter !== 'draft',
						}
					)}
					onClick={() => setFilter('draft')}
				>
					<span>Draft</span>
				</div>
				<div
					className={c(
						'py-20.26px px-auto flex items-center justify-center bg-white rounded-46.04px text-base font-500 leading-16px text-black transiton-all cursor-pointer',
						{
							'!bg-transparent !text-white': filter !== 'selected',
						}
					)}
					onClick={() => setFilter('selected')}
				>
					<span>Selected Items</span>
				</div>
				<div
					className={c(
						'py-20.26px px-auto flex items-center justify-center bg-white rounded-46.04px text-base font-500 leading-16px text-black transiton-all cursor-pointer',
						{
							'!bg-transparent !text-white': filter !== 'published',
						}
					)}
					onClick={() => setFilter('published')}
				>
					<span>Published</span>
				</div>
			</div>
		</>
	);
};

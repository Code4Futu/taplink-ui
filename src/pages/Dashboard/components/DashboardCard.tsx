import c from 'classnames';
export interface IDashboardCard {
	value: string;
	title: string;
	icon: any;
	iconDesc: string;
}

export const DashboardCard: React.FC<IDashboardCard> = ({
	value,
	title,
	icon,
	iconDesc,
}) => {
	return (
		<div
			className={c(
				'flex py-7 px-12 justify-center items-center rounded-20px bg-[linear-gradient(90deg,_#754DFB_0.05%,_#F561C0_99.93%)] shadow-[0px_1.107px_5.537px_0px_rgba(0,0,0,0.12)]',
				'xl:py-61px xl:px-226px xl:rounded-50px'
			)}
		>
			<div className='flex flex-col items-center'>
				<div
					className={c(
						'flex justify-center items-center size-48.588px rounded-full bg-[rgba(255,255,255,0.2)]',
						'xl:size-97px'
					)}
				>
					{icon}
				</div>
				<div className={c('flex flex-col items-center')}>
					<span
						className={c(
							'text-27px leading-41px font-medium',
							'xl:text-64px xl:leading-96px'
						)}
					>
						{value}
					</span>
					<span
						className={c(
							'leading-13px text-[rgba(255,255,255,0.8)] text-8.524px mt--4.262px',
							'xl:text-xl xl:leading-30px xl:mt--10px'
						)}
					>
						{title}
					</span>
				</div>
			</div>
		</div>
	);
};

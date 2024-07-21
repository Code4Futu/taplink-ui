import bgDesktop from '@assets/images/bg-desktop.png';
import bgMobile from '@assets/images/bg-mobile.png';
import LogoMobile from '@assets/svg/ic-logo-mobile.svg?react';
import c from 'classnames';
import ButtonConnect from './ButtonConnect';

export const Connect: React.FC = () => {
	return (
		<>
			<div className={c('absolute z-0 w-full h-full', 'lg:hidden')}>
				<div className='relative w-full h-full'>
					<img src={bgMobile} alt='' className='w-full h-full' />
				</div>
			</div>
			<div className={c('hidden absolute z-0 w-full h-full', 'lg:block')}>
				<div className='relative w-full h-full '>
					<img src={bgDesktop} alt='' className='w-full h-full' />
				</div>
			</div>
			<div className='relative w-full h-[calc(100vh)] px-6 pt-6 fadein z-[1] overflow-hidden'>
				<div className='flex items-center justify-between'>
					<LogoMobile width={86} height={28} />
					<ButtonConnect />
				</div>
				<div className='flex items-center justify-center w-full h-full'>
					<div className='flex flex-col items-center'>
						<div
							className={c(
								'size-[162px] rounded-full border-white border-[12px]',
								'lg:size-[352px]'
							)}
						/>
						<div className='flex flex-col items-center gap-3 mt-12 text-sm text-center'>
							<LogoMobile className={c('h-[28px] w-full', 'md:h-45px')} />
							<span
								className={c(
									'text-xs text-[#14131642]',
									'md:text-base md:max-w-896px'
								)}
							>
								Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
								vulputate libero et velit interdum, ac aliquet odio mattis.
								Class aptent taciti sociosqu ad litora torquent per conubia
								nostra, per inceptos himenaeos.
							</span>
							<ButtonConnect
								className={c(
									'py-[6px] pl-[24px] pr-[6px] gap-[14px] h-[38.496px]',
									'lg:h-[61px] lg:py-[10px] lg:pr-[10px] lg:pl-[39px] lg:gap-[18px]'
								)}
								styleTitle='text-base'
								styleIcon='size-[26.177px]'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

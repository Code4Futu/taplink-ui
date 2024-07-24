import IconTooltip from '@assets/svg/ic-tooltip-info.svg?react';
import {
	arrow,
	autoUpdate,
	flip,
	offset,
	Placement,
	shift,
	useClick,
	useDismiss,
	useFloating,
	useFocus,
	useHover,
	useInteractions,
	useRole,
} from '@floating-ui/react';
import React, { useMemo, useRef, useState } from 'react';
import c from 'classnames';

export type TooltipEvent = 'hover' | 'click';

export interface TooltipProps {
	content: string | React.ReactNode;
	children?: React.ReactNode;
	event?: TooltipEvent;
	place?: Placement;
	clickOptions?: {
		autoHide: boolean;
		timeout: number;
	};
	options?: {
		offset?: number;
		disabled?: boolean;
		delay?: number;
	};
	hiddenArrow?: boolean;
	className?: string;
	customX?: number;
	customY?: number;
}

const Tooltip: React.FC<TooltipProps> = ({
	content,
	children,
	place = 'top',
	event = 'hover',
	clickOptions,
	options,
	hiddenArrow = true,
	className,
	customX,
	customY,
}) => {
	const triangle = useRef<HTMLDivElement>(null);
	const [open, setOpen] = useState(false);
	const {
		refs: { setReference, setFloating },
		x,
		y,
		strategy,
		context,
		middlewareData,
		placement,
	} = useFloating({
		open: options?.disabled ? false : open,
		onOpenChange: options?.disabled ? undefined : setOpen,
		middleware: [
			offset(options?.offset !== undefined ? options.offset : 15),
			flip(),
			shift({ padding: 15 }),
			arrow({ element: triangle, padding: 4 }),
		],
		whileElementsMounted: autoUpdate,
		placement: place,
		strategy: 'fixed',
	});
	const click = useClick(context, { enabled: event === 'click' });
	const hover = useHover(context, {
		enabled: event === 'hover',
		move: false,
		delay: { close: options?.delay || 0 },
	});
	const focus = useFocus(context);
	const dismiss = useDismiss(context);
	const role = useRole(context, { role: 'tooltip' });
	const { getReferenceProps, getFloatingProps } = useInteractions([
		click,
		hover,
		focus,
		dismiss,
		role,
	]);
	const staticSide = useMemo(() => {
		return (
			{
				top: 'bottom',
				right: 'left',
				bottom: 'top',
				left: 'right',
			}[placement.split('-')[0]] || ''
		);
	}, [placement]);

	return (
		<div>
			<div
				className='cursor-pointer'
				ref={setReference}
				{...getReferenceProps({
					onClick(ev) {
						ev.stopPropagation();
						ev.preventDefault();
						if (!clickOptions?.autoHide) {
							return;
						}
						setTimeout(() => {
							setOpen((open) => !open);
						}, clickOptions?.timeout);
					},
				})}
			>
				{children || (
					<div className='px-6px'>
						<div className='h-14px w-14px flex items-center justify-center c-grey hover:c-primary op-50 hover:op-100'>
							<IconTooltip />
						</div>
					</div>
				)}
			</div>
			{open && content && (
				<div
					className={c(
						'px-12px py-6px bg-dropdown z-9999 text-12px leading-18px c-#fff max-w-[calc(100vw-30px)] rd-5px shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)]',
						className
					)}
					ref={setFloating}
					style={{
						position: strategy,
						top: customY ? y - customY : y,
						left: customX ? x - customX : x,
						width: 'max-content',
					}}
					{...getFloatingProps()}
				>
					{typeof content === 'string' ? (
						<span dangerouslySetInnerHTML={{ __html: content }}></span>
					) : (
						content
					)}
					<div
						ref={triangle}
						className={c(
							'position-absolute bg-drowdown w-8px h-8px transform-rotate-45deg',
							hiddenArrow && 'hidden'
						)}
						style={{
							left: middlewareData?.arrow?.x || '',
							top: middlewareData?.arrow?.y || '',
							right: '',
							bottom: '',
							[staticSide]: -4,
						}}
					></div>
				</div>
			)}
		</div>
	);
};

export default Tooltip;

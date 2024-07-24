import c from 'classnames';

export const Divider = ({ className }: { className?: string }) => {
	return (
		<div className={c('b-t-1px b-t-solid b-t-lightgrey', className)}></div>
	);
};

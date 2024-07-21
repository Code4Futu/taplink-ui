import React, { useState } from 'react';

interface SliderProps {
	onChange?: (value: number) => void; // Optional callback for value changes
	defaultValue?: number; // Default value for the slider
	min: number; // Minimum allowed value
	max: number; // Maximum allowed value
}

const Slider: React.FC<SliderProps> = ({
	onChange,
	defaultValue,
	min,
	max,
}) => {
	const [currentValue, setCurrentValue] = useState(defaultValue || min);

	const handleChange = (event: any) => {
		const newValue = parseInt(event.target.value);
		if (newValue >= min && newValue <= max) {
			setCurrentValue(newValue);
			onChange?.(newValue); // Optional callback for external updates
		}
	};

	const trackStyle = {
		width: `${((currentValue - min) / (max - min)) * 100}%`, // Calculate track fill based on current value
		backgroundColor: '#ddd',
		height: '10px',
	};

	const thumbStyle = {
		left: `${((currentValue - min) / (max - min)) * 100}%`, // Position thumb based on current value
		backgroundColor: '#333',
		width: '20px',
		height: '20px',
		borderRadius: '50%',
		position: 'absolute',
		cursor: 'pointer',
	};

	return (
		<div className='slider'>
			<div style={trackStyle}></div>
			<div
				style={{
					left: `${((currentValue - min) / (max - min)) * 100}%`, // Position thumb based on current value
					backgroundColor: '#333',
					width: '20px',
					height: '20px',
					borderRadius: '50%',
					position: 'absolute',
					cursor: 'pointer',
				}}
				onMouseDown={(e) => e.preventDefault()}
			></div>
			<input
				type='range'
				min={min}
				max={max}
				value={currentValue}
				onChange={handleChange}
			/>
			<span>{currentValue}</span>
		</div>
	);
};

export default Slider;

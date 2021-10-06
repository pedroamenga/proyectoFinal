import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker-cssmodules.css";

export const DateP = () => {
	const [startDate, setStartDate] = useState(new Date());

	let handleColor = time => {
		return time.getHours() > 12 ? "text-success" : "text-error";
	};

	return (
		<>
			<DatePicker
				showTimeSelect
				selected={startDate}
				onChange={date => {
					setStartDate(date);
					console.log(date);
				}}
				timeClassName={handleColor}
			/>
		</>
	);
};

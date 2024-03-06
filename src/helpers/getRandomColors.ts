interface Color {
	bg: string;
	text: string;
}

const colors: { [key: string]: Color } = {
	red: { bg: "#fee2e2", text: "#dc2626" },
	rose: { bg: "#ffe4e6", text: "#e11d48" },
	blue: { bg: "#dbeafe", text: "#2563eb" },
	green: { bg: "#d1fae5", text: "#059669" },
	indigo: { bg: "#e0e7ff", text: "#4f46e5" },
	cyan: { bg: "#cffafe", text: "#0891b2" },
	lime: { bg: "#ecfccb", text: "#65a30d" },
	amber: { bg: "#fef3c7", text: "#d97706" },
};

export const getRandomColors = (): Color => {
	const keys = Object.keys(colors);
	const randomKey = keys[Math.floor(Math.random() * keys.length)];
	return colors[randomKey];
};

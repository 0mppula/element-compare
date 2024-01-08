import React from 'react';

interface TypographyH1Props {
	children: React.ReactNode;
}

const TypographyH1 = ({ children }: TypographyH1Props) => {
	return (
		<h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl mb-4">
			{children}
		</h1>
	);
};

export default TypographyH1;

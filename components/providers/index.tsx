import { ThemeProvider } from '@/components/providers/theme-provider';
import React from 'react';
import { TooltipProvider } from '../ui/tooltip';

interface ProvidersProps {
	children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
	return (
		<ThemeProvider attribute="class" defaultTheme="system">
			<TooltipProvider>{children}</TooltipProvider>
		</ThemeProvider>
	);
};

export default Providers;

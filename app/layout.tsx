import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Source_Code_Pro } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Nav from '@/components/Nav';

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Element Compare',
	description: 'View and compare elements from the periodic table.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${cn(
					sourceCodePro.className,
					'text-neutral-900 dark:text-neutral-50 bg-neutral-100 dark:bg-neutral-950 antialiased'
				)}`}
			>
				<ThemeProvider attribute="class" defaultTheme="system">
					<Nav />

					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}

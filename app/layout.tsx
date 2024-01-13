import Nav from '@/components/Nav';
import Providers from '@/components/providers';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Source_Code_Pro } from 'next/font/google';
import './globals.css';

const sourceCodePro = Source_Code_Pro({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: 'Element Compare',
	description: 'View and compare elements from the periodic table.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="overflow-auto" suppressHydrationWarning>
			<body
				className={`${cn(
					sourceCodePro.className,
					'bg-neutral-100 dark:bg-neutral-950 antialiased overflow-auto'
				)}`}
			>
				<Providers>
					<Nav />

					{children}
				</Providers>
			</body>
		</html>
	);
}

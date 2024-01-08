export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="container min-h-svh pt-[72.8px] overflow-x-auto w-[calc(1400px)]">
			{children}
		</div>
	);
}

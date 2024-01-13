export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="container min-h-screen pt-[64.8px] overflow-x-auto min-w-[1200px] max-w-[calc(1448px)]">
			{children}
		</div>
	);
}

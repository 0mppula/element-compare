export default function RootLayout({ children }: { children: React.ReactNode }) {
	return <div className="container min-h-screen pt-[64.8px] overflow-scroll">{children}</div>;
}

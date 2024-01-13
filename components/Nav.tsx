import Link from 'next/link';
import { ThemeToggler } from './ThemeToggler';

function Nav() {
	return (
		<nav className="px-4 py-3 fixed inset-x-0 top-0 z-[50] border-b-[1px] dark:border-neutral-100/20 border-neutral-950/20 backdrop-blur-sm bg-neutral-100/75 dark:bg-neutral-950/75">
			<div className="flex items-center justify-between h-full gap-2 mx-auto max-w-[calc(1448px-32px)] font-semibold">
				<Link href="/">Element Compare</Link>

				<ThemeToggler />
			</div>
		</nav>
	);
}

export default Nav;

import { cn } from '@/lib/utils';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { Separator } from './ui/separator';

const Footer = () => {
	const socials = [
		{
			name: 'GitHub',
			url: 'https://github.com/0mppula',
			icon: <Github className="h-[1.5rem] w-[1.5rem]" />,
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/omarkraidie/',
			icon: <Linkedin className="h-[1.5rem] w-[1.5rem]" />,
		},
		{
			name: 'Email',
			url: 'mailto:devomarkraidie@gmail.com',
			icon: <Mail className="h-[1.5rem] w-[1.5rem]" />,
		},
		{
			name: 'Source Code',
			url: 'https://github.com/0mppula/element-compare',
			icon: <Code2 className="h-[1.5rem] w-[1.5rem]" />,
		},
	];

	return (
		<footer className="w-full pt-16 pb-8 text-center dark:border-neutral-100/20 border-neutral-950/20 border-t-2 bg-card">
			<div className="flex sm:gap-8 gap-4 items-center justify-center">
				{socials.map((social) => (
					<Link
						key={social.name}
						target="_blank"
						rel="noopener noreferrer"
						className={cn(
							buttonVariants({ variant: 'ghost', size: 'icon' }),
							'rounded-full h-12 w-12'
						)}
						href={social.url}
					>
						{social.icon}

						<span className="sr-only">{social.name}</span>
					</Link>
				))}
			</div>

			<Separator className="mb-6 mt-4 w-[min(350px,80vw)] bg-neutral-950/20 dark:bg-neutral-100/20  mx-auto" />

			<div>
				<span>Developed by </span>
				<Link
					href="https://www.omarkraidie.com/"
					target="_blank"
					rel="noopener noreferrer"
					className="active:decoration-dashed underline"
				>
					Omar Kraidié
				</Link>
			</div>
		</footer>
	);
};

export default Footer;

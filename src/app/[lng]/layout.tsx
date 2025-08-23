import '../globals.css';

import { dir } from 'i18next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Providers } from '@/core/providers/providers';

import { getT } from '../i18n';
import { languages } from '../i18n/settings';

export async function generateStaticParams() {
	return languages.map((lng) => ({ lng }));
}
export async function generateMetadata() {
	const { t } = await getT('translation');
	return {
		title: t('meta.title'),
		description: t('meta.description'),
	} satisfies Metadata;
}
const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
	params: Promise<{ lng: string }>;
	children: React.ReactNode;
}

export default async function RootLayout({ children, params }: LayoutProps) {
	const { lng } = await params;
	return (
		<html lang={lng} dir={dir(lng)}>
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}

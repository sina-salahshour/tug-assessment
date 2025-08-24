import type { PropsWithChildren } from 'react';

import { AuthGuard } from '@/features/auth/components/auth-guard';

export default function DashboardLayout({ children }: PropsWithChildren) {
	return <AuthGuard>{children}</AuthGuard>;
}

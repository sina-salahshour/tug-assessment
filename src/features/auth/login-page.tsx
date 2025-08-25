'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormControlLabel, Stack } from '@mui/material';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useT } from '@/app/i18n/client';

import { loginWithEmail, loginWithGoogle } from './api';
import {
	AcceptTermsCheckbox,
	AuthCard,
	AuthCardActionContainer,
	AuthCardContainer,
	AuthCardWrapper,
	AuthInput,
	AuthPageContainer,
	ForgotPasswordLink,
	GoogleIcon,
	LoginButton,
	MockCardLogo,
	SSOButton,
} from './auth.styles';
import { ReverseAuthGuard } from './components/reverse-auth-guard';

const loginSchema = z.object({
	email: z.email('email-validation-message'),
	password: z.string().min(1, 'password-validation-message'),
});

type FormType = z.infer<typeof loginSchema>;

export function LoginPage() {
	const { t } = useT('auth');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<FormType>({
		resolver: zodResolver(loginSchema),
	});
	const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);

	const onFormSubmit = useCallback(
		async function onFormSubmit(form: FormType) {
			if (!hasAcceptedTerms) {
				return;
			}
			try {
				setIsSubmitting(true);
				await loginWithEmail(form.email, form.password);
			} finally {
				setIsSubmitting(false);
			}
		},
		[hasAcceptedTerms],
	);

	const handleLoginWithGoogle = useCallback(
		async function handleLoginWithGoogle() {
			if (!hasAcceptedTerms) {
				return;
			}

			try {
				setIsSubmitting(true);
				loginWithGoogle();
			} finally {
				setIsSubmitting(false);
			}
		},
		[hasAcceptedTerms],
	);

	return (
		<>
			<ReverseAuthGuard />
			<AuthPageContainer>
				<AuthCardWrapper>
					<AuthCardContainer>
						<AuthCard>
							<form onSubmit={handleSubmit(onFormSubmit)}>
								<MockCardLogo>Logo</MockCardLogo>
								<Stack gap={'18px'}>
									<AuthInput
										helperText={errors.email?.message}
										error={errors.email != null}
										placeholder='Email *'
										required
										variant='outlined'
										{...register('email')}
									/>
									<AuthInput
										helperText={errors.password?.message}
										error={errors.password != null}
										placeholder='Password *'
										required
										variant='outlined'
										{...register('password')}
									/>
								</Stack>
								<ForgotPasswordLink href='/auth/reset-password'>
									{t('forgot-password')}
								</ForgotPasswordLink>
								<FormControlLabel
									control={
										<AcceptTermsCheckbox
											checked={hasAcceptedTerms}
											onChange={(e) =>
												setHasAcceptedTerms(e.currentTarget.checked)
											}
										/>
									}
									label={t('accept-terms')}
								/>
								<AuthCardActionContainer>
									<LoginButton
										type='submit'
										variant='contained'
										disableElevation
										fullWidth
										disabled={!hasAcceptedTerms}
										loading={isSubmitting}
									>
										{t('login')}
									</LoginButton>
									<div>{t('or')}</div>
									<SSOButton
										disabled={!hasAcceptedTerms}
										variant='outlined'
										disableElevation
										fullWidth
										loading={isSubmitting}
										onClick={handleLoginWithGoogle}
									>
										<GoogleIcon /> {t('login-with-google')}
									</SSOButton>
								</AuthCardActionContainer>
							</form>
						</AuthCard>
					</AuthCardContainer>
				</AuthCardWrapper>
			</AuthPageContainer>
		</>
	);
}

'use client';

import { FormControlLabel, Stack } from '@mui/material';

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

export function LoginPage() {
	return (
		<AuthPageContainer>
			<AuthCardWrapper>
				<AuthCardContainer>
					<AuthCard>
						<MockCardLogo>Logo</MockCardLogo>
						<Stack gap={'18px'}>
							<AuthInput placeholder='Email *' required variant='outlined' />
							<AuthInput placeholder='Password *' required variant='outlined' />
						</Stack>
						<ForgotPasswordLink href='/auth/reset-password'>
							FORGOT PASSWORD?
						</ForgotPasswordLink>
						<FormControlLabel
							control={<AcceptTermsCheckbox />}
							label='I accept the terms and conditions'
						/>
						<AuthCardActionContainer>
							<LoginButton variant='contained' disableElevation fullWidth>
								LOGIN
							</LoginButton>
							<div>Or</div>
							<SSOButton variant='outlined' disableElevation fullWidth>
								<GoogleIcon /> LOGIN WITH GOOGLE
							</SSOButton>
						</AuthCardActionContainer>
					</AuthCard>
				</AuthCardContainer>
			</AuthCardWrapper>
		</AuthPageContainer>
	);
}

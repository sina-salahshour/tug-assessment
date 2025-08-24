import { Box, Button, Card, Checkbox, styled, TextField } from '@mui/material';
import Link from 'next/link';

import GoogleIconBase from './assets/google.svg';

export const AuthPageContainer = styled(Box)({
	backgroundColor: '#7F7F7F',
	height: '100dvh',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
});

export const AuthCardWrapper = styled(Box)({
	maxHeight: '100%',
	overflowY: 'auto',
	scrollbarWidth: 'none',
	maxWidth: '548px',
	width: '100%',
});
export const AuthCardContainer = styled(Box)({
	paddingBlock: '16px',
	paddingInline: '12px',
});
export const AuthCard = styled(Card)({
	minWidth: '0',
	borderRadius: '8px',
	paddingInline: '32px',
	paddingBlockStart: '42px',
	paddingBlockEnd: '28px',
	display: 'flex',
	flexDirection: 'column',
});

export const MockCardLogo = styled('div')({
	marginBottom: '40px',
	width: '170px',
	height: '84px',
	backgroundColor: '#E0E0E0',
	borderRadius: '8px',
	marginInline: 'auto',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	fontWeight: '600',
	fontSize: '18p',
});

export const AuthInput = styled(TextField)({
	borderRadius: '4px',
	fontSize: '16px',
	height: '48px',
	transition: 'all 300ms',
	[`& .MuiInputBase-input`]: {
		padding: '12px',
		height: '24px',
		borderColor: '#E8E8E8',

		'&::placeholder': {
			color: '#3C3C42',
		},
	},
	'&:has(.Mui-error)': {
		marginBottom: '12px',
	},
});

export const ForgotPasswordLink = styled(Link)({
	marginTop: '16px',
	marginBottom: '55px',
	color: '#00AA4F',
	fontWeight: '500',
	fontSize: '16px',
	display: 'block',
	textDecoration: 'none',

	'&:hover': {
		textDecoration: 'underline',
	},
});

export const AcceptTermsCheckbox = styled(Checkbox)({
	color: '#D8D8D8',
});

export const AuthCardActionContainer = styled(Box)({
	marginTop: 'auto',
	paddingTop: '12px',
	display: 'flex',
	flexDirection: 'column',
	gap: '12px',
	fontSize: '14px',
	textAlign: 'center',
});

export const GoogleIcon = styled(GoogleIconBase)({
	width: '16px',
	height: '16px',
});

export const LoginButton = styled(Button)({
	fontWeight: '600',
	fontSize: '14px',
	height: '42px',
});

export const SSOButton = styled(LoginButton)({
	gap: '8px',
	borderColor: '#D8D8D8',
});

import type { NextConfig } from 'next';

interface RuleSetRule {
	test?: RegExp;
}

const nextConfig: NextConfig = {
	output: 'export',
	/* just yanked from documentation 'https://react-svgr.com/docs/next/' */
	webpack(config) {
		const fileLoaderRule = config.module.rules.find((rule: RuleSetRule) =>
			rule.test?.test?.('.svg'),
		);

		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
				use: ['@svgr/webpack'],
			},
		);

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	},
};
export default nextConfig;

'use client';
import { app } from '@/constants';
import { Container, Typography } from '@mui/joy';
import Link from 'next/link';
import type React from 'react';

export const Accessibility = () => {
	return (
		<>
			<header
				className={`
				text-center text-2xl font-bold
				text-[#3C2415]  mt-10 h-[30vh] w-full flex items-center justify-center
			`}
			>
				<h1>Website Accessibility Policy</h1>
			</header>
			<>
				<Container
					component={`article`}
					sx={{
						my: 3,
					}}
					maxWidth={`sm`}
				>
					<Typography
						sx={{
							color: '#3C2415',
						}}
						gutterBottom
					>
						{app.name} is committed to making our website, <Link href={app.url}>{app.url}</Link>,
						accessible to all individuals, including those with disabilities. We strive to ensure
						that our website complies with the Web Content Accessibility Guidelines{' '}
						<Link
							href={`https://www.w3.org/TR/WCAG21/#requirements-for-wcag-2-1`}
							className={`underline`}
						>
							(WCAG) 2.1 Level AA
						</Link>
						.
					</Typography>
					<Typography
						sx={{
							color: '#3C2415',
						}}
						gutterBottom
					>
						We have invested a significant amount of resources to help ensure that its website is
						made easier to use and more accessible for people with disabilities, with the strong
						belief that every person has the right to live with dignity, equality, comfort and
						independence.
					</Typography>
					<Typography
						sx={{
							color: '#3C2415',
						}}
						gutterBottom
					>
						To ensure that our website is accessible to those with disabilities, we have implemented
						the following accessibility features:
					</Typography>
					<ol>
						<li>We use alt tags to describe all images on our website</li>
						<li>We use clear and easy-to-read fonts and colors</li>
						<li>
							We ensure that all website functionality is accessible through a keyboard interface
						</li>
					</ol>
					<Typography
						sx={{
							color: '#3C2415',
						}}
					>
						While we are committed to making our website accessible, we understand that not all
						areas of our website may be{' '}
						<Link className={`underline`} href={`https://www.ada.gov/`}>
							ADA
						</Link>{' '}
						or{' '}
						<Link
							className={`underline`}
							href={`https://www.w3.org/WAI/standards-guidelines/wcag/glance/`}
						>
							WCAG
						</Link>{' '}
						compliant, and are actively working to increase our compliance level. If you have any
						questions or concerns about the accessibility of our website, please contact us at{' '}
						<Link className={`underline`} href={`mailto:${app.email}`}>
							{app.email}
						</Link>
						.
					</Typography>
					<Typography
						sx={{
							color: '#3C2415',
						}}
						gutterBottom
					>
						We will do our best to address any issues and answer any questions. Thank you for
						visiting our website!
					</Typography>
					<Typography
						sx={{
							color: '#3C2415',
						}}
						gutterBottom
					>
						This policy was last updated on 26 December 2023.
					</Typography>
				</Container>
			</>
		</>
	);
};

'use client';

import * as Motion from '@/components';
import { cn } from '@/lib';
import type { SemanticProps } from '@/types';

export const Article: React.FC<SemanticProps<'article'>> = ({
	framer,
	children,
	className,
	attributes,
	style,
	framerProps,
}) => {
	type SectionMotionProps = typeof Motion.MotionArticle extends React.FC<infer P> ? P : never;
	return (
		<>
			{framer ? (
				<Motion.MotionArticle
					{...(framerProps as SectionMotionProps)}
					className={cn('', className)}
					style={style}
				>
					{children}
				</Motion.MotionArticle>
			) : (
				<article {...attributes} className={cn('', className)} style={style}>
					{children}
				</article>
			)}
		</>
	);
};

export const Aside: React.FC<SemanticProps<'aside'>> = ({
	framer,
	children,
	className,
	style,
	framerProps,
	attributes,
}) => {
	type SectionMotionProps = typeof Motion.MotionAside extends React.FC<infer P> ? P : never;
	return (
		<>
			{framer ? (
				<Motion.MotionAside
					{...(framerProps as SectionMotionProps)}
					className={cn('', className)}
					style={style}
				>
					{children}
				</Motion.MotionAside>
			) : (
				<aside {...attributes} className={cn('', className)} style={style}>
					{children}
				</aside>
			)}
		</>
	);
};

export const Div: React.FC<SemanticProps<'div'>> = ({
	framer,
	children,
	className,
	style,
	attributes,
	framerProps,
}) => {
	type SectionMotionProps = typeof Motion.MotionDiv extends React.FC<infer P> ? P : never;
	return (
		<>
			{framer ? (
				<Motion.MotionDiv
					{...(framerProps as SectionMotionProps)}
					className={cn('', className)}
					style={style}
				>
					{children}
				</Motion.MotionDiv>
			) : (
				<div {...attributes} className={cn('', className)} style={style}>
					{children}
				</div>
			)}
		</>
	);
};

export const Figure: React.FC<SemanticProps<'figure'>> = ({
	framer,
	children,
	className,
	style,
	framerProps,
	attributes,
}) => {
	type SectionMotionProps = typeof Motion.MotionFigure extends React.FC<infer P> ? P : never;
	return (
		<>
			{framer ? (
				<Motion.MotionFigure
					{...(framerProps as SectionMotionProps)}
					className={cn('', className)}
					style={style}
				>
					{children}
				</Motion.MotionFigure>
			) : (
				<figure {...attributes} className={cn('', className)} style={style}>
					{children}
				</figure>
			)}
		</>
	);
};

export const Footer: React.FC<SemanticProps<'footer'>> = ({
	framer,
	children,
	className,
	style,
	framerProps,
	attributes,
}) => {
	type SectionMotionProps = typeof Motion.MotionFooter extends React.FC<infer P> ? P : never;
	return (
		<>
			{framer ? (
				<Motion.MotionFooter
					{...(framerProps as SectionMotionProps)}
					className={cn('', className)}
					style={style}
				>
					{children}
				</Motion.MotionFooter>
			) : (
				<footer {...attributes} className={cn('', className)} style={style}>
					{children}
				</footer>
			)}
		</>
	);
};

export const Header: React.FC<SemanticProps<'header'>> = ({
	framer,
	children,
	className,
	style,
	framerProps,
	attributes,
}) => {
	type SectionMotionProps = typeof Motion.MotionHeader extends React.FC<infer P> ? P : never;
	return (
		<>
			{framer ? (
				<Motion.MotionHeader
					{...(framerProps as SectionMotionProps)}
					className={cn('', className)}
					style={style}
				>
					{children}
				</Motion.MotionHeader>
			) : (
				<header {...attributes} className={cn('', className)} style={style}>
					{children}
				</header>
			)}
		</>
	);
};

export const Main: React.FC<SemanticProps<'main'>> = ({
	framer,
	children,
	className,
	style,
	framerProps,
	attributes,
}) => {
	type SectionMotionProps = typeof Motion.MotionMain extends React.FC<infer P> ? P : never;
	return (
		<>
			{framer ? (
				<Motion.MotionMain
					{...(framerProps as SectionMotionProps)}
					className={cn('', className)}
					style={style}
				>
					{children}
				</Motion.MotionMain>
			) : (
				<main {...attributes} className={cn('', className)} style={style}>
					{children}
				</main>
			)}
		</>
	);
};

export const Menu: React.FC<SemanticProps<'menu'>> = ({
	framer,
	children,
	className,
	style,
	framerProps,
	attributes,
}) => {
	type SectionMotionProps = typeof Motion.MotionMenu extends React.FC<infer P> ? P : never;
	return (
		<>
			{framer ? (
				<Motion.MotionMenu
					{...(framerProps as SectionMotionProps)}
					className={cn('', className)}
					style={style}
				>
					{children}
				</Motion.MotionMenu>
			) : (
				<menu {...attributes} className={cn('', className)} style={style}>
					{children}
				</menu>
			)}
		</>
	);
};

export const Nav: React.FC<SemanticProps<'nav'>> = ({
	framer,
	children,
	className,
	style,
	framerProps,
	attributes,
}) => {
	type SectionMotionProps = typeof Motion.MotionNav extends React.FC<infer P> ? P : never;
	return (
		<>
			{framer ? (
				<Motion.MotionNav
					{...(framerProps as SectionMotionProps)}
					className={cn('', className)}
					style={style}
				>
					{children}
				</Motion.MotionNav>
			) : (
				<nav {...attributes} className={cn('', className)} style={style}>
					{children}
				</nav>
			)}
		</>
	);
};

export const Picture: React.FC<SemanticProps<'picture'>> = ({
	framer,
	framerProps,
	attributes,
	style,
	className,
	children,
}) => {
	type SectionMotionProps = typeof Motion.MotionPicture extends React.FC<infer P> ? P : never;
	return (
		<>
			{framer ? (
				<Motion.MotionPicture
					{...(framerProps as SectionMotionProps)}
					className={cn('', className)}
					style={style}
				>
					{children}
				</Motion.MotionPicture>
			) : (
				<picture {...attributes} className={cn('', className)} style={style}>
					{children}
				</picture>
			)}
		</>
	);
};

export const Section: React.FC<SemanticProps<'section'>> = ({
	framer,
	children,
	className,
	style,
	framerProps,
	attributes,
}) => {
	type SectionMotionProps = typeof Motion.MotionSection extends React.FC<infer P> ? P : never;
	return (
		<>
			{framer ? (
				<Motion.MotionSection
					{...(framerProps as SectionMotionProps)}
					className={cn('', className)}
					style={style}
				>
					{children}
				</Motion.MotionSection>
			) : (
				<section {...attributes} className={cn('', className)} style={style}>
					{children}
				</section>
			)}
		</>
	);
};

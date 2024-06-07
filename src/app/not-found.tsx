'use client';
import { CenterLayout, Picture } from '@/components';
import { Container, Typography } from '@mui/joy';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import React from 'react';

const NotFound = React.memo(() => {
	return (
		<CenterLayout
			Element={`main`}
			className={`
                w-screen h-screen flex items-center
                justify-center 
            `}
		>
			<Container
				sx={{
					my: 20,
					zIndex: '10',
					position: 'relative',
					textAlign: 'center',
				}}
				maxWidth="sm"
				component={`article`}
			>
				<Typography
					level="h1"
					component="h1"
					gutterBottom
					sx={{
						color: '#3C2415',
					}}
				>
					404
				</Typography>
				<Typography
					level="h2"
					gutterBottom
					sx={{
						color: '#3C2415',
					}}
				>
					Oh no, you've lost your way!
				</Typography>
				<Typography
					level="body-md"
					gutterBottom
					sx={{
						color: '#3C2415',
					}}
				>
					Just like a marathon, coding can sometimes lead us off track. But don't worry, we're here
					to help you cross the finish line. Let's get you back to the starting block.
				</Typography>
				<Button className="bg-[#3C2415] text-[#f5f5f5]">Return to the starting line</Button>
			</Container>
			<Picture
				className={`
          absolute top-1/2 left-1/2
					transform -translate-x-1/2 -translate-y-1/2
					max-w-screen-xl
        `}
			>
				<Image
					src="/assets/svgs/dom/404.svg"
					className={``}
					alt="404"
					width={1000}
					height={1000}
					fetchPriority={`low`}
					loading={`eager`}
				/>
			</Picture>
		</CenterLayout>
	);
});

export default NotFound;

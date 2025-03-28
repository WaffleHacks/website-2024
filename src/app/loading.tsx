'use client';
import { CenterLayout, CustomPicture as Picture } from '@/components';
import Image from 'next/image';
import React from 'react';

const Loading = React.memo(() => {
	return (
		<>
			<CenterLayout
				Element={`section`}
				className={`
					flex flex-col justify-center
					items-center h-screen w-screen
					overflow-hidden  top-0
					left-0 bottom-0 right-0 z-50
        `}
			>
				<Picture
					className={`
              relative w-[200px] h-[200px]
              animate-spin
            `}
				>
					<Image src={`/assets/svgs/dom/loading.svg`} alt={`Loading`} fill objectFit={`contain`} />
				</Picture>
			</CenterLayout>
		</>
	);
});
export default Loading;

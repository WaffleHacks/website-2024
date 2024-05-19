import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '@/hooks/index';

type Faq = {};

const FaqContext = createContext<Faq | undefined>(undefined);

export const FaqProvider: React.FC<Readonly<{
	children: React.ReactNode;
}>> = ({ children }) => {
	const [faq, setFaq] = useLocalStorage('', '');

	const toggleFaq = () => {
		setFaq(
			(prevFaq: '') => 
				(prevFaq === '' ? '' : '')
		);
	}

	return (
		<FaqContext.Provider 
			value={{
				faq, toggleFaq
			}}
		>
			{children}
		</FaqContext.Provider>
	);
};

export const useFaq = () => {
	const context = useContext(FaqContext);
	if (context === undefined) {
		throw new Error('useFaq must be used within a FaqProvider');
	}
	return context;
};

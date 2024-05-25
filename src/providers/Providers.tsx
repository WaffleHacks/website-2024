"use client";
import { Semantics } from "@/components";
import { NextUIProvider } from "@nextui-org/react";
import type React from "react";
import { Events } from "./events";
import RootStyleRegistry from "./theme/ThemeRegistry";
export const Providers: React.FC<{
	children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
	return (
		<ProviderStack
			providers={[
				[NextUIProvider, {}],
				[RootStyleRegistry, {}],
				[Events, {}],
			]}
		>
			<>{children}</>
		</ProviderStack>
	);
};

type NoInfer<T> = [T][T extends any ? 0 : 1];

type ContainsChildren = {
	children?: React.ReactNode;
};

function ProviderStack<
	Providers extends [ContainsChildren, ...ContainsChildren[]],
>({
	providers,
	children,
}: {
	providers: {
		[k in keyof Providers]: [
			React.JSXElementConstructor<Providers[k]>,
			Omit<NoInfer<Providers[k]>, "children">,
		];
	};
	children: React.ReactNode;
}) {
	let node = children;

	for (const [Provider, props] of providers) {
		node = <Provider {...props}>{node}</Provider>;
	}

	return node;
}

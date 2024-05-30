"use client";
import { Accordion, ScavContext } from "@/components";
import { Faqs } from "@/constants";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useContext, useState } from "react";

export const FaqPanel = () => {
	const sections = Faqs.map((faq) => faq.section);
	const [selectedSection, setSelectedSection] = useState<string | null>(null);
	const { scavState } = useContext(ScavContext);
	return (
		<div className="bg-white p-8 md:text-left flex justify-center font-mplus mx-8 rounded-xl  backdrop-blur-lg">
			<div className="block w-full" style={{ maxWidth: "min(100vw, 80rem)" }}>
				<Tabs
					className={`
						flex flex-row justify-center
						mb-8 flex-wrap
					`}
					aria-label="FAQ Sections"
					items={[
						{
							id: "all",
							label: "Show All",
							content: (
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									{Faqs.map((faq, index) => (
										<Accordion key={index} data={faq.items} />
									))}
								</div>
							),
						},
						...sections.map((section) => ({
							id: section,
							label: section,
							content: (
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									{Faqs.filter((faq) => faq.section === section).map(
										(faq, index) => (
											<Accordion key={index} data={faq.items} />
										),
									)}
								</div>
							),
						})),
					]}
				>
					{(item) => (
						<Tab key={item.id} title={item.label}>
							{item.content}
						</Tab>
					)}
				</Tabs>
			</div>
		</div>
	);
};

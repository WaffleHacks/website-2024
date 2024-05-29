"use client";
import { Accordion } from "@/components";
import { Faqs } from "@/constants";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useState } from "react";

export const FaqPanel = () => {
	const sections = Faqs.map((faq) => faq.section);
	const [selectedSection, setSelectedSection] = useState<string | null>(null);

	return (
		<div className="bg-white p-8 md:text-left flex justify-center font-mplus">
			<div className="block w-full" style={{ maxWidth: "min(100vw, 80rem)" }}>
				<h2 className="text-4xl font-extrabold mb-4">FAQs</h2>
				<Tabs
					className="flex flex-row justify-center mb-8"
					aria-label="FAQ Sections"
					items={[
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

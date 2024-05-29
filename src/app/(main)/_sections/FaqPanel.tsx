"use client";
import { Accordion } from "@/components";
import { Faqs } from "@/constants";
import { useState } from "react";

export const FaqPanel = () => {
	const sections = Faqs.map((faq) => faq.section);

	const [selectedSection, setSelectedSection] = useState<string | null>(null);

	return (
		<div className="p-8 md:text-left flex justify-center font-mplus w-full">
			<div className="block w-full" style={{ maxWidth: "min(100vw, 80rem)" }}>
				<h2 className="text-4xl font-extrabold mb-4">FAQs</h2>
				<div className="flex flex-row justify-center mb-8">
					{sections.map((section, index) => (
						<button
							key={index}
							onClick={() => setSelectedSection(section)}
							className={`mx-2 p-2 border rounded ${
								selectedSection === section ? "bg-gray-300" : ""
							}`}
						>
							{section}
						</button>
					))}
					<button
						onClick={() => setSelectedSection(null)}
						className={`mx-2 p-2 border rounded ${
							selectedSection === null ? "bg-gray-300" : ""
						}`}
					>
						Show All
					</button>
				</div>
				<div
					className={`
						grid grid-cols-1 md:grid-cols-2
						gap-4 
					`}
				>
					{Faqs.filter(
						(faq) =>
							selectedSection === null || faq.section === selectedSection,
					).map((faq, index) => (
						<Accordion key={index} data={faq.items} />
					))}
				</div>
			</div>
		</div>
	);
};

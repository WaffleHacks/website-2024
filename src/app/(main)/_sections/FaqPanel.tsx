"use client";
import { Accordion, card_style } from "@/components";
import { Faqs } from "@/constants";
import { Tab, Tabs } from "@nextui-org/tabs";
import { cn } from "@/lib";
export const FaqPanel = () => {
	const sections = Faqs.map((faq) => faq.section);
	return (
		<>
			<article
				id="faq-box"
				className={cn(card_style, `flex justify-center 
					text-lg sm:p-[20px] p-0
					bg-[#F7F7F7] max-w-screen-2xl
			`)}
			>
				<div className={`block w-full`}>
					<Tabs
						className={`
							flex flex-row justify-center
							mb-8 flex-wrap right-0 relative
							text-[#3C2415]
						`}
						style={{
							color: "#3C2415",
							borderRadius: "10px",
						}}
						color={`primary`}
						aria-label="FAQ Sections"
						items={[
							{
								id: "all",
								label: "Show All",
								content: (
									<div
										className={`
											grid grid-cols-1 md:grid-cols-2
										text-[#3C2415] gap-4 
										`}
									>
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
									<div
										className={`
											grid grid-cols-1 
											gap-4
										`}
									>
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
							<Tab
								key={item.id}
								title={item.label}
								className={`
									text-[#3C2415]
								`}
								style={{
									backgroundColor: "#F7F7F770",
									color: "#3C2415",
								}}
								aria-label={item.label}
							>
								{item.content}
							</Tab>
						)}
					</Tabs>
				</div>
			</article>
		</>
	);
};

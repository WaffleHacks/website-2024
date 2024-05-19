import { useState } from "react";
import Faq from "../../../components/subcomponents/Faq";

const FaqPanel = () => {


	return (
		<div
			id="faqs"
			className="bg-white p-8 md:text-left flex justify-center font-mplus"
		>
			<div className="block w-full" style={{ maxWidth: "min(100vw, 80rem)" }}>
				{/* <p>For all your questions, here are some answers!</p>
            <h1 className="text-4xl md:text-5xl">FAQs</h1> */}
				<h1 className="text-4xl font-extrabold mb-4">Sponsors</h1>

				<div className="flex flex-col md:flex-row gap-4 mt-4">
					<div className="flex flex-col w-full md:w-1/2 gap-4">
						{faqs.map(
							(faq, ind) =>
								ind < 4 && (
									<Faq key={"faq-" + ind} faq={faq[0]} desc={faq[1]} />
								),
						)}
					</div>
					<div className="flex flex-col w-full md:w-1/2 gap-4">
						{faqs.map(
							(faq, ind) =>
								ind >= 4 && (
									<Faq key={"faq-" + ind} faq={faq[0]} desc={faq[1]} />
								),
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FaqPanel;

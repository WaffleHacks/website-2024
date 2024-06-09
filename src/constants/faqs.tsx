'use client';

import { ScrollIntoCenterView } from '@/utils';
import Link from 'next/link';

export const Faqs: ReadonlyArray<{
	section: string;
	items: Partial<AccordionTextProps>[];
}> = [
	{
		section: 'General',
		items: [
			{
				title: 'What is a hackathon?',
				description:
					'A hackathon is an event where programmers, designers, project managers, and domain experts collaborate intensively on software projects. These events typically span over a day or more, fostering creativity and rapid development. Participants form teams to brainstorm, design, and develop innovative solutions to given challenges.',
			},
			{
				title: 'What is the theme of this hackathon?',
				description:
					"The theme of this hackathon is 'Innovation in Technology'. Participants are encouraged to create groundbreaking solutions that leverage the latest technological advancements to solve real-world problems. This broad theme allows for a wide range of projects, from AI and machine learning applications to IoT solutions and beyond.",
			},
			{
				title: 'How can I register for the hackathon?',
				description:
					'To register for the hackathon, click the "Apply" button just below this section, and navigate to the registration page. You will need to fill out a form with your personal details and team information. Early registration is recommended to secure your spot and receive important updates leading up to the event.',
			},
			{
				title: 'What are the rules of the hackathon?',
				description: (
					<>
						<p>
							{
								'The hackathon rules cover eligibility, team formation, project submission guidelines, and judging criteria. Detailed rules can be found on the '
							}
							<Link href={`/legal/rules`} target="_self" className="underline cursor-pointer">
								rules page
							</Link>
							{
								' of our website. Make sure to review them carefully to ensure compliance and to maximize your chances of success.'
							}
						</p>
					</>
				),
			},
		],
	},
	{
		section: 'Prizes',
		items: [
			{
				title: 'What are the prizes for the hackathon?',
				description: (
					<p>
						Prizes for the hackathon include cash rewards, tech gadgets, and opportunities for
						further development of your projects with industry mentors. Specific prize details and
						categories can be found on the
						<Link
							href={`#tracks-and-awards`}
							target="_self"
							className="underline cursor-pointer"
							onClick={(e) => {
								e.preventDefault();
								ScrollIntoCenterView('#tracks-and-awards');
							}}
						>
							{' '}
							Tracks & Prizes section{' '}
						</Link>
						of our website.
					</p>
				),
			},
			{
				title: 'How can I sponsor the hackathon?',
				description: (
					<p>
						If you are interested in sponsoring the hackathon, please view the
						<Link
							href={`https://drive.google.com/file/d/1S5hBEByUB56xo_o7RGvM4WJ6dJA8G5px/view?usp=sharing`}
							target="_blank"
							className="underline cursor-pointer"
						>
							{' '}
							sponsorship package{' '}
						</Link>
						for more information. For any inquiries, please contact the sponsorship team at
						<Link
							href={`mailto:sponsors@wafflehacks.org?subject=Sponsorship Inquiry`}
							target="_blank"
							className="underline cursor-pointer"
						>
							{' '}
							sponsors@wafflehacks.org
							{'.'}
						</Link>
					</p>
				),
			},
		],
	},
	{
		section: 'Participation',
		items: [
			{
				title: 'How can I volunteer for the hackathon?',
				description: (
					<p>
						Volunteers are crucial to the success of the hackathon. If you wish to volunteer, please
						contact the operations team
						<Link
							href={`mailto:operations@wafflehacks.org?subject=Volunteer Inquiry`}
							target="_blank"
							className="underline cursor-pointer"
						>
							{' '}
							operations@wafflehacks.org.{' '}
						</Link>
						Roles include technology, operations, and design.
					</p>
				),
			},
			{
				title: 'How can I contact the organizers of the hackathon?',
				description: (
					<p>
						For any inquiries, you can reach out to the organizers via
						<Link
							href={`
								mailto:operations@wafflehacks.org?subject=General Inquiry
							`}
						>
							{' '}
							email{' '}
						</Link>
						. We are available to answer questions regarding registration, participation,
						sponsorship, and any other concerns you may have.
					</p>
				),
			},
		],
	},
];

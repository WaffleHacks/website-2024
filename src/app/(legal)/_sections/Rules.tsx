"use client";
import { app } from "@/constants";
import { Container, Typography } from "@mui/joy";
import Link from "next/link";
import type React from "react";

export const Rules: React.FC = () => {
	return (
		<Container maxWidth="sm" sx={{ marginTop: 3, marginBottom: 3 }}>
			<Typography level="h1" gutterBottom>
				Rules
			</Typography>
			<Typography level="h2" gutterBottom>
				The spirit of the competition
			</Typography>
			<Typography gutterBottom>
				Remember that hackathons are like marathons. Some people go to compete
				but most people take part to better themselves and have fun. Whatever
				the reason you're at a hackathon, make sure you're upholding the{" "}
				<Link
					className={`underline`}
					href="https://medium.com/@tfogo/the-spirit-of-hackathons-a0d81a65060a#.6cx5ac9t8"
				>
					hacker spirit
				</Link>{" "}
				by collaborating with other teams, helping beginners, and having fun.
			</Typography>

			<Typography level="h2" gutterBottom>
				The rules of the competition
			</Typography>
			<Typography component="ol" gutterBottom>
				<li>
					A team should consist of a minimum of 1 person and a max of 4. There
					will be up to 4 prizes distributed per team. You are free to choose
					your teammates either prior to or on the day of the event. You are
					also free to work on your own.
				</li>
				<li>
					Teams should be made up exclusively of high school or undergraduate
					students who are not organizers, volunteers, judges, sponsors, or in
					any other privileged position at the event.
				</li>
				<li>
					All team members should be present at the event and in communication
					with the rest of the team.
				</li>
				<li>
					Teams are welcome to solicit gain advice and support from organizers,
					volunteers, sponsors, and others.
				</li>
				<li>All work on a project should be done at the hackathon.</li>
				<li>Teams can use an idea they had before the event.</li>
				<li>
					Teams can work on ideas that have already been done. Hacks do not have
					to be “innovative”. If a team wants to work on a common idea they are
					allowed to do so and will be judged on the quality of their hack.
					Truly original ideas are hard to find and teams might not know an idea
					has been done before anyway.
				</li>
				<li>
					Teams can work on an idea that they have worked on before provided
					they do not re-use code or other project materials.
				</li>
				<li>
					Teams can use libraries, frameworks, or open-source code in their
					projects. Working on a project before the event and open-sourcing it
					for the sole purpose of using the code during the event is against the
					spirit of the rules and is not allowed.
				</li>
				<li>
					Adding new features to existing projects is allowed. Judges will only
					consider new functionality introduced or new features added during the
					hackathon in determining the winners.
				</li>
				<li>
					Teams must stop hacking once the time is up. However, teams are
					allowed to debug and make small fixes to their programs after time is
					up. e.g. If during demoing your hack you find a bug that breaks your
					application and the fix is only a few lines of code, it's okay to fix
					that. Making large changes or adding new features is not allowed.
				</li>
				<li>Projects that violate the aforementioned are not allowed.</li>
				<li>
					Teams can be disqualified from the competition at the organizers'
					discretion. Reasons might include but are not limited to breaking the
					Rules of the Competition, or other unsporting behavior.
				</li>
				<li>
					To receive any awarded prizes and/or swag, you must have submitted an
					application, and been accepted, in the{" "}
					<Link className={`underline`} href="https://apply.wafflehacks.org">
						WaffleHacks Application Portal
					</Link>
					. Submitting a project on Devpost is <b>NOT</b> sufficient.
				</li>
			</Typography>

			<Typography level="h2" gutterBottom>
				Demos
			</Typography>
			<Typography gutterBottom>
				After hacking finishes, teams will show their projects to each other and
				to the judges by submitting on{" "}
				<Link className={`underline`} href="https://wffl.link/devpost">
					Devpost
				</Link>
				.
			</Typography>
			<Typography gutterBottom>
				You are strongly encouraged to present a demo of what you have built.
				Pitches or presentations are discouraged. You are not judged on the
				quality of your pitch or the quality of your idea. As you are judged on
				what you built, you'll only hurt yourself by not showing a demo.
			</Typography>
			<Typography gutterBottom>
				You are encouraged to present what you have done even if your hack is
				broken or you weren’t able to finish. It's okay if you didn't finish
				your hack—that happens all the time! Completion is only one part of the
				judging criteria, so you might still do well. Also, demoing is not just
				about the competition. It's a chance to share with others what you
				learned and what you tried to build—that's what hacking's all about! In
				the case that you don't have anything to demo, you can give a
				presentation about what you tried and what you learned.
			</Typography>

			<Typography level="h2" gutterBottom>
				Judging Criteria
			</Typography>
			<Typography gutterBottom>
				Teams will be judged on these four criteria. Judges will weigh the
				criteria equally. During judging, participants should try to describe
				what they did for each criterion in their project.
			</Typography>
			<Typography component="ul" gutterBottom>
				<li>
					<b>Technology:</b>
					<Typography component="ul">
						<li>How technically impressive was the hack?</li>
						<li>Was the technical problem the team tackled difficult?</li>
						<li>
							Did it use a particularly clever technique or did it use many
							different components?
						</li>
						<li>Did the technology involved make you go "Wow"?</li>
					</Typography>
				</li>
				<li>
					<b>Design:</b>
					<Typography component="ul">
						<li>Did the team put thought into the user experience?</li>
						<li>How well designed is the interface?</li>
						<li>
							For a website, this might be about how beautiful the CSS or
							graphics are.
						</li>
						<li>
							For a hardware project, it might be more about how good the
							human-computer interaction is.
						</li>
						<li>Is it easy to use or does it use a cool interface?</li>
					</Typography>
				</li>
				<li>
					<b>Originality:</b>
					<Typography component="ul">
						<li>
							Can your hack inspire innovation in the next generation of
							students?
						</li>
						<li>
							Does it do something entirely novel, or at least take a fresh
							approach to an old problem?
						</li>
						<li>
							This category will be based solely on the idea behind your
							project, regardless of functionality
						</li>
					</Typography>
				</li>
				<li>
					<b>Impact/Usefulness:</b>
					<Typography component="ul">
						<li>Does your hack have a social impact?</li>
						<li>Does it fulfill a real need people have?</li>
						<li>
							This category will be based solely on the idea behind your
							project, regardless of functionality
						</li>
					</Typography>
				</li>
				<li>
					<b>Feasibility/Practicality:</b>
					<Typography component="ul">
						<li>
							Is this project feasible and practical in the next couple years?
						</li>
						<li>
							Can your project scale to meet the requirements of mass adoption?
						</li>
					</Typography>
				</li>
			</Typography>
			<Typography gutterBottom>
				These criteria will guide judges but ultimately judges are free to make
				decisions based on their gut feeling of which projects are the most
				impressive and most deserving.
			</Typography>
			<Typography gutterBottom>
				It's important to note that these judging criteria do not include:
			</Typography>
			<Typography component="ul" gutterBottom>
				<li>
					How good your code is. It doesn't matter if your code is messy, or not
					well commented, or uses inefficient algorithms. Hacking is about
					playing around, making mistakes, and learning new things. If your code
					isn't production ready, we're not going to mark you down.
				</li>
				<li>
					How well you pitch. Hacking is about building and learning, not about
					selling.
				</li>
				<li>
					How good the idea is. Again, hackathons aren't about coming up with
					innovative ideas. It's about building and learning.
				</li>
			</Typography>
			<Typography gutterBottom>
				So don't worry about coming up with the next big idea or building the
				next Facebook. You'll have plenty of time for that outside the
				hackathon. Just focus on learning, having fun, and making new friends.
				At the end of the day the skills you learn and the friends you make
				might lead to the next big thing—but you don't have to do that to win a
				hackathon.
			</Typography>

			<Typography level="h2" gutterBottom>
				Remember!
			</Typography>
			<Typography gutterBottom>
				The competition is just a part of the hackathon. To make the most out of
				the event, try something new, teach other people, and make new friends!
			</Typography>

			<Typography gutterBottom>
				<b>Happy Hacking from the WaffleHacks team!</b>
			</Typography>

			<Typography gutterBottom component="caption">
				_Last Updated: May 17, 2022_
			</Typography>
		</Container>
	);
};

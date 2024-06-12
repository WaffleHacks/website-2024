'use client';
import {
	Article,
	Aside,
	CustomPicture,
	Footer,
	Header,
	Picture,
	Section,
	Subtract,
	Text,
} from '@/components';
import { colorClasses, teams, waffleImageClasses } from '@/constants';
import Image from 'next/image';
import type React from 'react';
import { FaFlag, FaGraduationCap } from 'react-icons/fa';
import { FaBookOpenReader } from 'react-icons/fa6';
import type { TeamMemberData } from './Teams';

import { usePathname, useRouter } from 'next/navigation';
import { CSSProperties } from 'react';

const memberTeamAssociations: Record<string, string> = Object.fromEntries(
	Object.entries(teams).flatMap(([team, members]) => members.map((member) => [member, team]))
);

export const TeamCard: React.FC<{ member: TeamMemberData, style?:CSSProperties }> = ({ member, style }) => {
	if (!member || !member.name) {
		throw new Error('Invalid member data');
	}

	const CIRCLE_PATH = '/assets/images/team/';
	const WAFFLE_PATH = '/assets/images/waffles/';

	const teamImage = CIRCLE_PATH + member.photo_name + '.webp';
	const waffleImage = WAFFLE_PATH + member.photo_name + '.webp';
	const name = waffleImage.split('/').pop()?.replace('.webp', '');

	const waffleImageClass = name ? waffleImageClasses[name] : '';
	const colorClass = name ? colorClasses[name] : '';
	const team = memberTeamAssociations[name as string];

	const pathName: string = usePathname();
	const isTeam = pathName.includes('team');
	const router = useRouter();

	function splitIntoLines(text: string, maxLineLength: number): string[] {
		const words = text.split(' ');
		const lines: string[] = [];
		let currentLine = '';

		for (const word of words) {
			if (word.length > maxLineLength) {
				lines.push(word.substring(0, maxLineLength) + '-');
				lines.push(word.substring(maxLineLength) + " ");
				continue;
			}
			if (currentLine.length + word.length > maxLineLength) {
				lines.push(currentLine);
				currentLine = '';
			}

			currentLine += word + ' ';
		}

		lines.push(currentLine);
		return lines;
	}

	return (
		<svg style={style} width="725" height="922" viewBox="0 0 725 922" fill="none" xmlns="http://www.w3.org/2000/svg">
			<defs>
				
				<rect id="rect" x="25%" y="25%" width="50%" height="50%" rx="15"/>
				<clipPath id="circle-clip">
					<use xlinkHref="#rect"/>
				</clipPath>
			</defs>
			
			<g filter="url(#filter0_d_876_1231)">
			<g clip-path="url(#clip0_876_1231)">
			<rect x="16" y="9" width="687" height="884" rx="25" fill="#f5f5f5"/>
			<g filter="url(#filter1_d_876_1231)">
			<image x="385" y="426" height="145" href={waffleImage}></image>
			{/* bottom background */}
			<path fill-rule="evenodd" clip-rule="evenodd" d="M69 854C57.9543 854 49 845.046 49 834V395C49 383.954 57.9543 375 69 375H650C661.046 375 670 383.954 670 395V427H455.5C418.221 427 388 457.221 388 494.5C388 531.779 418.221 562 455.5 562H670V834C670 845.046 661.046 854 650 854H69Z" fill={member.color}/>
			</g>
			<path d="M49 601L670 601" stroke="url(#paint0_linear_876_1231)" stroke-linecap="round"/>
			<g opacity="0.8" filter="url(#filter2_f_876_1231)">
			<rect x="347" y="150" width="275" height="58" rx="18" fill="url(#paint1_linear_876_1231)"/>
			</g>
			{/* name bar */}
			<rect x="347" y="139" width="275" height="68" rx="18" fill="#FFEEBB"/>
			{/* big circle with face */}
			<circle cx="214.5" cy="240.5" r="107.5" fill={member.color}/>
			<image x="107" y="133" width="215" height="215" href={teamImage}></image>
			{/* top line */}
			<g filter="url(#filter3_d_876_1231)">
			<path d="M130 85H589" stroke="url(#paint2_linear_876_1231)" stroke-linecap="round" shape-rendering="crispEdges"/>
			</g>
			{/* medal */}
			<path d="M398.838 279.804C399.178 279.39 398.884 278.767 398.348 278.767H391.653C391.461 278.767 391.279 278.854 391.158 279.004L384.022 287.887C383.688 288.302 383.984 288.919 384.517 288.919H391.049C391.239 288.919 391.419 288.834 391.539 288.687L398.838 279.804Z" fill="#B73F48"/>
			<path d="M375.162 279.804C374.822 279.39 375.116 278.767 375.652 278.767H382.347C382.539 278.767 382.721 278.854 382.842 279.004L389.978 287.887C390.312 288.302 390.016 288.919 389.483 288.919H382.951C382.761 288.919 382.581 288.834 382.461 288.687L375.162 279.804Z" fill="#FB071A"/>
			<path d="M387.317 305.733C392.924 305.733 397.469 301.188 397.469 295.581C397.469 289.974 392.924 285.429 387.317 285.429C381.71 285.429 377.165 289.974 377.165 295.581C377.165 301.188 381.71 305.733 387.317 305.733Z" fill="#FDDC79" stroke="#FBAD24"/>
			<path d="M387.084 285.112V304.949" stroke="#FBAD24"/>
			<path d="M390.39 286.214V304.949" stroke="#FBAD24"/>
			<path d="M393.696 288.418V302.744" stroke="#FBAD24"/>
			<path d="M383.778 286.214V304.949" stroke="#FBAD24"/>
			<path d="M380.471 288.418V302.744" stroke="#FBAD24"/>
			<path d="M376.848 295.824H396.685" stroke="#FBAD24"/>
			<path d="M377.888 292.508H396.623" stroke="#FBAD24"/>
			<path d="M380.03 289.203H394.357" stroke="#FBAD24"/>
			<path d="M378.012 299.119H396.747" stroke="#FBAD24"/>
			<path d="M380.278 302.425H394.604" stroke="#FBAD24"/>
			<g filter="url(#filter4_d_876_1231)">
			<path d="M390.751 295.118L387.752 292.119C387.504 291.872 387.102 291.872 386.855 292.119L383.856 295.118C383.608 295.366 383.608 295.768 383.856 296.016L386.855 299.015C387.102 299.263 387.504 299.263 387.752 299.015L390.751 296.016C390.999 295.768 390.999 295.366 390.751 295.118Z" fill="#FFEFBC" fill-opacity="0.95"/>
			</g>
			{/* wh logo */}
			<path d="M340.533 32.3065L322.355 50.4848C321.554 51.2855 321.554 52.5837 322.355 53.3844L340.533 71.5627C341.334 72.3634 342.632 72.3634 343.433 71.5627L361.611 53.3844C362.412 52.5837 362.412 51.2855 361.611 50.4848L343.433 32.3065C342.632 31.5058 341.334 31.5058 340.533 32.3065Z" fill="#C68443"/>
			<path d="M327.663 47.8528L324.563 50.9532C324.021 51.4952 324.021 52.374 324.563 52.916L327.663 56.0163C328.205 56.5583 329.084 56.5583 329.626 56.0163L332.727 52.916C333.269 52.374 333.269 51.4952 332.727 50.9532L329.626 47.8528C329.084 47.3108 328.205 47.3108 327.663 47.8528Z" fill="#9D6832"/>
			<path d="M341.002 34.5147L337.901 37.615C337.359 38.157 337.359 39.0358 337.901 39.5778L341.002 42.6782C341.544 43.2202 342.422 43.2202 342.964 42.6782L346.065 39.5778C346.607 39.0358 346.607 38.157 346.065 37.615L342.964 34.5147C342.422 33.9727 341.544 33.9727 341.002 34.5147Z" fill="#9D6832"/>
			<path d="M354.34 47.8528L351.239 50.9532C350.697 51.4952 350.697 52.374 351.239 52.916L354.34 56.0163C354.882 56.5583 355.761 56.5583 356.303 56.0163L359.403 52.916C359.945 52.374 359.945 51.4952 359.403 50.9532L356.303 47.8528C355.761 47.3108 354.882 47.3108 354.34 47.8528Z" fill="#9D6832"/>
			<path d="M347.671 54.5219L344.57 57.6223C344.028 58.1643 344.028 59.0431 344.57 59.5851L347.671 62.6854C348.213 63.2274 349.091 63.2274 349.633 62.6854L352.734 59.5851C353.276 59.0431 353.276 58.1643 352.734 57.6223L349.633 54.5219C349.091 53.9799 348.213 53.9799 347.671 54.5219Z" fill="#9D6832"/>
			<path d="M347.671 41.1838L344.57 44.2841C344.028 44.8261 344.028 45.7049 344.57 46.2469L347.671 49.3473C348.213 49.8893 349.091 49.8893 349.633 49.3473L352.734 46.2469C353.276 45.7049 353.276 44.8261 352.734 44.2841L349.633 41.1838C349.091 40.6417 348.213 40.6417 347.671 41.1838Z" fill="#9D6832"/>
			<path d="M341.002 61.191L337.901 64.2914C337.359 64.8334 337.359 65.7121 337.901 66.2542L341.002 69.3545C341.544 69.8965 342.422 69.8965 342.964 69.3545L346.065 66.2542C346.607 65.7121 346.607 64.8334 346.065 64.2914L342.964 61.191C342.422 60.649 341.544 60.649 341.002 61.191Z" fill="#9D6832"/>
			<path d="M334.333 54.5219L331.232 57.6223C330.69 58.1643 330.69 59.0431 331.232 59.5851L334.333 62.6854C334.875 63.2274 335.753 63.2274 336.295 62.6854L339.396 59.5851C339.938 59.0431 339.938 58.1643 339.396 57.6223L336.295 54.5219C335.753 53.9799 334.875 53.9799 334.333 54.5219Z" fill="#9D6832"/>
			<path d="M334.333 41.1838L331.232 44.2841C330.69 44.8261 330.69 45.7049 331.232 46.2469L334.333 49.3473C334.875 49.8893 335.753 49.8893 336.295 49.3473L339.396 46.2469C339.938 45.7049 339.938 44.8261 339.396 44.2841L336.295 41.1838C335.753 40.6417 334.875 40.6417 334.333 41.1838Z" fill="#9D6832"/>
			<path d="M333.633 46.8902V56.9789C333.633 58.8081 335.116 60.291 336.945 60.291H347.036C348.865 60.291 350.348 58.8081 350.348 56.9789V46.8902C350.348 45.061 348.865 43.5782 347.036 43.5782H336.945C335.116 43.5782 333.633 45.061 333.633 46.8902Z" fill="#F1AF49"/>
			<path d="M327.561 40.1496C329.301 39.7107 331.117 39.6626 332.878 40.0087L331.433 41.4338C330.269 41.3341 329.094 41.4285 327.956 41.7154C326.448 42.096 325.042 42.806 323.84 43.7944C322.638 44.7828 321.67 46.0251 321.005 47.4321C320.34 48.839 319.995 50.3757 319.995 51.9319C319.994 53.488 320.339 55.0249 321.003 56.4322C321.667 57.8395 322.634 59.0823 323.835 60.0713C325.037 61.0603 326.442 61.7711 327.951 62.1525C329.093 62.4412 330.273 62.5357 331.442 62.4348L332.872 63.8619C331.111 64.207 329.295 64.1579 327.555 63.7181C325.815 63.2783 324.195 62.4586 322.809 61.3181C321.424 60.1775 320.308 58.7443 319.542 57.1213C318.776 55.4984 318.379 53.726 318.38 51.9314C318.38 50.1369 318.778 48.3647 319.545 46.7422C320.312 45.1196 321.428 43.687 322.814 42.5472C324.2 41.4073 325.821 40.5885 327.561 40.1496Z" fill="#FFC100"/>
			<path d="M353.785 37.6124C354.224 39.3117 354.272 41.0847 353.926 42.8043L352.501 41.3933C352.6 40.2568 352.506 39.1092 352.219 37.9981C351.838 36.5246 351.128 35.1517 350.14 33.978C349.152 32.8043 347.909 31.8589 346.502 31.2097C345.095 30.5605 343.559 30.2236 342.003 30.2232C340.447 30.2228 338.91 30.5589 337.502 31.2074C336.095 31.8559 334.852 32.8006 333.863 33.9738C332.874 35.147 332.163 36.5196 331.782 37.9929C331.493 39.1082 331.399 40.2604 331.5 41.4015L330.073 42.7982C329.727 41.0784 329.777 39.3053 330.216 37.6063C330.656 35.9073 331.476 34.3245 332.616 32.9715C333.757 31.6186 335.19 30.529 336.813 29.7812C338.436 29.0333 340.209 28.6457 342.003 28.6462C343.798 28.6466 345.57 29.0352 347.192 29.7839C348.815 30.5325 350.248 31.6228 351.387 32.9764C352.527 34.3299 353.346 35.9132 353.785 37.6124Z" fill="#920813"/>
			<path d="M356.438 63.7197C354.698 64.1585 352.882 64.2067 351.122 63.8606L352.566 62.4355C353.73 62.5351 354.905 62.4408 356.043 62.1538C357.552 61.7732 358.958 61.0632 360.16 60.0748C361.362 59.0864 362.33 57.8442 362.995 56.4372C363.659 55.0302 364.004 53.4935 364.005 51.9374C364.005 50.3813 363.661 48.8444 362.997 47.4371C362.333 46.0298 361.365 44.787 360.164 43.7979C358.963 42.8089 357.557 42.0982 356.049 41.7168C354.906 41.4281 353.726 41.3335 352.558 41.4345L351.128 40.0074C352.889 39.6622 354.705 39.7113 356.444 40.1511C358.184 40.591 359.805 41.4106 361.19 42.5512C362.576 43.6918 363.692 45.125 364.457 46.7479C365.223 48.3709 365.62 50.1433 365.62 51.9378C365.619 53.7324 365.221 55.5046 364.455 57.1271C363.688 58.7496 362.572 60.1823 361.185 61.3221C359.799 62.462 358.178 63.2808 356.438 63.7197Z" fill="#2258A1"/>
			<path d="M330.215 66.3854C329.776 64.6453 329.728 62.8296 330.074 61.0688L331.499 62.5136C331.399 63.6775 331.493 64.8526 331.78 65.9904C332.161 67.4992 332.871 68.9051 333.859 70.107C334.848 71.3089 336.09 72.277 337.497 72.9418C338.904 73.6066 340.441 73.9516 341.997 73.952C343.553 73.9524 345.09 73.6082 346.497 72.9442C347.904 72.2801 349.147 71.3127 350.136 70.1113C351.125 68.9099 351.836 67.5044 352.217 65.9958C352.506 64.8536 352.601 63.6737 352.5 62.5053L353.927 61.0751C354.272 62.8361 354.223 64.6518 353.783 66.3916C353.343 68.1314 352.524 69.7522 351.383 71.1377C350.242 72.5231 348.809 73.6388 347.186 74.4046C345.563 75.1705 343.791 75.5674 341.996 75.5669C340.202 75.5664 338.43 75.1686 336.807 74.4019C335.185 73.6352 333.752 72.5188 332.612 71.1327C331.472 69.7467 330.654 68.1254 330.215 66.3854Z" fill="#3A7C13"/>
			<path d="M337.96 54.1479L337.187 50.262C337.166 50.1697 337.185 50.088 337.244 50.0167C337.306 49.9455 337.384 49.9098 337.476 49.9098H337.841C337.942 49.9098 338.032 49.9434 338.111 50.0104C338.191 50.0775 338.237 50.1613 338.25 50.262L338.677 53.4059C338.677 53.4101 338.679 53.4122 338.684 53.4122C338.688 53.4122 338.69 53.4101 338.69 53.4059L339.08 50.262C339.092 50.1613 339.136 50.0775 339.212 50.0104C339.287 49.9434 339.375 49.9098 339.476 49.9098H340.067C340.167 49.9098 340.256 49.9434 340.331 50.0104C340.406 50.0775 340.45 50.1613 340.463 50.262L340.853 53.4059C340.853 53.4101 340.855 53.4122 340.859 53.4122C340.863 53.4122 340.865 53.4101 340.865 53.4059L341.293 50.262C341.306 50.1613 341.352 50.0775 341.431 50.0104C341.511 49.9434 341.601 49.9098 341.702 49.9098H342.041C342.134 49.9098 342.209 49.9455 342.268 50.0167C342.326 50.088 342.347 50.1697 342.331 50.262L341.557 54.1479C341.536 54.2485 341.486 54.3323 341.406 54.3994C341.327 54.4665 341.234 54.5 341.13 54.5H340.595C340.494 54.5 340.404 54.4665 340.325 54.3994C340.249 54.3323 340.205 54.2485 340.193 54.1479L339.765 51.0039C339.765 50.9997 339.763 50.9976 339.759 50.9976C339.755 50.9976 339.752 50.9997 339.752 51.0039L339.325 54.1479C339.312 54.2485 339.266 54.3323 339.187 54.3994C339.111 54.4665 339.023 54.5 338.922 54.5H338.388C338.283 54.5 338.189 54.4665 338.105 54.3994C338.025 54.3323 337.977 54.2485 337.96 54.1479ZM343.372 54.5C343.275 54.5 343.192 54.4644 343.12 54.3931C343.049 54.3218 343.013 54.238 343.013 54.1416V50.2682C343.013 50.1718 343.049 50.088 343.12 50.0167C343.192 49.9455 343.275 49.9098 343.372 49.9098H343.73C343.827 49.9098 343.908 49.9455 343.975 50.0167C344.047 50.088 344.082 50.1718 344.082 50.2682V51.6516C344.082 51.6893 344.101 51.7082 344.139 51.7082H345.434C345.472 51.7082 345.491 51.6893 345.491 51.6516V50.2682C345.491 50.1718 345.524 50.088 345.591 50.0167C345.663 49.9455 345.747 49.9098 345.843 49.9098H346.201C346.298 49.9098 346.382 49.9455 346.453 50.0167C346.524 50.088 346.56 50.1718 346.56 50.2682V54.1416C346.56 54.238 346.524 54.3218 346.453 54.3931C346.382 54.4644 346.298 54.5 346.201 54.5H345.843C345.747 54.5 345.663 54.4644 345.591 54.3931C345.524 54.3218 345.491 54.238 345.491 54.1416V52.5696C345.491 52.5361 345.472 52.5193 345.434 52.5193H344.139C344.101 52.5193 344.082 52.5361 344.082 52.5696V54.1416C344.082 54.238 344.047 54.3218 343.975 54.3931C343.908 54.4644 343.827 54.5 343.73 54.5H343.372Z" fill="#3C2415"/>
			<g clip-path="url(#clip1_876_1231)">
			<path d="M369.817 230.017L369.817 259.872C369.817 261.187 370.883 262.253 372.198 262.253H402.052C403.367 262.253 404.433 261.187 404.433 259.872V230.017C404.433 228.702 403.367 227.636 402.052 227.636H372.198C370.883 227.636 369.817 228.702 369.817 230.017Z" fill="#C68443"/>
			<path d="M372.015 253.351V258.443C372.015 259.333 372.736 260.055 373.626 260.055H378.718C379.608 260.055 380.33 259.333 380.33 258.443V253.351C380.33 252.461 379.608 251.74 378.718 251.74H373.626C372.736 251.74 372.015 252.461 372.015 253.351Z" fill="#9D6832"/>
			<path d="M372.015 231.446V236.538C372.015 237.428 372.736 238.149 373.626 238.149H378.718C379.608 238.149 380.33 237.428 380.33 236.538V231.446C380.33 230.556 379.608 229.834 378.718 229.834H373.626C372.736 229.834 372.015 230.556 372.015 231.446Z" fill="#9D6832"/>
			<path d="M393.92 231.446V236.538C393.92 237.428 394.641 238.149 395.532 238.149H400.623C401.513 238.149 402.235 237.428 402.235 236.538V231.446C402.235 230.556 401.513 229.834 400.623 229.834H395.532C394.641 229.834 393.92 230.556 393.92 231.446Z" fill="#9D6832"/>
			<path d="M393.92 242.399V247.49C393.92 248.381 394.642 249.102 395.532 249.102H400.623C401.514 249.102 402.235 248.381 402.235 247.49V242.399C402.235 241.508 401.514 240.787 400.623 240.787H395.532C394.642 240.787 393.92 241.508 393.92 242.399Z" fill="#9D6832"/>
			<path d="M382.967 231.446V236.538C382.967 237.428 383.689 238.149 384.579 238.149H389.671C390.561 238.149 391.282 237.428 391.282 236.538V231.446C391.282 230.556 390.561 229.834 389.671 229.834H384.579C383.689 229.834 382.967 230.556 382.967 231.446Z" fill="#9D6832"/>
			<path d="M393.92 253.351V258.443C393.92 259.333 394.642 260.055 395.532 260.055H400.623C401.514 260.055 402.235 259.333 402.235 258.443V253.351C402.235 252.461 401.514 251.74 400.623 251.74H395.532C394.642 251.74 393.92 252.461 393.92 253.351Z" fill="#9D6832"/>
			<path d="M382.967 253.351V258.443C382.967 259.333 383.689 260.055 384.579 260.055H389.671C390.561 260.055 391.282 259.333 391.282 258.443V253.351C391.282 252.461 390.561 251.74 389.671 251.74H384.579C383.689 251.74 382.967 252.461 382.967 253.351Z" fill="#9D6832"/>
			<path d="M372.015 242.399V247.49C372.015 248.381 372.736 249.102 373.626 249.102H378.718C379.608 249.102 380.33 248.381 380.33 247.49V242.399C380.33 241.508 379.608 240.787 378.718 240.787H373.626C372.736 240.787 372.015 241.508 372.015 242.399Z" fill="#9D6832"/>

				{/* butter square */}
				<path 
				d="M376.126 247.659L384.41 255.943C385.913 257.445 388.348 257.445 389.85 255.943L398.136 247.657C399.638 246.155 399.638 243.72 398.136 242.218L389.852 233.933C388.35 232.431 385.914 232.431 384.412 233.933L376.126 242.219C374.624 243.721 374.624 246.157 376.126 247.659Z" fill="#F1AF49"
				/>
				{/* 24 */}
				<path 
				d="M382.651 248.149C382.522 248.149 382.41 248.102 382.314 248.006C382.218 247.91 382.17 247.798 382.17 247.669V247.474C382.17 247.159 382.297 246.904 382.55 246.707C383.495 245.964 384.12 245.399 384.423 245.011C384.733 244.623 384.887 244.243 384.887 243.872C384.887 243.354 384.6 243.095 384.027 243.095C383.678 243.095 383.25 243.191 382.744 243.382C382.637 243.422 382.536 243.41 382.44 243.349C382.345 243.287 382.297 243.199 382.297 243.087V242.733C382.297 242.586 382.339 242.457 382.424 242.344C382.508 242.226 382.62 242.148 382.761 242.108C383.273 241.973 383.765 241.906 384.238 241.906C384.918 241.906 385.441 242.069 385.807 242.395C386.178 242.716 386.364 243.163 386.364 243.737C386.364 244.232 386.206 244.704 385.891 245.154C385.582 245.599 384.975 246.203 384.069 246.968C384.063 246.974 384.06 246.979 384.06 246.985C384.06 246.991 384.063 246.994 384.069 246.994H385.917C386.046 246.994 386.156 247.041 386.246 247.137C386.341 247.233 386.389 247.345 386.389 247.474V247.669C386.389 247.798 386.341 247.91 386.246 248.006C386.156 248.102 386.046 248.149 385.917 248.149H382.651ZM388.367 245.829V245.838C388.367 245.843 388.37 245.846 388.375 245.846H389.768C389.818 245.846 389.843 245.824 389.843 245.779V243.737C389.843 243.731 389.841 243.728 389.835 243.728C389.824 243.728 389.818 243.731 389.818 243.737L388.367 245.829ZM387.574 246.968C387.444 246.968 387.332 246.92 387.236 246.825C387.146 246.729 387.101 246.617 387.101 246.487V246.327C387.101 246.012 387.194 245.722 387.38 245.458L389.565 242.378C389.751 242.119 390.001 241.99 390.316 241.99H390.738C390.867 241.99 390.977 242.038 391.067 242.134C391.163 242.229 391.21 242.342 391.21 242.471V245.779C391.21 245.824 391.236 245.846 391.286 245.846H391.624C391.753 245.846 391.866 245.894 391.961 245.989C392.057 246.085 392.105 246.198 392.105 246.327V246.487C392.105 246.617 392.057 246.729 391.961 246.825C391.866 246.92 391.753 246.968 391.624 246.968H391.286C391.236 246.968 391.21 246.994 391.21 247.044V247.669C391.21 247.798 391.163 247.91 391.067 248.006C390.977 248.102 390.867 248.149 390.738 248.149H390.316C390.187 248.149 390.074 248.102 389.978 248.006C389.888 247.91 389.843 247.798 389.843 247.669V247.044C389.843 246.994 389.818 246.968 389.768 246.968H387.574Z" fill="#3C2415"
				/>
			</g>
			{/* school icon */}
			<rect x="106.527" y="634.085" width="5.94873" height="2.41394" rx="1.20697" fill="#493922"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M99.6302 644.603L106.176 637.997C106.37 637.801 106.685 637.8 106.882 637.993L113.597 644.603H117.451C118.417 644.603 119.201 645.386 119.201 646.353V661.648C119.201 662.614 118.417 663.398 117.451 663.398H110.148V658.828C110.148 656.876 108.566 655.293 106.614 655.293C104.661 655.293 103.079 656.876 103.079 658.828V663.398H95.5176C94.5511 663.398 93.7676 662.614 93.7676 661.648V646.353C93.7676 645.386 94.5511 644.603 95.5176 644.603H99.6302ZM99.5128 648.154H97.1665V650.5H99.5128V648.154ZM97.1665 652.826H99.5128V655.172H97.1665V652.826ZM99.5128 657.498H97.1665V659.844H99.5128V657.498ZM113.492 657.498H115.839V659.844H113.492V657.498ZM115.839 652.826H113.492V655.172H115.839V652.826ZM113.492 648.153H115.839V650.5H113.492V648.153ZM106.567 650.5C108.505 650.5 110.076 648.929 110.076 646.991C110.076 645.053 108.505 643.482 106.567 643.482C104.629 643.482 103.058 645.053 103.058 646.991C103.058 648.929 104.629 650.5 106.567 650.5Z" fill="#493922"/>

			{/* hat icon */}
			<path d="M122.814 717.709L120.565 718.798V729.301C120.144 729.43 119.294 729.996 119.266 731.233C119.23 732.778 121.443 735.589 121.724 735.554C122.006 735.518 124.043 732.533 124.043 731.233C124.043 730.193 123.223 729.512 122.814 729.301V717.709Z" fill="#4B3124"/>
			<path d="M105.153 724.938L95.9629 720.565V723.891C95.9629 727.757 99.0969 730.891 102.963 730.891H109.888C113.754 730.891 116.888 727.757 116.888 723.891V720.565L107.735 724.936C106.919 725.326 105.97 725.327 105.153 724.938Z" fill="#4B3124"/>
			<path d="M123.43 713.065L107.514 704.866C106.942 704.572 106.265 704.57 105.692 704.861L89.5552 713.063C89.1209 713.284 89.1168 713.903 89.5481 714.129L105.668 722.593C106.254 722.901 106.953 722.899 107.537 722.588L123.437 714.128C123.864 713.9 123.86 713.286 123.43 713.065Z" fill="#4B3124"/>

			{/* reading / major icon */}
			<path fill-rule="evenodd" clip-rule="evenodd" d="M119.278 791.624V787.007C112.141 787.007 108.541 788.3 107.233 788.915C106.863 789.089 106.415 789.091 106.044 788.919C104.717 788.305 101.034 787.007 93.6074 787.007V791.853C93.5502 791.874 93.4831 791.887 93.4102 791.901C92.9827 791.984 92.3564 792.105 92.3564 794.035C92.3564 796.035 93.0284 796.231 93.4554 796.355C93.5109 796.372 93.5622 796.387 93.6074 796.404V802.167C93.8739 802.167 94.1456 802.166 94.4216 802.165C98.2389 802.147 102.887 802.126 106.261 805.354C106.47 805.555 106.806 805.554 107.014 805.351C110.743 801.726 116.692 801.703 119.278 802.167V796.321C119.3 796.319 119.323 796.317 119.346 796.315C119.818 796.276 120.612 796.211 120.612 794.009C120.612 791.868 119.836 791.728 119.409 791.651C119.36 791.642 119.316 791.634 119.278 791.624ZM105.493 791.067V801.807C104.402 801.196 101.008 799.973 96.1632 799.973V795.946C96.5451 795.826 97.3095 795.378 97.3357 794.042C97.3619 792.706 96.5669 792.202 96.1632 792.18V789.299C100.746 789.299 104.293 790.478 105.493 791.067ZM107.654 801.807V791.067C108.855 790.478 112.402 789.299 116.986 789.299V792.18C116.582 792.202 115.793 792.706 115.819 794.042C115.845 795.378 116.604 795.826 116.986 795.946V799.973C112.14 799.973 108.746 801.196 107.654 801.807Z" fill="#4B3124"/>
			<circle cx="106.479" cy="781.122" r="4.56836" fill="#4B3124"/>
			</g>
			</g>
			<defs>
			{/* shadow behind entire card */}
			<filter id="filter0_d_876_1231" x="0" y="0" width="725" height="922" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
			<feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_876_1231"/>
			<feOffset dx="3" dy="10"/>
			<feGaussianBlur stdDeviation="7.5"/>
			<feComposite in2="hardAlpha" operator="out"/>
			<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.125 0"/>
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_876_1231"/>
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_876_1231" result="shape"/>
			</filter>
			{/* drap shadow under bottom section */}
			<filter id="filter1_d_876_1231" x="7" y="334" width="705" height="563" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
			<feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_876_1231"/>
			<feOffset dy="1"/>
			<feGaussianBlur stdDeviation="20"/>
			<feComposite in2="hardAlpha" operator="out"/>
			<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_876_1231"/>
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_876_1231" result="shape"/>
			</filter>

			{/* shadow under name bar */}
			<filter id="filter2_f_876_1231" x="317" y="120" width="335" height="118" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
			<feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_876_1231"/>
			</filter>
			<filter id="filter3_d_876_1231" x="119.5" y="78.5" width="480" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
			<feOffset dy="4"/>
			<feGaussianBlur stdDeviation="5"/>
			<feComposite in2="hardAlpha" operator="out"/>
			<feColorMatrix type="matrix" values="0 0 0 0 0.615686 0 0 0 0 0.407843 0 0 0 0 0.196078 0 0 0 1 0"/>
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_876_1231"/>
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_876_1231" result="shape"/>
			</filter>
			<filter id="filter4_d_876_1231" x="375.67" y="283.934" width="23.2666" height="23.267" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
			<feOffset/>
			<feGaussianBlur stdDeviation="4"/>
			<feComposite in2="hardAlpha" operator="out"/>
			<feColorMatrix type="matrix" values="0 0 0 0 0.533765 0 0 0 0 0.493901 0 0 0 0 0.37431 0 0 0 0.4 0"/>
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_876_1231"/>
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_876_1231" result="shape"/>
			</filter>
			<linearGradient id="paint0_linear_876_1231" x1="49" y1="601.502" x2="670" y2="601.504" gradientUnits="userSpaceOnUse">
			<stop offset="0.07" stop-color="#9D6832" stop-opacity="0"/>
			<stop offset="0.5" stop-color="#9D6832"/>
			<stop offset="0.905" stop-color="#9D6832" stop-opacity="0"/>
			</linearGradient>
			<linearGradient id="paint1_linear_876_1231" x1="362.363" y1="216.179" x2="631.968" y2="207.451" gradientUnits="userSpaceOnUse">
			<stop offset="0.09" stop-color="#FDDC79"/>
			<stop offset="0.475" stop-color="#C68443" stop-opacity="0.65"/>
			<stop offset="0.925" stop-color="#FDDC79"/>
			</linearGradient>
			<linearGradient id="paint2_linear_876_1231" x1="130" y1="85.5023" x2="589" y2="85.5031" gradientUnits="userSpaceOnUse">
			<stop offset="0.07" stop-color="#9D6832" stop-opacity="0"/>
			<stop offset="0.5" stop-color="#9D6832"/>
			<stop offset="0.905" stop-color="#9D6832" stop-opacity="0"/>
			</linearGradient>
			<clipPath id="clip0_876_1231">
			<rect x="16" y="9" width="687" height="884" rx="25" fill="white"/>
			</clipPath>
			<clipPath id="clip1_876_1231">
			<rect width="36" height="36" fill="white" transform="translate(369 227.094)"/>
			</clipPath>
			</defs>

			{/* member name */}
			{
				member.name.length < 20 ?
				<text x="484.5" y="176" fill="#3C2415" style={{font: "bold 30px sans-serif"}} dominant-baseline="middle" text-anchor="middle">{member.name}</text>
				:
				<>
				<text x="484.5" y="163" fill="#3C2415" style={{font: "bold 24px sans-serif"}} dominant-baseline="middle" text-anchor="middle">{member.name.split(' ')[0]}</text>
				<text x="484.5" y="188" fill="#3C2415" style={{font: "bold 24px sans-serif"}} dominant-baseline="middle" text-anchor="middle">{member.name.split(' ')[1]}</text>
				</>
			}
			{/* team */}
			<text x="415" y="250" fill="#604020" style={{font: "normal 18px sans-serif"}}>Team Waffle {member.waffle_team}</text>
			{/* years at wafflehacks */}
			<text x="415" y="300" fill="#604020" style={{font: "normal 18px sans-serif"}}>{member.member_since}x {team} {member.position}</text>
			{/* looking forward to */}
			<text x="94" y="458" style={{font: "bold 26px sans-serif"}} fill="#3C2415">Looking Forward to...</text>
			
			{/* looking forward to text */}
			{
				splitIntoLines('"' + member.looking_forward + '"', 30).map((line, index) => {
					return <text x="94" y={490 + 25 * index} fill="#3C2415" style={{font: "normal 18px sans-serif"}}>{line}</text>
				})
			}
			
			{/* favorite waffle */}
			<text x="630" y="570" fill="#3C2415" style={{font: "normal 18px sans-serif"}} dominant-baseline="hanging" text-anchor="end">{member.favorite_waffle}</text>
			
			{/* favorite olympic sport */}
			<text x="400" y="645" fill="#3C2415" style={{font: "bold 18px sans-serif"}}>Favorite Olympic Sport</text>
			<image width="170" height="150" x="410" y="670" href={`/assets/svgs/team/${member.photo_name}.svg`}></image>
			
			{/* name of school */}
			{
				splitIntoLines(member.education.school, 25).map((line, index, arr) => {
					return <text x="130" y={(662 - 12.5*(arr.length-1)) + 25 * index} fill="#604020" style={{font: "normal 20px sans-serif"}}>{line}</text>
				})
			}
			
			{/* class of [year] */}
			<text x="130" y="728" fill="#604020" style={{font: "normal 20px sans-serif"}}>Class of {member.education.class}</text>
			
			{/* major */}
			{
				splitIntoLines(member.education.major, 25).map((line, index, arr) => {
					return <text x="130" y={(800 - 12.5*(arr.length-1)) + 25 * index} fill="#604020" style={{font: "normal 20px sans-serif"}}>{line}</text>
				})
			}


		</svg>

	);
};

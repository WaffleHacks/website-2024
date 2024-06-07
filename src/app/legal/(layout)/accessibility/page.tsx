import { Accessibility } from '@/app/(legal)/_sections';
import { constructMetadata } from '@/utils/meta';

export const metadata = constructMetadata({ title: 'Accessibility' });

export default function AccessibilityPage() {
	return <Accessibility />;
}

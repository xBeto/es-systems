import { Metadata } from 'next';
import { useLocale } from 'next-intl';
import { PrivacyNL } from './content-nl';
import { PrivacyDE } from './content-de';
import { PrivacyEN } from './content-en';

export const metadata: Metadata = {
    title: 'Privacybeleid | ES Systems',
    description: 'Privacybeleid van ES Systems. Hoe wij omgaan met uw gegevens.',
};

export default function PrivacyPage() {
    const locale = useLocale();
    if (locale === 'en') return <PrivacyEN />;
    if (locale === 'de') return <PrivacyDE />;
    return <PrivacyNL />;
}

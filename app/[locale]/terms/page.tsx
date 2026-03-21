import { Metadata } from 'next';
import { useLocale } from 'next-intl';
import { TermsNL } from './content-nl';
import { TermsDE } from './content-de';
import { TermsEN } from './content-en';

export const metadata: Metadata = {
    title: 'Algemene Voorwaarden | ES Systems',
    description: 'Algemene verkoopsvoorwaarden van ES Systems.',
};

export default function TermsPage() {
    const locale = useLocale();
    if (locale === 'en') return <TermsEN />;
    if (locale === 'de') return <TermsDE />;
    return <TermsNL />;
}

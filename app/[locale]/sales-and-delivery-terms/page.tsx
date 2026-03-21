import { Metadata } from 'next';
import { useLocale } from 'next-intl';
import { SalesAndDeliveryTermsNL } from './content-nl';
import { SalesAndDeliveryTermsDE } from './content-de';
import { SalesAndDeliveryTermsEN } from './content-en';

export const metadata: Metadata = {
    title: 'Algemene Voorwaarden | ES Systems',
    description: 'Algemene verkoopsvoorwaarden van ES Systems.',
};

export default function SalesAndDeliveryTermsPage() {
    const locale = useLocale();
    if (locale === 'en') return <SalesAndDeliveryTermsEN />;
    if (locale === 'de') return <SalesAndDeliveryTermsDE />;
    return <SalesAndDeliveryTermsNL />;
}
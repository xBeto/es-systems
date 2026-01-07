import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Algemene Voorwaarden | ES Systems',
    description: 'Algemene verkoopsvoorwaarden van ES Systems.',
};

export default function TermsPage() {
    return (
        <div className="container mx-auto px-6 md:px-12 py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Algemene Voorwaarden</h1>
            <p className="text-muted-foreground mb-12">Versie: 1.0 - Laatst bijgewerkt: {new Date().toLocaleDateString('nl-BE')}</p>

            <div className="prose prose-lg max-w-none text-foreground/80">
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Artikel 1: Toepasselijkheid</h2>
                    <p>
                        Deze algemene voorwaarden zijn van toepassing op elke offerte en elke tot stand gekomen overeenkomst tussen <strong>ES Systems</strong> (hierna: "de Aannemer") en de klant (hierna: "de Opdrachtgever"). Afwijkingen van deze voorwaarden zijn slechts geldig indien deze uitdrukkelijk schriftelijk zijn overeengekomen.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Artikel 2: Offertes en Bestellingen</h2>
                    <p>
                        Alle offertes van de Aannemer zijn vrijblijvend en 30 dagen geldig, tenzij anders vermeld. Een overeenkomst komt pas tot stand na schriftelijke bevestiging of ondertekening van de offerte door de Opdrachtgever, dan wel door de start van de uitvoering der werken door de Aannemer.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Artikel 3: Prijzen en Betaling</h2>
                    <p>
                        De opgegeven prijzen zijn in euro en exclusief BTW, tenzij anders vermeld. Facturen zijn betaalbaar binnen 14 dagen na factuurdatum. Bij niet-tijdige betaling is van rechtswege en zonder ingebrekestelling een verwijlinterest verschuldigd van 10% per jaar, alsmede een forfaitaire schadevergoeding van 10% van het factuurbedrag met een minimum van €50.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Artikel 4: Uitvoering en Leveringstermijnen</h2>
                    <p>
                        De opgegeven uitvoeringstermijnen zijn indicatief en niet bindend, tenzij uitdrukkelijk anders overeengekomen. Vertraging in de uitvoering geeft gen recht op schadevergoeding noch op ontbinding van de overeenkomst. De Aannemer heeft het recht om werken in gedeelten uit te voeren en deze afzonderlijk te factureren.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Artikel 5: Eigendomsvoorbehoud</h2>
                    <p>
                        De geleverde materialen en goederen blijven eigendom van de Aannemer tot op het ogenblik van volledige betaling van de hoofdsom, kosten en interesten. De Opdrachtgever draagt echter het risico voor verlies of beschadiging vanaf het moment van levering of plaatsing.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Artikel 6: Klachten en Aansprakelijkheid</h2>
                    <p>
                        Klachten over zichtbare gebreken moeten binnen 8 dagen na oplevering schriftelijk worden gemeld. Voor verborgen gebreken gelden de wettelijke garantiebepalingen. De aansprakelijkheid van de Aannemer is in elk geval beperkt tot de factuurwaarde van de geleverde diensten/goederen.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Artikel 7: Annulering</h2>
                    <p>
                        Bij annulering van de opdracht door de Opdrachtgever is deze gehouden tot een forfaitaire schadevergoeding van 30% van de overeengekomen prijs, onverminderd het recht van de Aannemer om hogere werkelijk geleden schade te bewijzen en te vorderen.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Artikel 8: Geschillen</h2>
                    <p>
                        Op deze overeenkomst is uitsluitend het Belgische recht van toepassing. In geval van betwisting zijn enkel de rechtbanken van het arrondissement waar de zetel van de Aannemer gevestigd is (Hasselt) bevoegd.
                    </p>
                </section>

                <div className="pt-8 border-t border-border mt-12">
                    <Link href="/" className="text-primary hover:underline font-medium">
                        ← Terug naar home
                    </Link>
                </div>
            </div>
        </div>
    );
}

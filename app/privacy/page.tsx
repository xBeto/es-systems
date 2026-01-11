import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Privacybeleid | ES Systems',
    description: 'Privacybeleid van ES Systems. Hoe wij omgaan met uw gegevens conform de AVG/GDPR.',
};

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-6 md:px-12 py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacybeleid</h1>
            <p className="text-muted-foreground mb-12">Laatst bijgewerkt: {new Date().toLocaleDateString('nl-BE')}</p>

            <div className="prose prose-lg max-w-none text-foreground/80">
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">1. Identiteit van de onderneming</h2>
                    <p>
                        Wij hechten veel waarde aan uw privacy. Dit privacybeleid legt uit hoe wij omgaan met persoonsgegevens.<br />
                        <strong>ES Systems</strong><br />
                        Brancardiershof 13<br />
                        3550 Heusden-Zolder<br />
                        België<br />
                        <strong>Ondernemingsnummer (BTW):</strong> BE 0697.973.594<br />
                        <strong>E-mail:</strong> <a href="mailto:info@essystems.be" className="underline">info@essystems.be</a><br />
                        <strong>Telefoon:</strong> <a href="tel:+32470101212" className="underline">+32 470 10 12 12</a>
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">2. Welke gegevens verzamelen wij?</h2>
                    <p>
                        Wij verzamelen enkel persoonsgegevens die noodzakelijk zijn voor onze dienstverlening. Dit kan de volgende gegevens omvatten:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li>Identificatiegegevens (naam, voornaam)</li>
                        <li>Contactgegevens (adres, e-maildres, telefoonnummer)</li>
                        <li>Informatie over uw project of aanvraag</li>
                        <li>Digitale gegevens (IP-adres, cookies - zie cookiebeleid)</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">3. Doeleinden van de verwerking</h2>
                    <p>
                        Wij gebruiken uw gegevens voor de volgende doeleinden:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li>Om uw offerteaanvraag of bestelling te verwerken en uit te voeren.</li>
                        <li>Voor klantenadministratie en facturatie.</li>
                        <li>Om contact met u op te nemen over uw project.</li>
                        <li>Om te voldoen aan onze wettelijke en fiscale verplichtingen.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">4. Analytische Tools</h2>
                    <p>
                        Wij maken gebruik van Vercel Analytics om inzicht te krijgen in het bezoekersverkeer op onze website. Deze tool verzamelt geanonimiseerde gegevens over paginaweergaven, bezoektijden en verwijzende bronnen. Er worden geen persoonlijk identificeerbare gegevens (PII) verzameld en er worden geen cookies gebruikt voor trackingdoeleinden.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">5. Delen van gegevens</h2>
                    <p>
                        Uw gegevens worden niet verkocht aan derden. Wij delen uw gegevens enkel met derde partijen indien dit noodzakelijk is voor de uitvoering van de overeenkomst (bijvoorbeeld onderaannemers of leveranciers) of om te voldoen aan een wettelijke verplichting.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">6. Bewaartermijn</h2>
                    <p>
                        Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk is voor de doeleinden waarvoor ze zijn verzameld, rekening houdend met de wettelijke bewaartermijnen (bijv. boekhoudkundige verplichtingen: 7 jaar).
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">7. Uw rechten</h2>
                    <p>
                        U heeft te allen tijde recht op inzage, correctie, of verwijdering van uw persoonsgegevens. Daarnaast heeft u het recht om bezwaar te maken tegen de verwerking of om de overdraagbaarheid van uw gegevens te vragen. U kunt deze rechten uitoefenen door contact met ons op te nemen via <a href="mailto:info@essystems.be" className="underline">info@essystems.be</a>.
                    </p>
                    <p className="mt-4">
                        Mocht u een klacht hebben over de verwerking van uw persoonsgegevens, dan heeft u het recht om een klacht in te dienen bij de Gegevensbeschermingsautoriteit (Drukpersstraat 35, 1000 Brussel - <a href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noopener noreferrer" className="underline">https://www.gegevensbeschermingsautoriteit.be</a>).
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

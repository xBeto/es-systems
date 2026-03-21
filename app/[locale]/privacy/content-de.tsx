import Link from 'next/link';

export function PrivacyDE() {
    return (
        <div className="container mx-auto px-6 md:px-12 py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Datenschutzerklärung</h1>
            <p className="text-muted-foreground mb-12">Zuletzt aktualisiert: {new Date().toLocaleDateString('de-DE')}</p>

            <div className="prose prose-lg max-w-none text-foreground/80">
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">1. Identität des Unternehmens</h2>
                    <p>
                        Wir legen großen Wert auf Ihre Privatsphäre. Diese Datenschutzerklärung erklärt, wie wir mit personenbezogenen Daten umgehen.<br />
                        <strong>ES Systems</strong><br />
                        Brancardiershof 13<br />
                        3550 Heusden-Zolder<br />
                        Belgien<br />
                        <strong>Unternehmensnummer (MwSt.):</strong> BE 0697.973.594<br />
                        <strong>E-Mail:</strong> <a href="mailto:info@essystems.be" className="underline">info@essystems.be</a><br />
                        <strong>Telefon:</strong> <a href="tel:+32470101212" className="underline">+32 470 10 12 12</a>
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">2. Welche Daten erfassen wir?</h2>
                    <p>
                        Wir erfassen nur personenbezogene Daten, die für unsere Dienstleistungen erforderlich sind. Dies kann Folgendes umfassen:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li>Identifikationsdaten (Name, Vorname)</li>
                        <li>Kontaktdaten (Adresse, E-Mail, Telefonnummer)</li>
                        <li>Informationen zu Ihrem Projekt oder Ihrer Anfrage</li>
                        <li>Digitale Daten (IP-Adresse, Cookies - siehe Cookie-Richtlinie)</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">3. Zwecke der Verarbeitung</h2>
                    <p>
                        Wir verwenden Ihre Daten für folgende Zwecke:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li>Um Ihre Angebotsanfrage oder Bestellung zu bearbeiten und auszuführen.</li>
                        <li>Zur Kundenverwaltung und Rechnungsstellung.</li>
                        <li>Um Sie bezüglich Ihres Projekts zu kontaktieren.</li>
                        <li>Zur Erfüllung unserer gesetzlichen und steuerlichen Verpflichtungen.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">4. Analysetools</h2>
                    <p>
                        Wir verwenden Vercel Analytics, um Einblicke in den Besucherverkehr auf unserer Website zu erhalten. Dieses Tool erfasst anonymisierte Daten über Seitenaufrufe, Besuchszeiten und verweisende Quellen. Es werden keine personenbezogenen Daten (PII) erfasst und keine Cookies für Tracking-Zwecke verwendet.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">5. Weitergabe von Daten</h2>
                    <p>
                        Ihre Daten werden nicht an Dritte verkauft. Wir geben Ihre Daten nur an Dritte weiter, wenn dies zur Ausführung des Vertrags (z. B. an Subunternehmer oder Lieferanten) oder zur Erfüllung einer gesetzlichen Verpflichtung erforderlich ist.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">6. Aufbewahrungsfrist</h2>
                    <p>
                        Wir bewahren Ihre personenbezogenen Daten nicht länger auf, als dies für die Zwecke, für die sie erhoben wurden, erforderlich ist, unter Berücksichtigung der gesetzlichen Aufbewahrungsfristen (z. B. buchhalterische Verpflichtungen: 7 Jahre).
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">7. Ihre Rechte</h2>
                    <p>
                        Sie haben jederzeit das Recht auf Auskunft, Berichtigung oder Löschung Ihrer personenbezogenen Daten. Darüber hinaus haben Sie das Recht, der Verarbeitung zu widersprechen oder die Übertragbarkeit Ihrer Daten zu beantragen. Sie können diese Rechte ausüben, indem Sie uns über <a href="mailto:info@essystems.be" className="underline">info@essystems.be</a> kontaktieren.
                    </p>
                    <p className="mt-4">
                        Sollten Sie eine Beschwerde über die Verarbeitung Ihrer personenbezogenen Daten haben, haben Sie das Recht, sich an die Datenschutzbehörde zu wenden (Drukpersstraat 35, 1000 Brüssel - <a href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noopener noreferrer" className="underline">https://www.gegevensbeschermingsautoriteit.be</a>).
                    </p>
                </section>

                <div className="pt-8 border-t border-border mt-12">
                    <Link href="/" className="text-primary hover:underline font-medium">
                        ← Zurück zur Startseite
                    </Link>
                </div>
            </div>
        </div>
    );
}

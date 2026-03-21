import Link from 'next/link';

export function TermsDE() {
    return (
        <div className="container mx-auto px-6 md:px-12 py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Allgemeine Geschäftsbedingungen</h1>
            <p className="text-muted-foreground mb-12">Version: 1.0 - Zuletzt aktualisiert: {new Date().toLocaleDateString('de-DE')}</p>

            <div className="prose prose-lg max-w-none text-foreground/80">
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Artikel 1: Anwendbarkeit</h2>
                    <p>
                        Diese allgemeinen Geschäftsbedingungen gelten für jedes Angebot und jeden zustande gekommenen Vertrag zwischen <strong>ES Systems</strong> (im Folgenden: "der Auftragnehmer") und dem Kunden (im Folgenden: "der Auftraggeber"). Abweichungen von diesen Bedingungen sind nur gültig, wenn sie ausdrücklich schriftlich vereinbart wurden.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Artikel 2: Angebote und Bestellungen</h2>
                    <p>
                        Alle Angebote des Auftragnehmers sind unverbindlich und 30 Tage gültig, sofern nicht anders angegeben. Ein Vertrag kommt erst nach schriftlicher Bestätigung oder Unterzeichnung des Angebots durch den Auftraggeber zustande, oder durch Beginn der Ausführung der Arbeiten durch den Auftragnehmer.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Artikel 3: Preise und Zahlung</h2>
                    <p>
                        Die angegebenen Preise verstehen sich in Euro und exklusive MwSt., sofern nicht anders angegeben. Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum zahlbar. Bei nicht rechtzeitiger Zahlung wird von Rechts wegen und ohne Inverzugsetzung ein Verzugszins von 10% pro Jahr fällig, sowie eine pauschale Schadensersatzforderung von 10% des Rechnungsbetrags mit einem Minimum von 50 €.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Artikel 4: Ausführung und Lieferfristen</h2>
                    <p>
                        Die angegebenen Ausführungsfristen sind Richtwerte und nicht bindend, sofern nicht ausdrücklich anders vereinbart. Verzögerungen in der Ausführung berechtigen weder zu Schadensersatz noch zur Auflösung des Vertrags. Der Auftragnehmer hat das Recht, Arbeiten in Teilen auszuführen und diese separat in Rechnung zu stellen.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Artikel 5: Eigentumsvorbehalt</h2>
                    <p>
                        Die gelieferten Materialien und Waren bleiben Eigentum des Auftragnehmers bis zum Zeitpunkt der vollständigen Zahlung der Hauptsumme, Kosten und Zinsen. Der Auftraggeber trägt jedoch das Risiko für Verlust oder Beschädigung ab dem Zeitpunkt der Lieferung oder Montage.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Artikel 6: Beschwerden und Haftung</h2>
                    <p>
                        Beschwerden über sichtbare Mängel müssen innerhalb von 8 Tagen nach Lieferung schriftlich gemeldet werden. Für verborgene Mängel gelten die gesetzlichen Garantiebestimmungen. Die Haftung des Auftragnehmers ist in jedem Fall auf den Rechnungswert der gelieferten Dienstleistungen/Waren beschränkt.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Artikel 7: Stornierung</h2>
                    <p>
                        Bei Stornierung des Auftrags durch den Auftraggeber ist dieser zu einer pauschalen Schadensersatzforderung von 30% des vereinbarten Preises verpflichtet, unbeschadet des Rechts des Auftragnehmers, höheren tatsächlich erlittenen Schaden nachzuweisen und zu fordern.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Artikel 8: Streitigkeiten</h2>
                    <p>
                        Auf diesen Vertrag ist ausschließlich belgisches Recht anwendbar. Im Falle von Streitigkeiten sind ausschließlich die Gerichte des Bezirks zuständig, in dem sich der Sitz des Auftragnehmers befindet (Hasselt).
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

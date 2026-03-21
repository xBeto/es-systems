import Link from 'next/link';

export function SalesAndDeliveryTermsDE() {
    return (
        <div className="container mx-auto px-6 md:px-12 py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Allgemeine Liefer- und Verkaufsbedingungen</h1>
            <p className="text-muted-foreground mb-12">Version: 1.0 - Zuletzt aktualisiert: {new Date().toLocaleDateString('de-DE')}</p>

            <div className="prose prose-lg max-w-none text-foreground/80">
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">ARTIKEL 1 - TEIL DES VERTRAGES</h2>
                    <p>
                        Die vorliegenden Bedingungen sind integraler Bestandteil aller Verträge zwischen ES SYSTEMS BV und ihren Kunden. Diese Bedingungen gelten auch für gelegentliche Lieferungen und Dienstleistungen. Abweichungen sind nur schriftlich möglich. Sie gelten unter Ausschluss aller allgemeinen Bedingungen in Dokumenten, die vom Kunden ausgehen, auch wenn diese Dokumente jüngeren Datums sind. Durch den Abschluss eines Vertrags mit ES Systems erklärt der Kunde, dass er von diesen allgemeinen Bedingungen Kenntnis genommen hat und diesen zustimmt. Verträge werden in gutem Glauben ausgeführt. Keine Bestimmung in den allgemeinen Bedingungen darf von den Parteien als bloße Formalität betrachtet werden. Jede Nachsicht oder Abweichung von diesen allgemeinen Bedingungen kann vom Kunden nicht geltend gemacht oder als erworbenes Recht betrachtet werden. Sollte eine oder mehrere der vorliegenden Bedingungen nicht durchsetzbar oder ungültig sein, so berührt dies nicht die übrigen Bestimmungen, und die betreffende ungültige Bestimmung wird durch eine gültige ersetzt, die rechtlich denselben Zweck erfüllt. Die Überschriften der Artikel dienen lediglich der Orientierung.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">ART. 2 - ANGEBOTE</h2>
                    <p>
                        Unsere Kostenvoranschläge und Angebote sind unverbindlich. Sie sind nur 30 Tage gültig. Alle Preise verstehen sich in EUR/€. Bestellungen des Kunden sind unwiderruflich. Bestellungen sind für ES Systems nur verbindlich, wenn sie durch eine schriftliche Bestätigung oder durch die Ausführung des Vertrags durch ES Systems angenommen wurden. Der Kunde hat die Bestätigung zu überprüfen und ES Systems umgehend über etwaige Unstimmigkeiten zu informieren. Wird eine eventuelle Nichtübereinstimmung nicht innerhalb von 3 Tagen nach dem Datum der Auftragsbestätigung gemeldet, wird unwiderlegbar vermutet, dass die Auftragsbestätigung mit der Bestellung des Kunden identisch ist. Kostenvoranschläge und Angebote basieren auf den aktuell geltenden Werten von Löhnen, Steuern und Materialien. Bei Änderungen behält sich ES Systems das Recht vor, die Preise bis zur Rechnungsstellung entsprechend anzupassen. Bestellungen werden unter der aufschiebenden Bedingung angenommen, dass die bestellten Waren noch vorrätig sind.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">ART. 3 - ARBEITSSCHEIN</h2>
                    <p>
                        Die Unterzeichnung eines Arbeitsscheins durch den Kunden bedeutet, dass dieser anerkennt, dass die darin genannten Arbeiten durch ES Systems nach den Regeln der Kunst ausgeführt wurden und die Arbeit als abgenommen betrachtet wird.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">ART. 4 - ZAHLUNG DES PREISES</h2>
                    <p>
                        Die gelieferten Waren und Dienstleistungen sind bar zahlbar. ES Systems ist berechtigt, die Lieferung von Waren und Dienstleistungen nach erfolgter Lieferung in Rechnung zu stellen, auch bei Teillieferungen. ES Systems behält sich das Recht vor, jederzeit während der Vertragsausführung vom Kunden eine Sicherheit zu verlangen.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">ART. 5 - ZUSATZARBEITEN UND UNTERVERGABE</h2>
                    <p>
                        Soweit Zusatzarbeiten, die nicht im Angebot enthalten sind, ausgeführt werden müssen, erfolgt dies zum geltenden Stundensatz, sofern nicht schriftlich anders vereinbart. Der Kunde erklärt, im Voraus über den geltenden Stundensatz informiert zu sein.
                    </p>
                    <p className="mt-4">
                        Die Ausführung von Zusatzarbeiten stellt für ES Systems eine Verpflichtung zur Bemühung dar, unabhängig vom erreichten Ergebnis, sofern vertraglich nicht anders festgelegt. ES Systems kann ihre Dienstleistungs- und Warenlieferung an Dritte vergeben. Der Kunde darf keine Verpflichtungen, Rechte oder Lizenzen übertragen oder an Dritte vergeben.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">ART. 6 - VERZÖGERUNGEN UND LIEFERFRISTEN</h2>
                    <p>
                        Die vereinbarten Ausführungs- und Lieferfristen sind stets als Richtwerte zu verstehen. Kann ES Systems eine vorgesehene, unverbindliche Lieferfrist auf Grund einer von ihrem Willen unabhängigen Ursache oder infolge höherer Gewalt nicht einhalten, kann sie die Frist durch einfache schriftliche Mitteilung jederzeit verlängern. Eine Verzögerung in der Ausführung begründet weder einen Anspruch auf Schadensersatz noch auf Auflösung des Vertrags. Die Lieferung erfolgt ab Werk ES Systems. Holt der Kunde die Waren nicht am mitgeteilten Termin ab, behält sich ES Systems das Recht vor, nach Ablauf von fünfzehn Tagen den Vertrag ohne Vorankündigung als aufgelöst zu betrachten.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">ART. 7 - RECHNUNGSWIDERSPRUCH</h2>
                    <p>
                        Ein Widerspruch gegen eine Rechnung muss schriftlich, begründet und per Einschreiben innerhalb von sieben Tagen nach Rechnungsdatum erfolgen, andernfalls gilt die Rechnung als endgültig akzeptiert.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">ART. 8 - ZAHLUNGSVERZUG ODER NICHTZAHLUNG</h2>
                    <p>
                        Erhaltene Zahlungen werden von ES Systems zuerst auf fällige Zinsen und Schadensersatz, dann auf den Hauptbetrag der ältesten Rechnung angerechnet. Jede nicht rechtzeitig bezahlte Rechnung bringt von Rechts wegen einen Zins von 1% pro Monat ein. Sämtliche gewährten Rabatte verfallen bei verspäteter Zahlung. Bei Zahlungsverzug ist eine pauschale Schadensersatzforderung in Höhe von 15% des Rechnungsbetrags (Zusätzliche Kosten wie Anwalts- und Gerichtskosten müssen ebenfalls erstattet werden) sofort fällig. Bei verspäteter Zahlung einer Rechnung werden alle noch nicht fälligen Rechnungen sofort fällig.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">ART. 9 - EIGENTUMSVORBEHALT UND GEFAHRENÜBERGANG</h2>
                    <p>
                        Die gelieferten Waren bleiben bis zur vollständigen Bezahlung Eigentum von ES Systems. Solange das Eigentumsrecht besteht, hat der Kunde die Waren pfleglich zu behandeln und zu versichern. Der Kunde darf diese nicht verpfänden oder verkaufen, bevor das Eigentum übertragen wurde. Sollte der Kunde dennoch darüber verfügen, steht der Erlös ES Systems zu. Wenn die Waren wegen des Eigentumsvorbehalts an ES Systems zurückgehen, behält sich ES Systems das Recht vor, erhaltene Anzahlungen gegen offene Forderungen oder den erlittenen Schaden zu verrechnen. Das Risiko geht bereits bei Vertragsschluss auf den Käufer über; Transport und Lagerung geschehen auf sein Risiko und seine Kosten.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">ART. 10 - VERTRAGLICHE AUFRECHNUNG</h2>
                    <p>
                        Die Aufrechnung erfolgt automatisch, auch im Falle der Einleitung eines Insolvenzverfahrens oder einer Beschlagnahme, gemäß dem Gesetz über Finanzsicherheiten. Dies ist allen Dritten und Gläubigern des Kunden gegenüber wirksam.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">ART. 11 - HAFTUNGSFREISTELLUNG</h2>
                    <p>
                        Die Schadensersatzpflicht von ES Systems beschränkt sich stets auf den Wert der jeweiligen Waren oder Dienstleistungen. Der Kunde muss ES Systems unverzüglich über behauptete Schäden informieren und alle Belege bereitstellen, andernfalls wird ES Systems von jeglicher Haftung befreit. ES Systems haftet nicht nach dem Gesetz vom 25.02.1991 über die Produkthaftung.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">ART. 12 - HAFTUNG VON ES SYSTEMS</h2>
                    <p>
                        Die Haftung von ES Systems ist auf die Rückerstattung des Wertes der fehlerhaften Waren oder Dienstleistungen beschränkt. ES Systems haftet nicht für direkte oder indirekte Schäden.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">ART. 13 - BESCHWERDEN BEZÜGLICH SICHTBARER MÄNGEL</h2>
                    <p>
                        Beschwerden über sichtbare Mängel müssen ES Systems innerhalb von sieben Tagen nach Lieferung schriftlich und per Einschreiben vor der Nutzung oder dem Weiterverkauf der Waren gemeldet werden. Die Existenz von Beschwerden entbindet den Kunden nicht von seinen Verpflichtungen gegenüber ES Systems. Abweichungen in Größe, Farbe und Präsentation gelten ausdrücklich als sichtbare Mängel. Die Waren sind bei Empfang auf Konformität und Mängel zu prüfen. Ist der Kunde nicht anwesend, gilt dies als Zustimmung zur Lieferung.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">ART. 14 - VERBORGENE MÄNGEL UND FEHLER</h2>
                    <p>
                        ES Systems haftet nicht für verborgene Mängel oder Fehler und leistet keinen Schadensersatz, es sei denn bei grober Fahrlässigkeit oder Vorsatz. Kleine, branchenübliche oder technisch unvermeidbare Abweichungen rechtfertigen keine Beschwerden. Für Verbraucher im Sinne des Gesetzes vom 14. Juli 1991 gilt diese Haftungsbeschränkung für verborgene Mängel und Fehler ebenfalls, außer bei eigener grober Fahrlässigkeit oder Vorsatz.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">ART. 15 - VERTRAGSVERLETZUNG</h2>
                    <p>
                        Im Falle einer teilweisen oder vollständigen Nichterfüllung vertraglicher Pflichten durch den Kunden (einschließlich Zahlungsverzug) ist ES Systems berechtigt, die Vertragserfüllung ohne Vorankündigung auszusetzen oder den Vertrag als aufgelöst zu betrachten, ohne Schadensersatz leisten zu müssen. Ein Verbraucher kann den Vertrag nach vorheriger zweiymonatiger Anmahnung kündigen.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">ART. 16 - VERTRAGSAUFLÖSUNGSKLAUSEL</h2>
                    <p>
                        Wird der Vertrag vom Kunden gebrochen oder aufgelöst, ist dieser zu einer pauschalen Schadensersatzforderung von 35% des vereinbarten Vertragspreises verpflichtet. Ein Verbraucher hat bei unbegründeter Kündigung durch ES Systems Anspruch auf einen Schadensersatz von 10% des Vertragspreises.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">ART. 17 - VERTRAGSAUFLÖSUNG DURCH ES SYSTEMS</h2>
                    <p>
                        ES Systems behält sich das Recht vor, den Vertrag im Falle von Konkurs, Gläubigervereinbarung, offensichtlicher Insolvenz oder wesentlichen Vertragsverletzungen nach einer Frist von 7 Tagen nach der Mahnung von Rechts wegen als aufgelöst zu betrachten. Bei Auflösung ist der Kunde zur Zahlung für bereits gelieferte Waren verpflichtet, unbeschadet der in Art. 16 erwähnten Schadensersatzklausel.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">ART. 18 - UNMÖGLICHKEIT DER VERTRAGSAUSFÜHRUNG</h2>
                    <p>
                        Kann ES Systems infolge von höherer Gewalt, Streik oder Aussperrung den Vertrag nicht erfüllen, behält sie sich das Recht vor, diesen ohne Schadensersatz zu beenden.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">ART. 19 - FORDERUNGSABTRETUNG</h2>
                    <p>
                        Der Vertragsschluss gilt als Vertrag über die Abtretung von Forderungen.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">ART. 20 - GARANTIE</h2>
                    <p>
                        Wird vom Hersteller eine Garantie gewährt, kann diese nur gegenüber dem Hersteller gemäß dessen Bedingungen geltend gemacht werden. Die Garantie von ES Systems beschränkt sich stets auf die Garantie, die sie von ihren eigenen Zulieferern/Unternehmern erhalten hat. Die Bestimmungen in diesem Artikel gelten ausschließlich für den Verkauf von Verbrauchsgütern an Verbraucher, gemäß den gesetzlichen Bestimmungen. Die Garantie muss innerhalb von zwei Monaten per Einschreiben geltend gemacht werden, andernfalls verfällt sie.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">ART. 21 - ANWENDBARES RECHT UND GERICHTSSTAND</h2>
                    <p>
                        Alle Verträge unterliegen dem belgischen Recht. Für Streitigkeiten sind ausschließlich die Gerichte des Gerichtsbezirks Antwerpen, Abteilung Limburg/Hasselt zuständig.
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

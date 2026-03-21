import Link from 'next/link';

export function PrivacyEN() {
    return (
        <div className="container mx-auto px-6 md:px-12 py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-12">Last updated: {new Date().toLocaleDateString('en-GB')}</p>

            <div className="prose prose-lg max-w-none text-foreground/80">
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">1. Identity of the company</h2>
                    <p>
                        We value your privacy. This privacy policy explains how we handle personal data.<br />
                        <strong>ES Systems</strong><br />
                        Brancardiershof 13<br />
                        3550 Heusden-Zolder<br />
                        Belgium<br />
                        <strong>Company Number (VAT):</strong> BE 0697.973.594<br />
                        <strong>Email:</strong> <a href="mailto:info@essystems.be" className="underline">info@essystems.be</a><br />
                        <strong>Phone:</strong> <a href="tel:+32470101212" className="underline">+32 470 10 12 12</a>
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">2. What data do we collect?</h2>
                    <p>
                        We only collect personal data that is necessary for our services. This may include the following data:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li>Identification data (name, surname)</li>
                        <li>Contact details (address, email address, phone number)</li>
                        <li>Information about your project or request</li>
                        <li>Digital data (IP address, cookies - see cookie policy)</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">3. Purposes of processing</h2>
                    <p>
                        We use your data for the following purposes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li>To process and execute your quote request or order.</li>
                        <li>For customer administration and invoicing.</li>
                        <li>To contact you regarding your project.</li>
                        <li>To comply with our legal and tax obligations.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">4. Analytical Tools</h2>
                    <p>
                        We use Vercel Analytics to gain insight into visitor traffic on our website. This tool collects anonymized data about page views, visit times, and referring sources. No personally identifiable information (PII) is collected, and no cookies are used for tracking purposes.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">5. Sharing of data</h2>
                    <p>
                        Your data will not be sold to third parties. We only share your data with third parties if this is necessary for the execution of the agreement (for example, subcontractors or suppliers) or to comply with a legal obligation.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">6. Retention period</h2>
                    <p>
                        We do not store your personal data longer than necessary for the purposes for which it was collected, taking into account the legal retention periods (e.g., accounting obligations: 7 years).
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your rights</h2>
                    <p>
                        You have the right to access, correct, or delete your personal data at any time. In addition, you have the right to object to the processing or to request the portability of your data. You can exercise these rights by contacting us at <a href="mailto:info@essystems.be" className="underline">info@essystems.be</a>.
                    </p>
                    <p className="mt-4">
                        If you have a complaint about the processing of your personal data, you have the right to file a complaint with the Data Protection Authority (Drukpersstraat 35, 1000 Brussels - <a href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noopener noreferrer" className="underline">https://www.gegevensbeschermingsautoriteit.be</a>).
                    </p>
                </section>

                <div className="pt-8 border-t border-border mt-12">
                    <Link href="/" className="text-primary hover:underline font-medium">
                        ← Back to home
                    </Link>
                </div>
            </div>
        </div>
    );
}

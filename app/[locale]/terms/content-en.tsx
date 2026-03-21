import Link from 'next/link';

export function TermsEN() {
    return (
        <div className="container mx-auto px-6 md:px-12 py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms and Conditions</h1>
            <p className="text-muted-foreground mb-12">Version: 1.0 - Last updated: {new Date().toLocaleDateString('en-GB')}</p>

            <div className="prose prose-lg max-w-none text-foreground/80">
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Article 1: Applicability</h2>
                    <p>
                        These terms and conditions apply to every quotation and every agreement concluded between <strong>ES Systems</strong> (hereinafter: "the Contractor") and the client (hereinafter: "the Client"). Deviations from these terms and conditions are only valid if explicitly agreed upon in writing.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Article 2: Quotations and Orders</h2>
                    <p>
                        All quotations from the Contractor are non-binding and valid for 30 days, unless stated otherwise. An agreement is only concluded upon written confirmation or signature of the quotation by the Client, or by the start of the execution of the works by the Contractor.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Article 3: Prices and Payment</h2>
                    <p>
                        The stated prices are in euros and exclusive of VAT, unless stated otherwise. Invoices are payable within 14 days of the invoice date. In the event of late payment, a default interest of 10% per year is payable by operation of law and without prior notice of default, as well as a fixed compensation of 10% of the invoice amount with a minimum of €50.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Article 4: Execution and Delivery Times</h2>
                    <p>
                        The stated execution times are indicative and not binding, unless explicitly agreed otherwise. Delay in execution does not confer any right to compensation or to dissolution of the agreement. The Contractor has the right to carry out works in parts and to invoice them separately.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Article 5: Retention of Title</h2>
                    <p>
                        The delivered materials and goods remain the property of the Contractor until the moment of full payment of the principal amount, costs, and interest. However, the Client bears the risk for loss or damage from the moment of delivery or installation.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Article 6: Complaints and Liability</h2>
                    <p>
                        Complaints about visible defects must be reported in writing within 8 days after delivery. For hidden defects, the legal warranty provisions apply. The liability of the Contractor is in any case limited to the invoice value of the delivered services/goods.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Article 7: Cancellation</h2>
                    <p>
                        In the event of cancellation of the assignment by the Client, the Client is obliged to pay a fixed compensation of 30% of the agreed price, without prejudice to the right of the Contractor to prove and claim higher actual damage suffered.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Article 8: Disputes</h2>
                    <p>
                        This agreement is governed exclusively by Belgian law. In the event of a dispute, only the courts of the district where the registered office of the Contractor is established (Hasselt) have jurisdiction.
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

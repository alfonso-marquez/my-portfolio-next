export default function PrivacyPage() {
    return (
        <div className="container mx-auto max-w-3xl px-4 pt-28 pb-24 lg:pt-36">
            <h1 className="text-4xl font-semibold tracking-tight mb-8 lg:text-5xl">Privacy Policy</h1>

            <section className="space-y-8">
                <div>
                    <h2 className="mb-2 text-xl font-semibold tracking-tight lg:text-2xl">Data We Collect</h2>
                    <p className="leading-relaxed text-muted-foreground">
                        We collect anonymized visitor data (hashed IP addresses) solely to
                        prevent spam and abuse on our accountability reminder feature.
                    </p>
                </div>

                <div>
                    <h2 className="mb-2 text-xl font-semibold tracking-tight lg:text-2xl">How We Use It</h2>
                    <ul className="list-disc list-inside space-y-1 leading-relaxed text-muted-foreground">
                        <li>Limit reminder clicks to prevent spam</li>
                        <li>Cannot identify individual users from this data</li>
                        <li>Data stored securely in our database</li>
                        <li>Not sold or shared with third parties</li>
                    </ul>
                </div>

                <div>
                    <h2 className="mb-2 text-xl font-semibold tracking-tight lg:text-2xl">Your Rights</h2>
                    <p className="leading-relaxed text-muted-foreground">
                        Since we do not store personally identifiable information,
                        there is no personal data to request or delete.
                    </p>
                </div>

                <div>
                    <h2 className="mb-2 text-xl font-semibold tracking-tight lg:text-2xl">Contact</h2>
                    <p className="leading-relaxed text-muted-foreground">
                        Questions? Email:{" "}
                        <a href="mailto:marquez.josealfonso@gmail.com" className="underline hover:text-foreground">
                            marquez.josealfonso@gmail.com
                        </a>
                    </p>
                </div>

                <p className="text-sm text-muted-foreground pt-4 border-t">
                    Last updated: October 29, 2025
                </p>
            </section>
        </div>
    );
}

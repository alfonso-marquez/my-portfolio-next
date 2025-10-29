export default function PrivacyPage() {
    return (
        <div className="container mx-auto max-w-3xl h-[80vh] p-16 mt-20">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

            <section className="space-y-6">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Data We Collect</h2>
                    <p className="text-muted-foreground">
                        We collect anonymized visitor data (hashed IP addresses) solely to
                        prevent spam and abuse on our accountability reminder feature.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">How We Use It</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Limit reminder clicks to prevent spam</li>
                        <li>Cannot identify individual users from this data</li>
                        <li>Data stored securely in our database</li>
                        <li>Not sold or shared with third parties</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
                    <p className="text-muted-foreground">
                        Since we do not store personally identifiable information,
                        there is no personal data to request or delete.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Contact</h2>
                    <p className="text-muted-foreground">
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

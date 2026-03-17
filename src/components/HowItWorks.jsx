function HowItWorks() {
    const steps = [
        {
            number: "1",
            title: "Record or Upload",
            description: "Import your moves directly from your gallery"
        },
        {
            number: "2",
            title: "Organize & Tag",
            description: "Create folders and categorize your videos by style or difficulty"
        },
        {
            number: "3",
            title: "Practice & Perfect",
            description: "Review your moves anytime, anywhere, and track your improvement"
        }
    ];

    return (
        <section id="how-it-works" className="how-it-works">
            <div className="container">
                <h2 className="section-title">How It Works</h2>
                <div className="steps">
                    {steps.map((step, index) => (
                        <div key={index} className="step">
                            <div className="step-number">{step.number}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;

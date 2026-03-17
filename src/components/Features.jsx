function Features() {
    const features = [
        {
            icon: "📂",
            title: "Organize Your Moves",
            description: "Keep all your dance moves, sequences, and routines organized in custom folders. Never dig through your phone gallery again."
        },
        // {
        //     icon: "🎬",
        //     title: "Store Choreographies",
        //     description: "Save complete choreographies with music and video references. Perfect for remembering complex routines."
        // },
        {
            icon: "⚔️",
            title: "Dance Archive",
            description: "Record and store your dance battles, practice sessions, and performances. Track your progress over time."
        },
        {
            icon: "☁️",
            title: "Cloud Backup",
            description: "Your moves are safely backed up to the cloud. Switch devices without losing your library."
        }
    ];

    return (
        <section id="features" className="features">
            <div className="container">
                <h2 className="section-title">💃 Built by a Dancer (Me), for Dancers 🕺</h2>
                <p className="features-subtitle">Here is how we help you level up.</p>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;

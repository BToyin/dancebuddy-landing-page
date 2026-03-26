function Screenshots() {
    const screenshots = [
        { id: 1, src: '/screenshot-1.png', alt: 'Your Personal Dance Library' },
        { id: 2, src: '/screenshot-2.png', alt: 'Organize your moves and choreographies' },
        { id: 3, src: '/screenshot-3.png', alt: 'Track Your Dance Journey' },
        { id: 4, src: '/screenshot-4.png', alt: 'Never Lose a Move Again' },
    ];

    return (
        <section id="screenshots" className="screenshots">
            <div className="container">
                <h2 className="section-title">See DanceBuddy in Action</h2>
                <div className="screenshot-grid">
                    {screenshots.map((screen) => (
                        <div key={screen.id} className="screenshot-wrapper">
                            <img src={screen.src} alt={screen.alt} className="screenshot-image" onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/300x600?text=' + screen.alt.replace(/ /g, '+');
                            }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Screenshots;

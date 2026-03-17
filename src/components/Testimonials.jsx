function Testimonials() {
    const testimonials = [
        {
            text: "DanceBuddy completely changed how I organize my choreography. No more scrolling through thousands of videos!",
            author: "— Sarah K., Hip Hop Dancer"
        },
        {
            text: "As a dance teacher, this app is perfect for keeping track of routines for different classes. Absolutely essential.",
            author: "— Marcus T., Dance Instructor"
        },
        {
            text: "I love being able to tag my moves and find them instantly. Game changer for battle prep!",
            author: "— Lisa M., B-Girl"
        }
    ];

    return (
        <section className="testimonials">
            <div className="container">
                <h2 className="section-title">What Dancers Are Saying</h2>
                <div className="testimonial-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial">
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <p className="testimonial-author">{testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;

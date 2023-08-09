import React, { useState, useEffect } from 'react';
import './TestimonialSlider.css';
import img from "./hills.jpg";

const testimonialData = [
    {
        image: img,
        name: 'John Doe',
        description: 'A kind-hearted person who loves nature and spreads positivity.',
    },
    {
        image: img,
        name: 'Jane Smith',
        description: 'An adventurer with a passion for discovering new places and cultures.',
    },
    {
        image: img,
        name: 'Alex Johnson',
        description: 'A tech enthusiast who enjoys coding and creating innovative solutions.',
    },
    {
        image: img,
        name: 'Emily Williams',
        description: 'A talented artist who expresses emotions through beautiful paintings.',
    },
    {
        image: img,
        name: 'Michael Brown',
        description: 'A dedicated musician who believes in the power of music to connect hearts.',
    }
];


const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="testimonial-slider">
            {testimonialData.map((testimonial, index) => (
                <div
                    key={index}
                    className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
                >
                    <div className="testimonial-image">
                        <img src={testimonial.image} alt="Testimonial" />
                    </div>
                    <div className="testimonial-details">
                        <p className="testimonial-name">{testimonial.name}</p>
                        <p className="testimonial-description">{testimonial.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TestimonialSlider;

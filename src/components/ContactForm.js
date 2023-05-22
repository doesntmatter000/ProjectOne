import React from 'react';
import "./ContactFormStyle.css"

const ContactForm = () => {
    return (
        <div className="form-container">
            <h2>Send a message tu us!</h2>
            <form action="">
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Subject"/>
                <textarea placeholder="Message" rows="4"></textarea>
                <button>Send message</button>
            </form>
        </div>
    );
};

export default ContactForm;
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_381tg4t', 'template_mbv9hwf', form.current, 'yV2e9JXvaLBRyuSYH')
            .then(
                () => {
                    console.log('SUCCESS!');
                    setName('');
                    setEmail('');
                    setMessage('');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <>
            <div className="container-fluid backrou">
                <div class="container-fluid">
                    <h4>Quick Assists</h4>
                    <h6>Answers to our most frequently asked questions are just one click away.</h6>
                    <hr />
                    <div class='container-fluid d-flex flex-row flex-wrap justify-content-between'>
                        <div class='lh-sg col-md-4 col-sm-4'>
                            <h6 class='fw-bold'>Returns</h6>
                            <p>what is Nike's return policy?</p>
                            <p>How do I return my Nike order?</p>
                            <p>Where is my refund?</p>
                        </div>
                        <div class='lh-sg col-md-4 col-sm-4'>
                            <h6 class='fw-bold'>Dispatch & Delivery</h6>
                            <p>What are Nike's delivery options?</p>
                            <p>Can my Nike order be dispatched internationally?</p>
                            <p>Does my Nike order need to clear customs?</p>
                        </div>
                        <div class='lh-sg col-4 col-sm-4'>
                            <h6 class='fw-bold'>Orders & Payment</h6>
                            <p>Where is my Nike order?</p>
                            <p>Can I cancel or change my Nike order?</p>
                            <p>What are Nike's payment options?</p>
                        </div>
                        <div class='lh-sg col-md-4 col-sm-4'>
                            <h6 class='fw-bold'>Shopping</h6>
                            <p>How do I find the right size and fit?</p>
                            <p>How can I get Nike's best deals?</p>
                            <p>Does Nike offer product advice?</p>
                        </div>
                        <div class='lh-sg col-md-4 col-sm-4'>
                            <h6 class='fw-bold'>Nike Membership & Apps</h6>
                            <p>What is Nike Membership?</p>
                            <p>How can I join Nike SNKRS drawings?</p>
                            <p>How do I get Nike's newest sneaker releases?</p>
                        </div>
                        <div class='lh-sg col-md-4 col-sm-4'>
                            <h6 class='fw-bold'>Company Info</h6>
                            <p>Do Nike shoes have a warranty?</p>
                            <p>What is Nike's mission?</p>
                            <p>Where can I learn more about Nike, Inc.?</p>
                        </div>
                    </div>
                    <hr />

                </div>
                <div className="row justify-content-center p-3">
                    <h4 className="text-black text-start">CONTACT US!</h4>
                    <p class=' container text-start '>You can contact us through providing the information of your name and email id and some feedback messages</p>
                    <div class="container d-flex flex-row flex-wrap justify-content-evenly">
                        <div class=" p-3 text-center rounded">
                            <i class="bi bi-chat-left-text " style={{ fontSize: '3.0rem' }}></i>
                            <h6>Chat</h6>
                            <p>3.30 - 21.30</p>
                            <p>7 days a week</p>
                        </div>
                        <div class=" p-3 text-center rounded ">
                            <i class="bi bi-phone" style={{ fontSize: '3.0rem' }}></i>
                            <h6>Call us</h6>
                            <p>000 800 919 0566</p>
                            <p>Products & Orders: 03:30 - 21:30</p>
                            <p>7 days a week</p>
                        </div>
                        <div class=" p-3 text-center rounded ">
                            <i class="bi bi-envelope" style={{ fontSize: '3.0rem' }}></i>
                            <h6>We'll reply within</h6>
                            <p>five buisness days</p>
                        </div>
                        <div class=" p-3 text-center rounded ">
                            <i class="bi bi-geo-alt" style={{ fontSize: '3.0rem' }}></i>
                            <h6>Chat</h6>
                            <p>Find a Store</p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            <div class='container'>
                <h1 class='text-center'>Get Contact Us</h1>
            </div>
            <div class='container'>
                <p class="text-center fw-medium">You can provide your information through giving your name and e-mail Id and what kind of message you convey with us</p>
            </div>
            <div className="container-fluid col-md-8 p-5 pt-5  ">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control border border-black"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            id="floatingName"
                            placeholder="name@example.com"
                            name="to_name"
                        />
                        <label htmlFor="floatingName">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control border border-black"
                            id="floatingEmail"
                            placeholder="name@example.com"
                            name="from_name"
                        />
                        <label htmlFor="floatingEmail">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="form-control h-30 border border-black"
                            id="floatingMessage"
                            placeholder="Your message"
                            rows="3"
                            name="message"
                        />
                        <label htmlFor="floatingMessage">Message</label>
                    </div>
                    <input type="submit" value="Send" className="btn btn-primary" />
                </form>
            </div>
            {/* <Fourimages /> */}
        </>
    );
};
export default Contact;
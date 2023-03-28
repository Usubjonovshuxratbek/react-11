import React from 'react'
import Container from '../Container/Container'
import './Cart.scss'

function Cart() {
    return (
        <section className='cart'>
            <Container>
                <h3 className='cart-title'>And so much more...</h3>
                <p className='cart-text'>Your customers are always connected. <br />Why should your CRM be any different?</p>
                <a className='cart-link' href="/">Get started</a>
                <div className="carts">
                    <div className="cart">
                        <h4>Quick actions</h4>
                        <p>Streamline your workflow with customizable shortcuts.</p>
                    </div>
                    <div className="cart">
                        <h4>Quick actions</h4>
                        <p>Streamline your workflow with customizable shortcuts.</p>
                    </div>
                    <div className="cart">
                        <h4>Automatic enrichment</h4>
                        <p>Update your contacts with the latest information on autopilot.</p>
                    </div>
                    <div className="cart">
                        <h4>Quick actions</h4>
                        <p>Streamline your workflow with customizable shortcuts.</p>
                    </div>
                    <div className="cart">
                        <h4>Quick actions</h4>
                        <p>Streamline your workflow with customizable shortcuts.</p>
                    </div>
                    <div className="cart">
                        <h4>Quick actions</h4>
                        <p>Streamline your workflow with customizable shortcuts.</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Cart

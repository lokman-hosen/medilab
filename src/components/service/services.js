import React, { useState } from 'react';
import ServiceItem from "./serviceItem";

function Services() {
    return (
        <div>
            <section id="services" className="services">
                <div className="container">

                    <div className="section-title">
                        <h2>Services</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                            Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit
                            alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <ServiceItem />

                </div>
            </section>
        </div>
    );
}

export default Services
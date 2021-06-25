import React, { useState } from 'react';
import SingleItem from "./singleItem";

function Doctors() {
    return (
        <div>
            <section id="doctors" className="doctors">
                <div className="container">

                    <div className="section-title">
                        <h2>Doctors</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                            Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit
                            alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">

                       <SingleItem />

                    </div>

                </div>
            </section>
        </div>
    );
}

export default Doctors
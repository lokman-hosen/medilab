import React, { useState , useEffect} from 'react';

function ServiceItem() {
    const initialValue = [
        {
            id: 1,
            text: "Lorem Ipsum",
            description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
            icon: "fa-heartbeat"
        },
        {
            id: 2,
            text: "Sed ut perspiciatis",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
            icon: "fa-pills"
        },
        {
            id: 3,
            text: "Magni Dolores",
            description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
            icon: "fa-hospital-user"
        },
        {
            id: 3,
            text: "Nemo Enim",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
            icon: "fa-dna"
        },
        {
            id: 3,
            text: "Dele cardo",
            description: "Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur",
            icon: "fa-wheelchair"
        },
        {
            id: 3,
            text: "Divera don",
            description: "Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur",
            icon: "fa-notes-medical"
        }
    ]
    const [ services, setMovies ] = useState(initialValue);


    return (
        <div className="row">
            {services.map((service) => {
                return <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" key={service.id}>
                        <div className="icon-box">
                            <div className="icon"><i className={`fas ${service.icon}`}></i></div>
                            <h4><a href="">{service.text}</a></h4>
                            <p>{service.description}</p>
                        </div>
                    </div>;
            })}

        </div>
    );
}

export default ServiceItem
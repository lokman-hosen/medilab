import React, { useState , useEffect} from 'react';

function SingleItem() {
    const doctorList = [
        {
            id: 1,
            name: "Walter White",
            designation: "Chief Medical Officer",
            description: "Explicabo voluptatem mollitia et repellat qui dolorum quasi",
            image: "doctors-1.jpg",
            social: [
                {
                    name: "twitter",
                    url: "https://twitter.com/"
                },
                {
                    name: "facebook",
                    url: "https://facebook.com"
                },
                {
                    name: "instagram",
                    url: "https://instagram.com"
                },
                {
                    name: "linkedin",
                    url: "https://linkedin.com"
                },
            ]
        },
        {
            id: 2,
            name: "Sarah Jhonson",
            designation: "Anesthesiologist",
            description: "Aut maiores voluptates amet et quis praesentium qui senda para",
            image: "doctors-2.jpg",
            social: [
                {
                    name: "twitter",
                    url: "https://twitter.com/"
                },
                {
                    name: "facebook",
                    url: "https://facebook.com"
                },
                {
                    name: "instagram",
                    url: "https://instagram.com"
                },
                {
                    name: "linkedin",
                    url: "https://linkedin.com"
                },
            ]
        },
        {
            id: 3,
            name: "William Anderson",
            designation: "Cardiology",
            description: "Quisquam facilis cum velit laborum corrupti fuga rerum quia",
            image: "doctors-3.jpg",
            /*social: {
                twitter: "twitter",
                facebook: "facebook",
                instagram: "instagram",
                linkedin: "linkedin-box",
            }*/
            social: [
                {
                    name: "twitter",
                    url: "https://twitter.com/"
                },
                {
                    name: "facebook",
                    url: "https://facebook.com"
                },
                {
                    name: "instagram",
                    url: "https://instagram.com"
                },
                {
                    name: "linkedin",
                    url: "https://linkedin.com"
                },
            ]
        },
        {
            id: 4,
            name: "Amanda Jepson",
            designation: "Neurosurgeon",
            description: "Dolorum tempora officiis odit laborum officiis et et accusamus",
            image: "doctors-4.jpg",
            social: [
                {
                    name: "twitter",
                    url: "https://twitter.com/"
                },
                {
                    name: "facebook",
                    url: "https://facebook.com"
                },
                {
                    name: "instagram",
                    url: "https://instagram.com"
                },
                {
                    name: "linkedin",
                    url: "https://linkedin.com"
                },
            ]
        }

    ]
    const [ doctors, setDoctors ] = useState(doctorList);


    return (
        <div className="row">
            {doctors.map((doctor) => {
                return  <div className="col-lg-6 mt-4" key={doctor.id}>
                            <div className="member d-flex align-items-start">
                                <div className="pic"><img src={`assets/img/doctors/${doctor.image}`} className="img-fluid"
                                                          alt=""/></div>
                                <div className="member-info">
                                    <h4>{doctor.name}</h4>
                                    <span>{doctor.description}</span>
                                    <p>{doctor.description}</p>
                                    <div className="social">
                                        {doctor.social.map((social) => {
                                                return <a target="_blank" href={social.url}><i className={`ri-${social.name}-fill`}></i></a>
                                            })
                                        }

                                    </div>
                                </div>
                            </div>
                    </div>;
            })}

        </div>
    );
}

export default SingleItem
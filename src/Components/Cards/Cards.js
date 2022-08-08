import React from "react";
import './Cards.css'


const Cards = () => {
    return (
        <div className="cards--container bg-primary">
            <div className="card--container">
                <div className="card">
                    <div className="card--body">
                        <span className="card--txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum dicta iste assumenda tempora et! Molestiae fugiat reprehenderit qui ea. Sed mollitia ullam a, autem soluta ratione optio eum nesciunt cumque?
                        </span>
                    </div>
                    <div className="card--footer">
                        <h1>~ Jane Doe</h1>
                    </div>
                </div>
            </div>
            <div className="card--container">
                <div className="card">
                    <div className="card--body">
                        <span className="card--txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum dicta iste assumenda tempora et! Molestiae fugiat reprehenderit qui ea. Sed mollitia ullam a, autem soluta ratione optio eum nesciunt cumque?
                        </span>
                    </div>
                    <div className="card--footer">
                        <h1>~ Jane Doe</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Cards;
import React from 'react';
import "./DestinationStyle.css"
import DestinationDynamic from "./DestinationDynamic";
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.jpg"
import img7 from "../assets/img7.jpg"
import img8 from "../assets/img8.jpg"

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>
            <DestinationDynamic
                title="Tall Volcano, Batangas"
                class="first-des"
                text="One of the most iconic views in Luzon, MI Toal boasts a
                    volcano inside a lake inside an island tf you fancy a closer
                    look. the hike up to the crater is a mere 45 minutes, and is
                    easy enough for beginners. Guides will assist you most of
                    the way, and you'll see the peculiar environment found on
                    an active volcano, including volcanic rocks and steam
                    vents. The hike can be dusty and hot, so plan for an earty
                    morning trip, and then unwind with some bulalo before
                    heading back homer"
                img1={img5}
                img2={img6}
            />
            <DestinationDynamic
                title="Mt. Daguldul, Batangas"
                class="first-des-reverse"
                text="you're looking or a hike that's a little more
            g but still good for a beginner
            mountaineer, check out Mt Daguldul in San Juan
            Batangas. You'll start your hike from the beach
            and pass through tropical forest. different rock
            formations, and so-tall streams. There's a small
            store halfway up the trail where you can take a
            break and drink buko juice. and though
            summit itself may not have the best view, the
            breeze is fantastic. Once you've made it back
            down, head straight to the beach for a refreshing,
            well-deserved swim."
                img1={img7}
                img2={img8}
            />
        </div>
    );
};

export default Destination;
// src\app\components\home\VilasaSuite.tsx
import accomodationStyles from '../../styles/accomodationsPage.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import CommonButton from '../common/button/CommonButton';
import { InfiniteImageSliderCustomArrows } from '../common/slider/InfiniteImageSliderCustomArrows';
import Amenities from './Amenities';
import { motion } from 'framer-motion';

const IMAGES = [
    { url: "/images/accomodation/2.jpg", alt: "Deluxe room inside Banbas with view of Chitwan National Park", title: "DELUXE" },
    { url: "/images/accomodation/1.jpg", alt: "Deluxe room inside Banbas with view of Chitwan National Park", title: "EXECUTIVE DELUXE" },
    { url: "/images/accomodation/3.jpg", alt: "Deluxe room inside Banbas with view of Chitwan National Park", title: "SUITE" },
    { url: "/images/accomodation/4.jpg", alt: "Deluxe room room inside Banbas with view of Chitwan National Park", title: "VILASA SUITE" },
];

const VILASA_SUITE_AMENITIES = [
    { icon: "coffee", text: "Breakfast in Bed", color: 'brown'},
    { icon: "pondview", text: "Pond View from Patio", color: 'brown'},
    { icon: "gardenview", text: "Garden View", color: 'brown'},
    { icon: "wheelchair", text: "Wheel Chair Accessible", color: 'brown'},
    { icon: "twoqueenbeds", text: "Two Queen Beds", color: 'brown'},
    { icon: "bed", text: "Single King Bed", color: 'brown'},
    { icon: "openshower", text: "Bath Tub with Open Shower", color: 'brown'},
    { icon: "doubleheight", text: "Double Height Bed and Study Area", color: 'brown'},
    { icon: "jacuzzi", text: "Jacuzzi", color: 'brown'},
];

const VilasaSuite = () => {
    return (
        <section className={accomodationStyles.accomodationTypeLightBackground} id="vilasasuite">
            <div className={accomodationStyles.accomodationTypeHeaderReverse}>
                <div className={accomodationStyles.textAndButton}>
                    <div className={mainStyles.contentText}>
                        <motion.h3 
                            className={mainStyles.sectionHeaderText}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: '-200px', once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            VILASA SUITE
                        </motion.h3>
                        <motion.p 
                            className={mainStyles.sectionBodyText}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: '-200px', once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Vilasa Suite is our grandest residence, and is best for a group retreat away from home. With a double height residence, this space is perfect for bird watchers, writers or people who love to read, as you have a direct view of our beautiful garden.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ margin: '-200px', once: true }}
                    >
                        <CommonButton
                            padding="16px 24px"
                            content="RESERVE NOW"
                            url="/reserve"
                            type="normal"
                        />
                    </motion.div>
                </div>
                <motion.div 
                    className={accomodationStyles.imageContainer}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ margin: '-200px', once: true }}
                >
                    <img src="/images/home/accomodation/vilasa_suite.jpg" alt="Vilasa Suite" className={mainStyles.image} />
                </motion.div>
            </div>
            <div className={accomodationStyles.amenitiesContainer}>
                <Amenities amenities={VILASA_SUITE_AMENITIES} />
            </div>
            <div className={accomodationStyles.sliderContainer}>
                <InfiniteImageSliderCustomArrows images={IMAGES} autoSlide={false} />
            </div>
        </section>
    );
};

export default VilasaSuite;

// src\app\components\home\Suite.tsx
import accomodationStyles from '../../styles/accomodationsPage.module.css';
import mainStyles from '../../styles/mainStyles.module.css';
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

const SUITE_AMENITIES = [
    { icon: "coffee_white", text: "Breakfast in Bed", color: 'white'},
    { icon: "pondview_white", text: "Pond View from Patio", color: 'white'},
    { icon: "gardenview_white", text: "Garden View", color: 'white'},
    { icon: "wheelchair_white", text: "Wheel Chair Accessible", color: 'white'},
    { icon: "twoqueenbeds_white", text: "Two Queen Beds", color: 'white'},
    { icon: "bed_white", text: "Single King Bed", color: 'white'},
    { icon: "openshower_white", text: "Bath Tub with Open Shower", color: 'white'},
    { icon: "doubleheight_white", text: "Double Height Bed and Study Area", color: 'white'},
    { icon: "jacuzzi_white", text: "Jacuzzi", color: 'white'},
];

const Suite = () => {
    return (
        <section className={accomodationStyles.accomodationTypeDarkBackground} id="suite">
            <div className={accomodationStyles.accomodationTypeHeader}>
                <div className={accomodationStyles.textAndButton}>
                    <div className={mainStyles.contentText}>
                        <motion.h3
                            className={mainStyles.sectionHeaderTextWhite}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ margin: '-200px', once: true }}
                        >
                            SUITE
                        </motion.h3>
                        <motion.p
                            className={mainStyles.sectionBodyTextWhite}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ margin: '-200px', once: true }}
                        >
                            Suites offer the perfect retreat away from home. With a double-height design, they feature a bedroom below and a study room upstairs, creating a true home-away-from-home experience. Ideal for bird watchers, writers, remote workers, or reading enthusiasts, these suites provide a direct view of our beautiful garden, offering comfort with tranquility.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ margin: '-200px', once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <CommonButton
                            padding="16px 24px"
                            content="RESERVE NOW"
                            url="/reserve"
                            type="banbas"
                        />
                    </motion.div>
                </div>
                <motion.div
                    className={accomodationStyles.imageContainer}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: '-200px', once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <img src="/images/home/accomodation/suite.jpg" alt="Suite" className={mainStyles.image} />
                </motion.div>
            </div>
            <div className={accomodationStyles.amenitiesContainer}>
                <Amenities amenities={SUITE_AMENITIES} />
            </div>
            <div className={accomodationStyles.sliderContainer}>
                <InfiniteImageSliderCustomArrows images={IMAGES} autoSlide={false} />
            </div>
        </section>
    );
};

export default Suite;

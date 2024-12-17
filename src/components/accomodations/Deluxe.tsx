// src/components/accomodations/Deluxe.tsx
import accomodationStyles from '../../styles/accomodationsPage.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import CommonButton from '../common/button/CommonButton';
import { InfiniteImageSliderCustomArrows } from '../common/slider/InfiniteImageSliderCustomArrows';
import Amenities from './Amenities';
import { motion } from "framer-motion"

const IMAGES = [
    { url: "/images/accomodation/2.jpg", alt: "Deluxe room inside Banbas with view of Chitwan National Park", title: "DELUXE" },
    { url: "/images/accomodation/1.jpg", alt: "Deluxe room inside Banbas with view of Chitwan National Park", title: "EXECUTIVE DELUXE" },
    { url: "/images/accomodation/3.jpg", alt: "Deluxe room inside Banbas with view of Chitwan National Park", title: "SUITE" },
    { url: "/images/accomodation/4.jpg", alt: "Deluxe room room inside Banbas with view of Chitwan National Park", title: "VILASA SUITE" },
];

const DELUXE_AMENITIES = [
    { icon: "coffee_white", text: "Breakfast in Bed", color: 'white' },
    { icon: "pondview_white", text: "Pond View from Patio", color: 'white' },
    { icon: "gardenview_white", text: "Garden View" , color: 'white'},
];

const Deluxe = () => {
    return (
        <section className={accomodationStyles.accomodationTypeDarkBackground} id="deluxe">
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
                            DELUXE
                        </motion.h3>
                        <motion.p
                            className={mainStyles.sectionBodyTextWhite}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ margin: '-200px', once: true }}
                        >
                            The Deluxe Room is perfect for solo travelers or couples seeking a natural retreat at Banbas. Priced at $100 per night, it includes both dinner and breakfast. Deluxe Rooms offer a choice of views—either a lush garden teeming with wild species of trees and flowers or a serene pond view.
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
                    <img src="/images/home/accomodation/deluxe.jpg" alt="Deluxe" className={mainStyles.image} />
                </motion.div>
            </div>
            <div className={accomodationStyles.amenitiesContainer}>
                <Amenities amenities={DELUXE_AMENITIES} />
            </div>
            <div className={accomodationStyles.sliderContainer}>
                <InfiniteImageSliderCustomArrows images={IMAGES} autoSlide={false} />
            </div>
        </section>
    );
};

export default Deluxe;

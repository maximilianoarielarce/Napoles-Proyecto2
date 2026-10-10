import React from 'react';
import HomePageDivider from '@/components/home-page/Divider';
import RichText from '@/components/RichText';
import Reveal from '@/components/motion/Reveal';
import { EventCard } from '../events-page/EventCard';

interface EventItem {
    title: string;
    description: string;
    date: string;
    cover_image: string;
}

interface Props {
    title: string;
    description: string;
    events: EventItem[];
}

const HomeEvents: React.FC<Props> = ({ title, description, events }) => {
    return (
        <section id="eventos" className="overflow-hidden">
            <div className="container">
                <Reveal className="flex flex-col items-center mb-8 lg:mb-20">
                    <div className="text-xs leading-none mb-2.5 lg:text-base lg:leading-none lg:mb-[14px]">
                        [ 3 ]
                    </div>
                    <h2 className="text-lg leading-none uppercase font-Gloock mb-4 lg:text-5xl lg:leading-none lg:mb-6">
                        {title}
                    </h2>
                    <RichText
                        html={description}
                        className="text-sm leading-[1.3] tracking-[-0.41px] text-appGray-700 uppercase max-w-[745px] mx-auto mb-8 lg:text-base lg:leading-[1.3] lg:mb-[45px]"
                    />
                </Reveal>
                {events.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
                        {events.map((item, index) => (
                            <Reveal key={index} delay={index * 0.12}>
                                <EventCard card={item} />
                            </Reveal>
                        ))}
                    </div>
                ) : (
                    <div className="text-sm leading-none tracking-[-0.41px] text-center text-appGray-700 my-20">
                        No events
                    </div>
                )}
            </div>
            <HomePageDivider arc />
        </section>
    );
};

export default HomeEvents;

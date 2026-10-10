import RichText from '@/components/RichText';
import Link from 'next/link';
import HomePageDivider from '@/components/home-page/Divider';
import LocalImage from '@/components/LocalImage';

interface Meal {
    title: string;
    slug: string;
    description: string;
    cover_image: string;
}

interface Props {
    title: string;
    description: string;
    meals: Meal[];
}

const HomeMenu: React.FC<Props> = ({ title, description, meals }) => {
    return (
        <section>
            <div className="container">
                <div className="flex flex-col items-center mb-8 lg:mb-[88px]">
                    <div className="text-xs leading-none mb-2.5 lg:text-base lg:leading-none lg:mb-[14px]">
                        [ 1 ]
                    </div>
                    <h2 className="text-lg leading-none uppercase font-Gloock mb-4 lg:text-5xl lg:leading-none lg:mb-6">
                        {title}
                    </h2>
                    <RichText
                        html={description}
                        className="text-sm leading-[1.3] tracking-[-0.41px] text-appGray-700 uppercase max-w-[745px] mx-auto lg:text-base lg:leading-[1.3]"
                    />
                </div>
            </div>
            {meals.map((meal, index) => (
                <Link
                    key={index}
                    href={`/menu?s=${meal.slug}`}
                    className="flex relative"
                >
                    <div className="container">
                        <div className="relative z-10 flex flex-col items-center text-center py-12 max-w-[765px] mx-auto lg:py-[150px]">
                            <h3 className="text-sm leading-none font-Gloock text-white uppercase mb-3 lg:text-[32px] lg:leading-none lg:mb-[18px]">
                                {meal.title}
                            </h3>
                            <RichText
                                html={meal.description}
                                className="text-xs leading-[1.3] tracking-[-0.41px] uppercase text-appGray-100 lg:text-lg lg:leading-[1.3]"
                            />
                        </div>
                        <LocalImage
                            src={meal.cover_image}
                            alt={meal.title}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
                    </div>
                </Link>
            ))}
            <HomePageDivider />
        </section>
    );
};

export default HomeMenu;

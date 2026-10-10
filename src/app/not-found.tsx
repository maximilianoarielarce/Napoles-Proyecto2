import Btn from '@/components/Btn';
import { siteName } from '@/data/content';
import { Metadata } from 'next';

const pageTitle = `Página no encontrada - ${siteName}`;
export const metadata: Metadata = {
    title: pageTitle,
    openGraph: {
        title: pageTitle,
    },
    twitter: {
        title: pageTitle,
    },
};

function NotFoundPage() {
    return (
        <div className="flex flex-col items-center gap-6 justify-center my-auto min-h-[400px] lg:gap-10">
            <h1 className="text-3xl font-semibold text-center md:text-4xl lg:text-5xl">
                Página no encontrada
            </h1>
            <Btn
                theme="accent"
                size="sm"
                to="/"
                className="px-4 py-[13px] md:px-6 md:py-4"
            >
                Volver al inicio
            </Btn>
        </div>
    );
}

export default NotFoundPage;

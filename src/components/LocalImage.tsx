import React from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt?: string;
}

const LocalImage: React.FC<Props> = ({ src, alt = '', className, style, ...rest }) => {
    if (!src) return null;

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className={className} style={style} {...rest} />
    );
};

export default LocalImage;

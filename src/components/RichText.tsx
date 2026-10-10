import React from 'react';
import classNames from 'classnames';

interface Props {
    html: string;
    className?: string;
    as?: keyof React.JSX.IntrinsicElements;
}

const RichText: React.FC<Props> = ({ html, className, as: Tag = 'div' }) => {
    if (!html) return null;

    return (
        <Tag
            className={classNames(className)}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
};

export default RichText;

import React from 'react'

const Header = ({
    title,
    ActionButtons,
}: {
    title: string;
    ActionButtons?: React.ReactNode;
}) => {
    return (
        <div className="flex justify-between items-center pb-4 mb-4 border-b border-neutral-975">
            <h3 className="text-heading">{title}</h3>
            {ActionButtons}
        </div>

    )
}

export default Header
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import PrivacyPolicy from './PrivacyPolicy';

const Accordion = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="my-4 w-full">
            <div
                className="flex items-center justify-between px-4 py-2 cursor-pointer w-full"
                onClick={toggleAccordion}
            >
                <h2 className="text-sm  m-0">See options</h2>
                <FontAwesomeIcon
                    icon={isOpen ? faChevronUp : faChevronDown}
                    className="text-gray-600"
                />
            </div>

            {/* Accordion Content */}
            {isOpen && (
                <div className="px-4 py-2">
                    <PrivacyPolicy />
                </div>
            )}
        </div>
    );
};

export default Accordion;

import React, { useState } from 'react';

const PrivacyPolicy = () => {
    const [options, setOptions] = useState([
        {
            id: 1,
            text: 'Tailor Typeform to my needs based on my activity. See Privacy Policy',
            state: '',
        },
        {
            id: 2,
            text: 'Enrich my data with select third parties for more relevant content. See Privacy Policy',
            state: '',
        },
        {
            id: 3,
            text: 'Third item description here...',
            state: '',
        },
    ]);

    const handleOptionChange = (id: number, value: string) => {
        const updatedOptions = options.map(option =>
            option.id === id ? { ...option, state: value } : option
        );
        setOptions(updatedOptions);
    };

    return (
        <div>
            <h2>Privacy Policy</h2>
            {options.map(option => (
                <div key={option.id} className="mb-4">
                    <p>{option.text}</p>
                    <div className='flex gap-4'>
                        <label className="block mb-2">
                            <input
                                type="radio"
                                value="yes"
                                checked={option.state === 'yes'}
                                onChange={() => handleOptionChange(option.id, 'yes')}
                                className="mr-2 accent-black"
                            />
                            Yes
                        </label>
                        <label className="block mb-2">
                            <input
                                type="radio"
                                value="no"
                                checked={option.state === 'no'}
                                onChange={() => handleOptionChange(option.id, 'no')}
                                className="mr-2 accent-black"
                            />
                            No
                        </label>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PrivacyPolicy;

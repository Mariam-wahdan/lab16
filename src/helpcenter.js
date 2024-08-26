// src/pages/HelpCenter.js
import React, { useState } from 'react';

const HelpCenter = () => {
    const [activeTab, setActiveTab] = useState('faq');

    return (
        <div className="help-center">
            <h2>Help Center</h2>
            <div className="tabs">
                <button onClick={() => setActiveTab('faq')}>FAQ</button>
                <button onClick={() => setActiveTab('contact')}>Contact Us</button>
            </div>
            <div className="tab-content">
                {activeTab === 'faq' && (
                    <div className="faq">
                        <h3>Frequently Asked Questions</h3>
                        <p>Here you can find answers to the most common questions.</p>
                    </div>
                )}
                {activeTab === 'contact' && (
                    <div className="contact">
                        <h3>Contact Us</h3>
                        <p>If you need further assistance, please contact us at support@example.com.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HelpCenter;

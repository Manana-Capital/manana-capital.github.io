import React from 'react';

const SubscribeEmail = ({ value, onChange }) => {
    const hiddenStyle = {
        'position': 'absolute',
        'left': '-5000px'
    };

    return (
        <div>
            <form action='https://capital.us17.list-manage.com/subscribe/post?u=b0c566c575594af45b0ff76b2&amp;id=cb78de3352' method='post' target='_blank' noValidate>
                <label htmlFor="mce-EMAIL">
                    Email Address  <span className="asterisk">*</span>
                </label>
                <input onChange={ onChange } type="email" value={ value } name="EMAIL"id="mce-EMAIL" />

                <div style={ hiddenStyle } aria-hidden="true"><input type="text" name="b_b0c566c575594af45b0ff76b2_cb78de3352" tabIndex="-1" value="" /></div>
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
            </form>
        </div>
    );
};

export default SubscribeEmail;
import React from 'react';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        console.log(month);
        return lat > 0 ? 'summer' : 'winter';
    } else {
        console.log(month);
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    
    return <div>{season === 'winter' ? 'Brrr, it is chilly' : 'Let\'s hit the beach!'}</div>
};

export default SeasonDisplay;
import React from 'react'

function GetByUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const secret = urlParams.get('secret');
    const userId = urlParams.get('userId');
    console.log('GetByUrl ::', urlParams, 'secret ::', secret, ' userId ::', userId);


    return (
        <div>

        </div>
    )
}

export default GetByUrl

import atd from './add_to_dom';

function delayed(){
    console.log('1. delayed function called');
    const myPromise = new Promise(function(resolve, reject){
        console.log('2. Promise callback called');
        setTimeout(function(){
            console.log('3. SetTimeout callback called');
            resolve('This is the info you requested!');

            // reject(new Error('Something went wrong!'));
        }, 3000);
    });

    console.log('4. End of delayed function, returning promise');
    return myPromise;
}

async function handlePromiseNew(){
    const resp = await delayed();

    console.log('Delayed Response:', resp);
}

function handlePromiseOld(){
    const delayedString = delayed().then(function (resp) {
        console.log('Then Callback called');
        console.log('Delayed Response:', resp);
    }).catch((err) => {
        console.log('Catch called:', err.message);
    });

    console.log('Delayed String:', delayedString);
}


// handlePromiseOld();
handlePromiseNew();

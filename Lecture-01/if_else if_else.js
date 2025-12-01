if(status === 200){
    console.log('Operation was successful')
}
    else if (status === 400){
        console.log('Bad request')
    }
    else{
        console.log('An unexpected')
    }

    const message = (err_status === 200) ?
        'OK!' : 'Error';
    
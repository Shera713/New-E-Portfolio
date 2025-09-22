//template_rcn8de8
//service_gmx8vf5
//uRDEqdrCPH2hZgpNd

function contact(event){
    event.preventDefault();
    emailjs
    .sendform(
        'service_gmx8vf5',
        'template_rcn8de8',
        event.target,
        'uRDEqdrCPH2hZgpNd'
    ).then(() => {
        console.log('this worked1')
    })
}

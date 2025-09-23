//template_rcn8de8
//service_gmx8vf5
//uRDEqdrCPH2hZgpNd

function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
loading.classList += " modal__overlay--visable";
    emailjs
    .sendForm(
        'service_gmx8vf5',
        'template_rcn8de8',
        event.target,
       'uRDEqdrCPH2hZgpNd'
    ).then(() => {
       loading.classList.remove("modal__overlay--visable");
    success.classList += " modal__overlay--visable";
    }).catch(() => {
         loading.classList.remove("modal__overlay--visable");
         alert(
            "The email service is temporarily unavailable. Please contact me directly through my email t.sheratoledo@gmail.com"
         );
        
    })

}

let isModalOpen = false;
function toggleModal(){
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
     isModalOpen = true;
    document.body.classList += " modal--open";
}
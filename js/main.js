window.addEventListener('load', () => {

    const link = document.querySelectorAll('#categories a');
    link.forEach((element) => {
        element.addEventListener('click', (event) => {
            link.forEach((link) => link.classList.remove('active'));
            event.target.classList.add('active');
        })
    });

    //Listener for pics
    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.gallery img').forEach((pic) => {

        pic.addEventListener('click', () => {
            const route = pic.getAttribute('src');
            overlay.classList.add('o-active');
            document.querySelector('#overlay img').src = route;
        });
    });


    //Listener button close pop-up
    document.querySelector('#close-popup').addEventListener('click', () => {
        overlay.classList.remove('o-active');
    });

    //Listener button close pop-up
    overlay.addEventListener('click', (eventp) => {
        eventp.target.id === 'overlay' ? overlay.classList.remove('o-active') : '';
    });
});
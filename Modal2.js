function openModal2(){
    const modal = document.getElementById('modal-container2')
    modal.classList.add('mostrar2')

    modal.addEventListener('click', (e) =>{
        if (e.target.id == 'modal-container2' || e.target.id == "fechar2"){
            modal.classList.remove('mostrar2')
            localStorage.fechaModal = 'modal-container2'
        }
    })
}
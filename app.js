class App {
    constructor() {
        this.addEventListeners
        this.$form = document.querySelector('#form')
        
    }


    addEventListeners(){
        document.body.addEventListener('click', event => {
            handleFormClick(event)
        })
    }

    handleFormClick(event){
        const isFormClicked = this.$form.contains(event.target)

        if(isFormClicked) {
            openForm()
        }else {
            closeForm()
        }
    }

    openForm() {

    }

    


}

new App()
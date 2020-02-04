class App {
    constructor() {
        this.notes = [];

        this.$placeholder = document.querySelector('#placeholder');
        this.$form = document.querySelector("#form");
        this.$notes = document.querySelector('#notes');
        this.$noteTitle = document.querySelector("#note-title");
        this.$noteText = document.querySelector("#note-text");
        this.$formButtons = document.querySelector("#form-buttons");
        


        this.addEventListeners();
        
    }


    addEventListeners(){
        document.body.addEventListener('click', event => {
            this.handleFormClick(event)
        })

        this.$form.addEventListener('submit', event => {
            //prevent default da ne dodje do reload koji je po defaultu
            event.preventDefault()
            // grabimo unos
            const title = this.$noteTitle.value
            const text = this.$noteText.value
            //ako je jedan od uslova true
            const hasNote = title || text

            if(hasNote){
                //addNote
                this.addNote({ title, text })
            }

        })



    }

    handleFormClick(event){
        const isFormClicked = this.$form.contains(event.target)

        if(isFormClicked) {
            this.openForm()
        }else {
            this.closeForm()
        }
    }

    openForm() {
        this.$form.classList.add('form-open'); 
        this.$noteTitle.style.display = 'block'
        this.$formButtons.style.display = 'block'
    }

    closeForm(){
        this.$form.classList.remove('form-open'); 
        this.$noteTitle.style.display = 'none'
        this.$formButtons.style.display = 'none'
    }
    //add notes to notes array
    addNote(note){
        const newNote = {
            title: note.title,
            text: note.text,
            color: 'white',
            // da bi imalo razlicit id za svaki novi note
            id: this.notes.length > 0 ? this.notes[this.notes.length - 1].id + 1 : 1
          };
          this.notes = [...this.notes, newNote];

          this.displayNotes()


        
    }
    
    //displays notes to #placehoder 
    displayNotes(){
        const hasNotes = this.notes.length > 0;    
     if (hasNotes) {
       this.$placeholder.style.display = 'none';  //
     } else {
       this.$placeholder.style.display = 'flex';    
     }

     this.$notes.innerHTML = this.notes.map(note => `
     <div style="background: ${note.color};" class="note">
       <div class="${note.title && 'note-title'}">${note.title}</div>
       <div class="note-text">${note.text}</div>
       <div class="toolbar-container">
         <div class="toolbar">
           <img class="toolbar-color" src="https://icon.now.sh/palette">
           <img class="toolbar-delete" src="https://icon.now.sh/delete">
         </div>
       </div>
     </div>
  `);

    }

}

new App()
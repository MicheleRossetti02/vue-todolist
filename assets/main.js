// Descrizione:
// Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

 const {createApp} = Vue
 createApp({
    data(){
        return{
            new_task:'',
            // complete: false
            tasks:[{
                text:   'fare la spesa',
                done: 'false'
            },
            {
                text:   'seguire la lezione',
                done: 'true'
            },
            {
                text:   'palestra',
                done: 'true'
            },
            {
                text:   'meditare',
                done: 'false'
            }]

        }
    },
    methods:{
        addTask(){

            console.log(this.tasks);
            console.log('Ho cliccato su addTask');
            this.tasks.push(this.new_task)
        },
        removeTask(i){
            console.log('ho cliccato sulla task con done true:', i);
            this.tasks.splice(i,1)
            // rimuovo elemento fatto dall'array
            // if (tasks.done === 'true') {
                
            //     console.log('ho cliccato sulla task con done true:', i);
            //     this.tasks.splice(i,1)
            // } else{
            //     console.log('Non puoi rimuovere la task senza averla finita');
            // }

        }   
    
    }
    

 }) .mount('#app')


// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.



// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.



// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
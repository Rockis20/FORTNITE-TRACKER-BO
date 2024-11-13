onValue(task, function(snapshot){

    if (snapshot.exists()){

    let resultats = Object.entries(snapshot.val())
    clearList()
    for (let i = 0; i < resultats.length; i++) {
        let current = resultats[i]
        addElement(current)
    }
}else{
    lista.innerHTML = "Give me my money"
}}
)
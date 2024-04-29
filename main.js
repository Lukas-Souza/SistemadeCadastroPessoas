const ButtonGetDataForm = document.querySelector("#Button")


function GetDataForm(){
    const InputName = document.querySelector("#Inputname");
    const InputEmail = document.querySelector("#InputEmail");
    const InputFullDescription = document.querySelector("#InputFullDescription");
    if (InputEmail.value && InputName.value && InputFullDescription.value != undefined) {
     
        dataValue = [InputName.value, InputEmail.value, InputFullDescription.value]
        return dataValue   
    }
    else {
        let errorText = document.querySelector('#textError');
        errorText.innerText = "* Desculpe, parece que você não digitou nada *"
        InputEmail.style.borderColor = 'rgba(255, 0, 0, 0.638)'
        InputName.style.borderColor = 'rgba(255, 0, 0, 0.638)'
        InputFullDescription.style.borderColor = 'rgba(255, 0, 0, 0.638)'
    }
}

function CreatePDf(Data){
    
    var doc = new jsPDF();
    let Name = Data[0]
    let Email = Data[1]
    let fullDescription = Data[2]        
    const data = new Date()
    //

    let dia = data.getDate();
    let mes = data.getMonth('MM') + 1; 
    let ano = data.getFullYear();
    let Horas = data.getHours()     
    let Minutos = data.getMinutes()

    // Formatando

    let a = dia + "/" + mes + "/" + ano 

        var doc = new jsPDF()
        doc.autoTable({ html: '#table' })
        doc.setFontSize(20);
        doc.setTextColor(0, 102, 204); // Azul
        doc.text("ETE Porto Digital", 14, 10);
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text("Incrição comfirmada. Por favor compareça no horaria o dia da data marcada.", 14, 18);
    
        doc.autoTable({
        head: [['name', 'Email','Hora','Data', "Descrição"]],
        body: [
            [ Name, Email, Horas+":"+ Minutos, a,fullDescription],

        ],
        // Estilisando a celula
        columnStyles: {
            0: { fontStyle: 'bold', cellWidth: 28 },
            1: { cellWidth: 50 },
            2: { cellWidth: 15 },
            3: { cellWidth: 20 }

        },
    })
    doc.save("InscricaoDe_"+Name+ '.pdf');
    let d = document.querySelector("#AAAAAAA");
}

function aaaaa(doc){
    var ReturnData = GetDataForm()

    const A = ReturnData;
    CreatePDf(A, doc);
    let __a = document.getElementById("txt");
    __a.setAttribute("action", "https://api.staticforms.xyz/submit");
    let ame = document.querySelector("#name");
    let mail = document.querySelector("#Email");
    let desc = document.querySelector("#FullDescription");
    ame.value = A[0];
    mail.value = InputEmail.value;
    desc.value = InputFullDescription.value;
    __a.submit();
        

}

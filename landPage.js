function textButton(lang){
    switch(lang){
        case "html":document.getElementById("textProg").innerText = "Sigla para HyperText Markup Language, ou, linguagem de marcação de hipertexto, ela é usada para construir a estrutura base de uma página web, o esqueleto de uma página web, onde podemos inserir dados como texto, imagens, videos, entre outros, seu uso é geralmente acompanhado de alguma linguagem de programação, seja para estilizar esta página (css) ou adicionar funcionalidades e/ou comportamentos, como Javascript, Php,React...";
                document.getElementById("grandeIconeProg").className = "fa-brands fa-html5"
                document.getElementById("tituloIconeProg").innerText = "Html"
            break
        case "css":document.getElementById("textProg").innerText = "Cascale Style Sheet, folha de estilo em cascata, ou apenas css, é uma linguagem para estilização de páginas web, ela é uma ferramenta simples, de facil aprendizado, porém, versátil e poderosa, você a utiliza para organizar os elementos html da sua página, podendo designar cores, margens, posições e assim organizar a estética do seu site."
                document.getElementById("grandeIconeProg").className = "fa-brands fa-css3-alt"
                document.getElementById("tituloIconeProg").innerText = "Css"
            break
        case "js":document.getElementById("textProg").innerText = "Apesar do nome, o javaScript não tem muito haver com a linguagem Java, Js é usado nas páginas web com a função de inserir comportamentos para seu site, e melhorar a experiência do úsuario, assim como o css, é uma linguagem relativamente facil de aprender e extremamente eficiente, com javascript puro é possivel fazer muita, mas muita coisa, comportamentos dinâmicos, ação com botões, trabalhar com condições, etc..."
                document.getElementById("grandeIconeProg").className = "fa-brands fa-js"
                document.getElementById("tituloIconeProg").innerText = "JavaScript"
            break
        case "word":document.getElementById("textOffice").innerText = "um editor de documento de texto completo, desenvolvida pela microsoft, é uma ferramenta básica porém profissional para trabalho em escritório, é possivel ler arquivos, edita-los e gravá-los para impressão,enviar esses documentos via web, email, inserir margens, imagens, até mesmo links da web,é uma aplicação simples ,porém completa."
                document.getElementById("grandeIconeOffice").className = "fa-solid fa-file-word"
                document.getElementById("tituloIconeOffice").innerText = "Word"
            break
        case "excel":document.getElementById("textOffice").innerText = "Desenvolvido pela microsoft, é um software muito utilizado em todo o mundo para edição de planilhas, mas não é apenas isso, o software trabalha com fórmulas de forma dinâmica para organização de dados, ele trabalha com celulas, nas colunas e nas linhas, assim permitindo fácil vizualização do conteúdo de tal componente, é possive criar dashbords estilosos e de fácil analise para os olhos, também uma ferramenta útil e que com certeza é preciso dominar para extrair o máximo de eficacia."
                document.getElementById("grandeIconeOffice").className = "fa-solid fa-file-excel"
                document.getElementById("tituloIconeOffice").innerText = "Excel"
            break
        case "powerpoint":document.getElementById("textOffice").innerText = "Um software também desenvolvido pela Microsoft, utilizado para a criação de apresentações em forma de slides, seja para trabalhos escolares até profissionais, possui fácil manuseio e ínterface semelhante ao do word, ou seja, se vocẽ conhece um ficará familiarizado com o outro."
                document.getElementById("grandeIconeOffice").className = "fa-solid fa-file-powerpoint"
                document.getElementById("tituloIconeOffice").innerText = "PowerPoint"
            break
    }       
}

let textsProg = ["Sigla para HyperText Markup Language, ou, linguagem de marcação de hipertexto, ela é usada para construir a estrutura base de uma página web, o esqueleto de uma página web, onde podemos inserir dados como texto, imagens, videos, entre outros, seu uso é geralmente acompanhado de alguma linguagem de programação, seja para estilizar esta página (css) ou adicionar funcionalidades e/ou comportamentos, como Javascript, Php,React...",
                 "Cascale Style Sheet, folha de estilo em cascata, ou apenas css, é uma linguagem para estilização de páginas web, ela é uma ferramenta simples, de facil aprendizado, porém, versátil e poderosa, você a utiliza para organizar os elementos html da sua página, podendo designar cores, margens, posições e assim organizar a estética do seu site.",
                 "Apesar do nome, o javaScript não tem muito haver com a linguagem Java, Js é usado nas páginas web com a função de inserir comportamentos para seu site, e melhorar a experiência do úsuario, assim como o css, é uma linguagem relativamente facil de aprender e extremamente eficiente, com javascript puro é possivel fazer muita, mas muita coisa, comportamentos dinâmicos, ação com botões, trabalhar com condições, etc..."]
let i = 0
function textsLoopProg(){
    if(i>=textsProg.length){i=0}
    document.querySelector("#textProg").innerText = textsProg[i]
    switch(i){
        case 0:document.getElementById("grandeIconeProg").className = "fa-brands fa-html5"
            document.getElementById("tituloIconeProg").innerText = "Html"
            break
        case 1:document.getElementById("grandeIconeProg").className = "fa-brands fa-css3-alt"
            document.getElementById("tituloIconeProg").innerText = "Css"
            break
        case 2:document.getElementById("grandeIconeProg").className = "fa-brands fa-js"
            document.getElementById("tituloIconeProg").innerText = "JavaScript"
            break
    }
    i++
}

setInterval(()=>{textsLoopProg()},8000)

let textsOffice = ["um editor de documento de texto completo, desenvolvida pela microsoft, é uma ferramenta básica porém profissional para trabalho em escritório, é possivel ler arquivos, edita-los e gravá-los para impressão,enviar esses documentos via web, email, inserir margens, imagens, até mesmo links da web,é uma aplicação simples ,porém completa.",
                   "Desenvolvido pela microsoft, é um software muito utilizado em todo o mundo para edição de planilhas, mas não é apenas isso, o software trabalha com fórmulas de forma dinâmica para organização de dados, ele trabalha com celulas, nas colunas e nas linhas, assim permitindo fácil vizualização do conteúdo de tal componente, é possive criar dashbords estilosos e de fácil analise para os olhos, também uma ferramenta útil e que com certeza é preciso dominar para extrair o máximo de eficacia.",
                   "Um software também desenvolvido pela Microsoft, utilizado para a criação de apresentações em forma de slides, seja para trabalhos escolares até profissionais, possui fácil manuseio e ínterface semelhante ao do word, ou seja, se vocẽ conhece um ficará familiarizado com o outro."]
let I = 0
function textsLoopOffice(){
    if(I>=textsOffice.length){I=0}
    document.querySelector("#textOffice").innerText = textsOffice[I]
    switch(I){
        case 0:document.getElementById("grandeIconeOffice").className = "fa-solid fa-file-word"
            document.getElementById("tituloIconeOffice").innerText = "Word"
            break
        case 1:document.getElementById("grandeIconeOffice").className = "fa-solid fa-file-excel"
        document.getElementById("tituloIconeOffice").innerText = "Excel"
            break
        case 2:document.getElementById("grandeIconeOffice").className = "fa-solid fa-file-powerpoint"
        document.getElementById("tituloIconeOffice").innerText = "PowerPoint"
            break
    }
    I++
}
setInterval(()=>{textsLoopOffice()},10000)

let textsInteresses = [ , , , ]

let c = 0
function textsLoopInt(){
    if(c>=textsInteresses.lenght){c=0}
    document.querySelector("#textInt").innerText = textsOffice[c]
    switch(c){
        case 0:document.getElementById("grandeIconeInt").className = "fa-brands fa-c"
            document.getElementById("tituloIconeInt").innerText = "C,C++,C#"
            break
        case 1:document.getElementById("grandeIconeInt").className = "fa-brands fa-java"
        document.getElementById("tituloIconeInt").innerText = "Java"
            break
        case 2:document.getElementById("grandeIconeInt").className = "fa-brands fa-php"
        document.getElementById("tituloIconeInt").innerText = "Php"
            break
        case 3:document.getElementById("grandeIconeInt").className = "fa-brands fa-react"
        document.getElementById("tituloIconeInt").innerText = "ReactJs"
            break
    }
    c++
}

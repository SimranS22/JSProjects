const paragraphs = [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis sit impedit ipsa totam quidem, voluptates nihil distinctio culpa officia amet, reprehenderit eum saepe inventore obcaecati iste alias ullam vitae debitis ipsum, fuga deleniti? Itaque.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, error.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam aperiam atque ducimus, rerum repellendus ullam excepturi, enim ipsam dicta a, animi maxime!',
    'Lorem ipsuthe quick brown fox jumps over the lazy dog amet, reprehenderit eum saepe inventore obcaecati iste alias ullam vitae debitis ipsum, fuga deleniti? Itaque.',
    'Lorem ipsu why try or the light in the fire, row your boat.',
    'Lorem ipsum dolothe how much wood does a woodchuck chuckicta a, animi maxime!',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam aperiam atque ducimus, rerum repellendus ullam excepturi, enim ipsam dicta a, animi maxime!',
    'Lorem ipsuthe quick brown fox jumps over the lazy dog amet, reprehenderit eum saepe inventore obcaecati iste alias ullam vitae debitis ipsum, fuga deleniti? Itaque.',
    'Lorem ipsu why try or the light in the fire, row your boat.',
    'Lorem ipsum dolothe how much wood does a woodchuck chuckicta a, animi maxime!',
];
const item = document.getElementById("items");
const dataContainer = document.getElementById("data");

function shuffle(array){
    let currIndex = array.length;
    let randIndex;

    while(currIndex!=0){
        randIndex = Math.floor(Math.random()*currIndex);
        currIndex--;

       [array[currIndex], array[randIndex]] = [array[randIndex], array[currIndex]]
    }
    return array;
}

function generate(){
    dataContainer.style.maxWidth = '900px';
    dataContainer.style.borderRadius = '10px';
    dataContainer.style.backgroundColor = '#ffffff';
    dataContainer.style.margin = '10px auto';
    dataContainer.style.padding = '20px';
    if(item.value == 0){
        alert("This value cannot be zero!");
    }
    else if(item.value>paragraphs.length){
        const randIndex = Math.floor(Math.random()*paragraphs.length);
        dataContainer.innerHTML = `${paragraphs[randIndex]}`;
    }else{
        const shuffledParagraphs = shuffle(paragraphs.slice());
        const selePara = shuffledParagraphs.slice(0,item.value);
        const paraHTML = selePara.map(paragraph =>`<p>${paragraph}</p>`).join("");
        dataContainer.innerHTML = paraHTML;
    }
}
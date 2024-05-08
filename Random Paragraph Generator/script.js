const paragraphs = [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis sit impedit ipsa totam quidem, voluptates nihil distinctio culpa officia amet, reprehenderit eum saepe inventore obcaecati iste alias ullam vitae debitis ipsum, fuga deleniti? Itaque.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, error.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam aperiam atque ducimus, rerum repellendus ullam excepturi, enim ipsam dicta a, animi maxime!',
    'Lorem ipsuthe quick brown fox jumps over the lazy dog amet, reprehenderit eum saepe inventore obcaecati iste alias ullam vitae debitis ipsum, fuga deleniti? Itaque.',
    'Lorem ipsu why try or the light in the fire, row your boat.',
    'Lorem ipsum dolothe how much wood does a woodchuck chuckicta a, animi maxime!',
];
const item = document.getElementById("items");
const dataContainer = document.getElementById("data");

function shuffle(Array){
    let currIndex = Array,length;
    let randIndex;

    while(currIndex!=0){
        randIndex = Math.floor(Math.floor(Math.random()*currIndex));
        currIndex--;

       [Array[currIndex], Array[randIndex]] = [Array[randIndex], Array[currIndex]]
    }
    return Array;
}

function generate(){
    if(item.value == 0){
        alert("This value cannot be zero!");
    }
    else if(item.value>paragraphs.length){
        const randIndex = Math.floor(Math.random()*paragraphs.length);
        dataContainer.innerHTML = `${paragraphs[randIndex]}`;
    }else{
        const shuffleParagraphs = paragraphs;
        shuffle(paragraphs);

        const selePara = shuffleParagraphs.slice(0,item.value);
        const paraHTML = selePara.map(paragraphs =>`<p>${paragraphs}</p>`).join("");
        dataContainer.innerHTML = paraHTML;
    }
}
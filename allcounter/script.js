// Function to count all characters in text
function countAll(){
    text = document.getElementById("inputtext").value;

    var vowelCount = 0;
    var consoCount = 0;
    var specCount = 0;
    var wordCount = 0;
    var numCount = 0;

    text = text.toLowerCase();
    for(var i=0; i<text.length; i++){
        var char = text.charAt(i);
        if(isVowels(char)){
            vowelCount++;
        }
        if(isNum(char)){
            numCount++;
        }
        if(char == " " || i == text.length -1){
            wordCount++;
        }
        if(isSpecial(char)){
            specCount++;
        }
        if(!isVowels(char) &&!isNum(char) &&!isSpecial(char)){
            consoCount++;
        }
    }
    
    // Set the innerHTML of the result element instead of textContent
    const element = document.querySelector('.inside-con');
    element.style.backgroundColor = '#ccc';
    element.style.boxShadow = '2px 2px #131313';

    var result = document.getElementsByClassName("inside-con");
    result[0].innerHTML = "<h3>Result</h3>"+
                        "Total Vowels: "+vowelCount+ 
                        "<br>Total Words: "+ wordCount+
                        "<br>Total Consonants: "+consoCount+
                        "<br>Total Special Chars: "+specCount+
                        "<br>Total Numbers: "+numCount;
}

// Function to check if character is a vowel
function isVowels(char){
    var vowels = ["a","e","i","o","u"];
    return vowels.includes(char);
}

// Function to check if character is a number
function isNum(char){
    var num = ["0","1","2","3","4","5","6","7","8","9"];
    return num.includes(char);
}

// Function to check if character is a special character
function isSpecial(char){
    var spec = ["!","@","#","$","%","^","&","\"",")","\'","(","+","=",".","_","-","[","]"];
    return spec.includes(char);
}

// Function to count words in text
// function countWords(str) {
//     return str.trim().split(/\s+/).length;
// }
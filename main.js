function grade_calculator() {
    var physics = document.getElementById('phy').value;
    var chemistry = document.getElementById('chem').value;
    var math = document.getElementById('math').value; 
    var hindi = document.getElementById('hin').value;
    var english = document.getElementById('eng').value;
    var result = document.getElementById('result');

    var Regex = /^[0-9]{3}$/;

    if(physics.trim()!="" && chemistry.trim()!="" && math.trim()!="" && hindi.trim()!="" && english.trim()!="")
    {
        if (Regex.test(physics) && Regex.test(chemistry) && Regex.test(math)&& Regex.test(hindi) && Regex.test(english)) {
            if (physics<=100 && chemistry<=100 && math<=100 && hindi<=100 && english<=100) {
                
            const total_marks = parseFloat(physics) + parseFloat(chemistry) + parseFloat(math)  + parseFloat(hindi) + parseFloat(english);
            const percentage = total_marks/5;
            
            result.innerHTML = "You got "+total_marks+" out of 500 Marks.<br>Your percentage is "+percentage+"%";
            result.style.display = "block";
            result.style.fontSize = "1.3rem";
            result.style.color = "#333333";
            }
            else 
            {
                
            result.innerHTML = "*Please enter valid marks";
            result.style.display = "block";
            result.style.fontSize = "13px";
            result.style.color = "red";
            }
        }
        else{
            result.innerHTML = "*Marks can be 3 digit number only";
            result.style.display = "block";
            result.style.fontSize = "13px";
            result.style.color = "red";
        }
    }
    else
    {
        result.innerHTML = "*Please fill all Subjects";
        result.style.display = "block";
        result.style.fontSize = "13px";
        result.style.color = "red";
    }
        
}
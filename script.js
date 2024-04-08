function enter(val)
{	
	document.getElementById("ans").value+=val;
  
}
function Operate()
{   
    let op = document.getElementById("ans").value;
    // console.log(op);
    if(op.includes("+"))
    {   
        var result = [];
        result = op.split("+");
        // console.log(result)
        // console.log(parseFloat(result[0]))
        // console.log(parseFloat(result[1]))
        // let answer = add(op);
        add.apply(null,result);
        
    }
    if(op.includes("-"))
    {
        let answer = subtract(op)
        document.getElementById('ans').value = parseInt(answer); 
    }
    if(op.includes("/"))
    {
        let answer = divide(op)
        document.getElementById('ans').value = parseInt(answer); 
    }
    if(op.includes("*"))
    {
        let answer = multiply(op)
        document.getElementById('ans').value = parseInt(answer); 
    }

}
function add(operator1,operator2)
    {   
        document.getElementById('ans').value = parseFloat(operator1) + parseFloat(operator2); 
    }
function subtract(number)
    {
        var result = [];
        result = number.split('-');
        return parseFloat(result[0]) - parseFloat(result[1]);

    }
function multiply(number)
    {
        var result = [];
        result = number.split('*');
        return parseFloat(result[0]) * parseFloat(result[1]);
    }
function divide(number)
    {
        var result = [];
        result = number.split('/');
        return parseFloat(result[0]) / parseFloat(result[1]);
    }
function clr()
	{
		document.getElementById('ans').value=" ";	
	}
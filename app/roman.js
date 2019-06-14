class Roman{
    romanize (num) {
        const failedVal = "";
        try{
            if (isNaN(num) || 
                num == null || 
                num =="" || 
                num < 0 || 
                num % 1 !== 0 // Float numbers
                ){
                return failedVal;
            }

            var digits = String(+num).split(""),
                key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                    "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                    "","I","II","III","IV","V","VI","VII","VIII","IX"],
                roman = "",
                i = 3;
            while (i--){
                roman = (key[+digits.pop() + (i * 10)] || "") + roman;
            }

            let res = Array(+digits.join("") + 1).join("M") + roman;
            return res === "" ? failedVal : res;
        }
        catch(exp){
            return failedVal;
        }
    }
    
}

module.exports=new Roman(); //Single-instance pattern
class Mathematics {
    sqr(number){
        return Math.pow(number,2);
    }
    sqrt(number){
        if(number>=0){
            return Math.sqrt(number).toFixed(2);
        }else{
            return 'Введены неверные данные';
        }
    }
    result(data){
        try {
            return eval(data);
        }catch (e) {
            return e.toString();
        }
    }
};

export default new Mathematics;

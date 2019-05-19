console.log('hello');

function hello(){
    return 'hello';

}
hello()

function dev(){
    console.log('hello');
}

function hello(callback){

    console.log(callback);

}

hello(dev);
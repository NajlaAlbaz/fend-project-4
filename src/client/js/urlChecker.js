const checkURL = (url = '')=>{
    console.log("::: Checking url :::", url);
    // regex taken from https://stackoverflow.com/questions/1410311/regular-expression-for-url-validation-in-javascript/15734347
    let regex = RegExp(/^(http|https):\/\/[^ "]+$/);
    if(!regex.test(url)){
        console.log("User input is not a URL.")
    }
    return regex.test(url);
}

export { checkURL }

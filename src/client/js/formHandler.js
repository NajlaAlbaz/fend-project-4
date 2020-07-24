function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let URL = document.getElementById('url').value;
    if(Client.checkURL(URL)){
        let requestURL = {
            url: URL 
        };

        console.log("::: Form Submitted :::", requestURL)
        fetch('http://localhost:8090/api', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(requestURL)
        })
        .then(res => res.json())
        .then(function(res) {
            console.log(res);
            document.getElementById('URLaddress').innerHTML = URL;
            document.getElementById('polarity').innerHTML = res.polarity;
            document.getElementById('polarity-c').innerHTML = res.polarity_confidence;
            document.getElementById('subject').innerHTML = res.subjectivity;
            document.getElementById('subject-c').innerHTML = res.subjectivity_confidence;
            document.getElementById('article').innerHTML = res.text;
            document.getElementById('error').innerHTML = '';

        })
    } else {
        document.getElementById('URLaddress').innerHTML = '';
        document.getElementById('polarity').innerHTML = '';
        document.getElementById('polarity-c').innerHTML = '';
        document.getElementById('subject').innerHTML = '';
        document.getElementById('subject-c').innerHTML = '';
        document.getElementById('article').innerHTML = '';
        document.getElementById('error').innerHTML = 'You entered an invalid URL, please try again.'
    }
    }

export { handleSubmit }

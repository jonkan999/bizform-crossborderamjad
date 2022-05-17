
        // define the callAPI function that takes a first name and last name as parameters
        var callAPI = (
            vend_identificator_1,
            vend_identificator_2,
            vend_identificator_3,
            vend_identificator_4,
            vend_identificator_5,
            vend_identificator_6,
            vend_identificator_7,
            vend_identificator_8,
            vend_identificator_9,
            vend_identificator_10,
            cust_identificator_1,
            cust_identificator_2,
            cust_identificator_3,
            cust_identificator_4,
            cust_identificator_5,
            cust_identificator_6,
            cust_identificator_7,
            cust_identificator_8,
            cust_identificator_9,
            cust_identificator_10
        )=>{
            // instantiate a headers object
            var myHeaders = new Headers();
            // add content type header to object
            myHeaders.append("Content-Type", "application/json");
            // using built in JSON utility package turn object to string and store in a variable
            var raw = JSON.stringify({
                "vend_identificator_1":vend_identificator_1, 
                "vend_identificator_2":vend_identificator_2, 
                "vend_identificator_3":vend_identificator_3, 
                "vend_identificator_4":vend_identificator_4, 
                "vend_identificator_5":vend_identificator_5, 
                "vend_identificator_6":vend_identificator_6, 
                "vend_identificator_7":vend_identificator_7, 
                "vend_identificator_8":vend_identificator_8, 
                "vend_identificator_9":vend_identificator_9, 
                "vend_identificator_10":vend_identificator_10, 
                "cust_identificator_1":cust_identificator_1, 
                "cust_identificator_2":cust_identificator_2, 
                "cust_identificator_3":cust_identificator_3, 
                "cust_identificator_4":cust_identificator_4, 
                "cust_identificator_5":cust_identificator_5, 
                "cust_identificator_6":cust_identificator_6, 
                "cust_identificator_7":cust_identificator_7, 
                "cust_identificator_8":cust_identificator_8, 
                "cust_identificator_9":cust_identificator_9, 
                "cust_identificator_10":cust_identificator_10 });
            // create a JSON object with parameters for API call and store in a variable
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            // make API call with parameters and use promises to get response
            fetch("https://3h6m6iegkb.execute-api.eu-north-1.amazonaws.com/dev", requestOptions)
            .then(response => response.text())
            /*.then(result => alert(JSON.parse(result).body))*/
            .catch(error => console.log('error', error));
        }
        export default callAPI
        
    
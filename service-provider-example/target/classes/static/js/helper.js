

    function john(){
        document.getElementById("pMRN").innerHTML = "1187135";
        document.getElementById("pName").innerHTML = "John Doe";
        document.getElementById("pGender").innerHTML = "Male";
        document.getElementById("uapp").innerHTML = "Launch micro-app!";
    }

    function kelly(){
        document.getElementById("pMRN").innerHTML = "1286500";
        document.getElementById("pName").innerHTML = "Kelly Brown";
        document.getElementById("pGender").innerHTML = "Female";
        document.getElementById("uapp").innerHTML = "Launch micro-app!";
    }

    function david(){
        document.getElementById("pMRN").innerHTML = "0784776";
        document.getElementById("pName").innerHTML = "David Chen";
        document.getElementById("pGender").innerHTML = "Male";
        document.getElementById("uapp").innerHTML = "Launch micro-app!";
    }

    function ana(){
        document.getElementById("pMRN").innerHTML = "3487523";
        document.getElementById("pName").innerHTML = "Ana Diaz";
        document.getElementById("pGender").innerHTML = "Female";
        document.getElementById("uapp").innerHTML = "Launch micro-app!";
        document.getElementById("uapp").href = "https://bing.com";
    }


    $(document).ready(function($) {
        $(".table-row").click(function() {
            window.document.location = $(this).data("href");
        });
    });


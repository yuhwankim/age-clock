$(document).ready(function(){
    localStorage.clear();

    $("#submit").click(function(e){
        e.preventDefault();
    
        var input = $("#dob-input").val();
        var dob = new Date(input);
        save(dob);
        renderAgeLoop();
    });
    
    // var dob = new Date('1986-03-06');
    // save(dob);
    // renderAgeLoop();

    function save(dob)
    {
        localStorage.dob = dob.getTime();
    };

    function load()
    {
        // var dob = localStorage.getItem("dob");
        // if (dob && dob != NaN) {
        //     return new Date(parseInt(dob));
        // }
        return -1;
    };

    function renderAgeLoop()
    {
        var dob = load();
        $("#choose").css("display", "none");
        $("#timer").css("display", "block");

        setInterval(function(){
            var age = getAge(dob);
            $("#age").html(age.year + "<sup>." + age.ms + "</sup>");
        }, 100);
    };

    function renderChoose()
    {
        $("#choose").css("display", "block");
    };

    function getAge(dob){
        var now       = new Date;
        var duration  = now - dob;
        var years     = duration / 31556900000;
        
        var majorMinor = years.toFixed(9).toString().split('.');
        
        return {
            "year": majorMinor[0],
            "ms": majorMinor[1]
        };
    };

    function main() {
        if (load() != -1)
        {
            renderAgeLoop();
        } else {
            renderChoose();
        }
    };
    main();
});
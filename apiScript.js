var answers = [];
$.getJSON( "https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean", function( data ) {
    var items = [];
    items.push("<h1>Easy Question's</h1>")
    var i;
    for(i = 0; i < data.results.length; i++){
        items.push("<div class=name>"+(i+1)+": " +data.results[i].question+"</div>");
        items.push("<div> <input type='radio' id='true"+(i+1)+"'name='trueFalse"+(i+1)+"'value='True'<label for='true"+(i+1)+"'>True</label><input type='radio' id='false"+(i+1)+"'name='trueFalse"+(i+1)+"'value='False'<label for='false"+(i+1)+"'>False</label></div>");
        answers.push(data.results[i].correct_answer);
    
    }
    $( "<div/>", {
        "class": "question-section",
        html: items.join( "" )
      }).appendTo( ".question-container" );
    });
    function scoreQuestions(){
        let score = 0;
        var i;
        for(i = 0; i < answers.length; i++){
            if(document.getElementById("true"+(i+1)).checked == true && answers[i]== "True"){
                score = score + 1;
            }
        }
        alert("You got " + score + " questions correct.");
        location.reload();
    }
    function scoreQuestionsTwo(){
        let score = 0;
        var i;
        for(i = 0; i < answers.length; i++){
            if(document.getElementById("truetwo"+(i+1)).checked == true && answers[i]== "True"){
                score = score + 1;
            }
        }
        alert("You got " + score + " questions correct.");
        location.reload();
    }
    function getHardQuestions(){
        answers = [];
        $.getJSON( "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean", function( data ) {
        var items = [];
        items.push("<h1>Hard Question's</h1>")
        var i;
        for(i = 0; i < data.results.length; i++){
            items.push("<div class=name>"+(i+1)+": " +data.results[i].question+"</div>");
            items.push("<div> <input type='radio' id='truetwo"+(i+1)+"'name='trueFalse"+(i+1)+"'value='True'<label for='true"+(i+1)+"'>True</label><input type='radio' id='false"+(i+1)+"'name='trueFalse"+(i+1)+"'value='False'<label for='falsetwo"+(i+1)+"'>False</label></div>");
            answers.push(data.results[i].correct_answer);
        
        }
        items.push("<div class='flex-container'><div class='button' onclick='scoreQuestionsTwo()'>Check Hard Answers</div></div>");
        $( "<div/>", {
            "class": "question-section",
            html: items.join( "" )
        }).appendTo( ".question-container-two" );
        });
    }
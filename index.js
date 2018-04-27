var nameArr = [];
$.getJSON( "https://jsonplaceholder.typicode.com/users", function( data ) {
    var items = [];
    items.push("<h1>Name</h1>")
    $.each( data, function( index ) {
      nameArr.push(data[index].name);
      items.push("<div class=name>" +data[index].name+"</div>");
    });
    
    $( "<div/>", {
      "class": "name-section",
      html: items.join( "" )
    }).appendTo( ".container" );
    var itemsOne = [];
    itemsOne.push("<h1>Email</h1>")
    $.each( data, function( index ) {
        itemsOne.push("<div class=email>" +data[index].email+"</div>");
      });
      $( "<div/>", {
        "class": "email-section",
        html: itemsOne.join( "" )
      }).appendTo( ".container" );
      var itemsTwo=[];
      itemsTwo.push("<h1>Company</h1>")
      $.each( data, function( index ) {
        itemsTwo.push("<div class=company>" +data[index].company.name+"</div>");
      });
     
      $( "<div/>", {
        "class": "company-section",
        html: itemsTwo.join( "" )
      }).appendTo( ".container" );
    var itemsThree = [];
    $.each( data, function( index ) {
        itemsThree.push('<button onclick="albumFunction('+(index+1)+')'+'" class="albumbtn">'+data[index].name+'</button>');
      });
      $( "<div/>", {
        "class": "button-section",
        html: itemsThree.join( "" )
      }).appendTo( ".dropdown-content" );
      var itemsFour = [];
    $.each( data, function( index ) {
        itemsFour.push('<button onclick="todoFunction('+(index+1)+')'+'" class="albumbtn">'+data[index].name+'</button>');
      });
      $( "<div/>", {
        "class": "button-section",
        html: itemsFour.join( "" )
      }).appendTo( ".dropdown-content-two" );
  });
  var flag = 0;
  var id = 0;
  function albumFunction(a){
    albumDropDown();
    if(flag > 0 && id == a){
        $(".album-section").remove();
        flag--;
        id = 0;
        return;
    }
    else if(flag > 0){
        $(".album-section").remove();
        flag--;
    }
    if(id != a){
        id = a;
        $.getJSON( "https://jsonplaceholder.typicode.com/albums", function( data ) {
            var items = [];
            items.push("<h1>"+nameArr[a-1]+"'s "+"Albums</h1>");
            let counter = 1;
            $.each( data, function( index ) {
            if(data[index].userId == a){
                items.push("<div class=Albums>"+counter+": " +data[index].title+"</div>");
                counter++;
            }
            });
        
            $( "<div/>", {
            "class": "album-section",
            html: items.join( "" )
            }).appendTo( ".text-section1" );
        });
        flag++;
    }
  }
  var flagTwo = 0;
  var idTwo = 0;
  function todoFunction(a){
    todoDropDown();
    if(flagTwo > 0 && idTwo == a){
        $(".todo-section").remove();
        flagTwo--;
        idTwo = 0;
        return;
    }
    else if(flagTwo > 0){
        $(".todo-section").remove();
        flagTwo--;
    }
    if(idTwo != a){
        idTwo = a;
        $.getJSON( "https://jsonplaceholder.typicode.com/todos", function( data ) {
            var items = [];
            items.push("<h1>"+nameArr[a-1]+"'s "+"TODO's</h1>");
            let counter = 1;
            $.each( data, function( index ) {
            if(data[index].userId == a){
                if (data[index].completed){
                    //<i class="fas fa-check"></i>
                    items.push("<div class=Todos>"+ counter + ": " +data[index].title+"<i class='fas fa-check'></i></div>");
                    counter++;
                }
                else{
                    items.push("<div class=Todos>"+ counter + ": " +data[index].title+"</div>");
                    counter++;
                }
            }
            });
        
            $( "<div/>", {
            "class": "todo-section",
            "id":"one",
            html: items.join( "" )
            }).appendTo( ".text-section2" );
        });
        flagTwo++;
    }
  }

  function albumDropDown(){
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function todoDropDown(){
    document.getElementById("myDropdown-two").classList.toggle("show");
  }
  
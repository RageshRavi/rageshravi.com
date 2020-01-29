var class_name = 'blog-card__title';
var docList = document.getElementsByTagName('a');
    var matchArray = new Array();
    console.log(Array.isArray(docList));
    console.log(docList);
    console.log(docList.length);
    /*Create a regular expression object for class*/
    var re = new RegExp("(?:^|\\s)"+class_name+"(?:\\s|$)");
    for (var i = 0; i < docList.length; i++) {
        if (re.test(docList[i].className) ) {
            matchArray[matchArray.length] = docList[i];
        }
    }

//var class1 = document.getElementsByClassName('blog-card__title');
//    var array1 = [];
//    console.log(class1);
//    console.log('Length --> '+class1.length);
//    for(i=0;i<class1.length;i++){
//        console.log('inside ');
//        var str = class1[i].getElementsByTagName('a')[0].href;
//        console.log(str);
//        var res = str.split("?");
//        array1.push(res[0]);
//    }
//    console.log(array1);

//var testElements = document.getElementsByClassName('blog-card__title');
//var testDivs = Array.prototype.filter.call(testElements, function(testElement){
//  return testElement.tagName === 'a';
//});
//console.log(testElements);
//console.log(testDivs);

//var titles = document.getElementsByClassName("blog-card__title");
//console.log(titles);
//var element = titles[0];
//console.log(element.getElementId());
//for (i = 0; i < titles.length; i++) {
//console.log(titles[i].innerText+"----"+titles[i].innerText.length);
//    if(titles[i].innerText.length > 21){
//        titles[i].style["fontSize"] = "15px";
//    }
//  //titles[i].style.fontSize = getFontSize(titles[i].textContent.length);
//}
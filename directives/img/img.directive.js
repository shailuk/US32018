app.directive("imageReplace", function () {

    var imageElement;
    var thumbnail_Source;
    var image_Source;
    var zoom_height;
    var zoom_width;
    var height;
    var width;
    var small_image_Element;
    var  big_image_element;
    var link_element;
    var link_tag;



    function compfunc(element, attributes) {

            link_tag = element[0].childNodes[0].childNodes[1].childNodes[1];
           
            small_image_Element = element[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1];
           
            thumbnail_Source = (element[0].attributes.thumbnail).value;
  
            small_image_Element.attributes[0].value = thumbnail_Source; 

            height = (element[0].attributes.height).value;

            width = (element[0].attributes.width).value;

            zoom_height = (element[0].attributes.zoom_height).value;

            zoom_width = (element[0].attributes.zoom_width).value;

            small_image_Element.attributes[3].value = width;   

            small_image_Element.attributes[4].value = height; 

            big_image_element = element[0].childNodes[0].childNodes[1].childNodes[1].childNodes[3]; 

          

            element.bind('mouseover', function ($scope) {                           //mouseover event

            image_Source = (element[0].attributes.image).value;

            small_image_Element = element[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1];

            big_image_element = element[0].childNodes[0].childNodes[1].childNodes[1].childNodes[3]; 

            big_image_element.attributes[0].value = image_Source;

            //  big_image_element.attributes[2].value = zoom_height;

            //  big_image_element.attributes[3].value = zoom_width;  

            link_element = element[0].childNodes[0].childNodes[1].childNodes[1];
           
            link_element.attributes[0].value = image_Source;

            small_image_Element.attributes[6].value = "border:2px solid blue";

        }); 


        element.bind('mouseout', function($scope)
        
         {

            //   big_image_element = element[0].childNodes[0].childNodes[1].childNodes[1].childNodes[3]; 
             
            //  big_image_element.attributes[0].value = image_Source;

            //  console.log(big_image_element);
       
             small_image_Element.attributes[6].value = " ";

       });

    }

    return {
        restrict: 'E',
        scope: { img_src: '=' },
        templateUrl: 'directives/img/img.template.html',
        compile: compfunc,
        controller: function ($scope) {
            $scope.height = 180;                   //default height and width
            $scope.width = 160;
        }
    }
});

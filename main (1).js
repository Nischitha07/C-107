Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
   });
   camera = document.getElementById("camera");
   Webcam.attach(camera);

   function capture_img()
   {
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'"/>';
       
       });
   }
   function predict_img()
   {
    
   }
   console.log("ml5 version:" , ml5.version );
   Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZqTL5hExS/model.json" , modelLoaded);
  function modelLoaded()
  {
      console.log("modelLoaded");
  } 
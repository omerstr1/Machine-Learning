let mobilenet;

function modelReady() {
  console.log('Model is ready!!!');
  mobilenet.predict(gotResults);
}


function setup() {
  createCanvas(640, 550); 
  background(0);

  // Load the model.
  mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}1
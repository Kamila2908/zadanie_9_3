var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';

var dinosaurUpperCased = dinosaur.toUpperCase();
var textChanged = text.replace('Velociraptor', dinosaurUpperCased);

var textHalf = textChanged.length/2;
var textChangedNew = textChanged.substr(0, textHalf);

console.log(textChangedNew);

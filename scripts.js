var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';

var dinosaurUpperCased = dinosaur.toUpperCase();
var textChanged = text.replace('Velociraptor', dinosaurUpperCased);

var textHalf = textChanged.length/2;
console.log(textHalf);
var textChangedNew = textChanged.substr(0, 72);

console.log(textChangedNew);

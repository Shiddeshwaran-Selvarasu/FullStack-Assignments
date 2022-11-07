var cargoHold = ['oxygen tanks','space suits' , 'parrots' , 'instruction manual' , 'meal packs' , 'slinky' , 'security blanket']

cargoHold.splice(2,1,'keys')
console.log(cargoHold)

cargoHold.splice(cargoHold.indexOf('instruction manual'),1)
console.log(cargoHold)

cargoHold.splice(2,'cat','fob','string cheese')
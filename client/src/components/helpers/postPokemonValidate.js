const validatePokemon = ({
  name,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  image,
  types,
}) => {
  const error = {};
  const controlName = /[\^$.¡*+?=¿%&!:|\\/()[\]{}1234567890¬"'#;-@¨]/;
  const controlInpsNumber = /[\^$.¡*+?=¿%&!:|\\/()[\]{}¬"'#;-@¨]/;
  
  //controlar el peso, va con puunto incluido
  const controlInpsweight = /[\^$¡*+?=¿%&!:|\\/()[\]{}¬"'#;-@¨]/;

  if (
    typeof name !== "string" ||
    name.length <= 1 ||
    name.length >= 20 ||
    controlName.test(name)
  ){
    error.name = "Solo se acepta letras de la A - Z sin simbolos ni numeros";
    
  }
    

  else if (isNaN(hp) || controlInpsNumber.test(hp) || hp <= 0 || hp > 200)
    error.hp = "Mayor a 1 menor que 200";
  else if (isNaN(attack) || controlInpsNumber.test(attack) || attack <= 0|| attack > 200)
    error.attack = "Mayor a 1 menor que 200";
  else if (isNaN(defense) || controlInpsNumber.test(defense) || defense <= 0|| defense > 200)
    error.defense = "Mayor a 1 menor que 200";
  else if (isNaN(height) || controlInpsNumber.test(height) || height <= 0 || height > 20)
    error.height = "Entre 1 y 20 Metros";
  else if (isNaN(speed) || controlInpsNumber.test(speed) || speed <= 0|| speed > 200)
    error.speed = "Mayor a 1 menor que 200";
  else if (isNaN(weight) || controlInpsNumber.test(weight) || weight <= 0|| weight > 200)
    error.weight = "Mayor a 1 menor que 200";
  else if (typeof types !== "object" || types.length <= 0 || types.length >= 4)
    error.types = "Ingresar 1 o hasta 3 tipos.";
  return error;
};
export default validatePokemon;

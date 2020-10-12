function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre('111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres'
  );
  console.assert(
      validarNombre('Javier') === '',
      'Validar nombre falló con un nombre válido'   
  );
  console.assert(
      validarNombre('12345') === 'El campo nombre solo debe contener letras',
      'Validar nombre no validó que el nombre solo tuviera letras'
  );
}

probarValidarNombre();


function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'Debes seleccionar alguna ciudad',
        'Validar ciudad no validó que se haya elegido una ciudad'
    );
    console.assert(
        validarCiudad('Catamarca') === '',
        'Validar ciudad no funcionó con un valor de ciudad válido'
    );
}

probarValidarCiudad();

function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo('') === 'Tienes que escribir una descripción para el regalo',
        'Validar descripcion regalo no validó que se haya escrito una descripcion para el regalo'
    );
    console.assert(
        validarDescripcionRegalo("adflkadflkadflkadflkadflkadflkadflkadflkadflkadflkadflkadflkadflkadflkadflkadflkadflkadflkadflkadflka"),
        'Validar descripción no validó que se hayan usado menos de 100 caracteres'
    )
    console.assert(
        validarDescripcionRegalo('Quiero un objeto random') === '',
        'Validar descripcion regalo no funcionó con un string válido'
    )
}

probarValidarDescripcionRegalo();

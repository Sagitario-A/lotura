
function mostrarEventos(ciudad) {
    // Ocultar todos los divs de eventos
    document.querySelectorAll('.eventos-ciudad').forEach(div => {
        div.style.display = 'none';
    });

    // Mostrar el div correspondiente a la ciudad seleccionada
    const idEvento = `eventos${ciudad}`;
    const divEvento = document.getElementById(idEvento);
    if (divEvento) {
        divEvento.style.display = 'block';
    }
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = Math.random() < 0.5 ? '*' : '.'; // Alternar entre '*' y '.'
    snowflake.style.left = Math.random() * 100 + '%';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 20 + 10 + 'px';

    // Agregar el copo de nieve al contenedor
    document.getElementById('snowflakeContainer').appendChild(snowflake);

    // Velocidad variable para cada copo de nieve
    let speed = Math.random() * 3 + 2; // Velocidad entre 2 y 5

    // Animación para que el copo de nieve caiga
    let yPos = 0;
    const interval = setInterval(() => {
        yPos += speed; // Velocidad de caída
        snowflake.style.top = yPos + 'px';

        if (yPos > window.innerHeight) {
            clearInterval(interval);
            snowflake.remove();
        }
    }, 30);

    // Eliminar el copo de nieve después de un tiempo
    setTimeout(() => {
        clearInterval(interval);
        snowflake.remove();
    }, 7000); // Tiempo extendido para permitir que los copos más lentos lleguen al suelo
}

setInterval(createSnowflake, 200); // Disminuir la frecuencia de generación de copos



// Función para crear estrellas
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.textContent = '*';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.fontSize = Math.random() * 20 + 10 + 'px';

    document.getElementById('starContainer').appendChild(star);

    // Eliminar la estrella después de un tiempo
    setTimeout(() => {
        star.remove();
    }, 5000);
}

// Función para crear cometas
function createComet() {
    const comet = document.createElement('div');
    comet.classList.add('comet');
    comet.textContent = '*';
    comet.style.left = '0';
    comet.style.top = Math.random() * 100 + 'vh';
    comet.style.fontSize = '20px';

    document.getElementById('cometContainer').appendChild(comet);

    // Eliminar el cometa después de un tiempo
    setTimeout(() => {
        comet.remove();
    }, 7000);
}

// Crear estrellas y cometas en intervalos
setInterval(createStar, 3000);
setInterval(createComet, 20000); // Un cometa cada 20 segundos

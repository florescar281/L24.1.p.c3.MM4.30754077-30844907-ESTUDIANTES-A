let salida = document.getElementById("salida");

let Estudiantes = [
    {nombre: "Maria", semestre: 3, nota: 13},
    {nombre: "Jose", semestre: 2, nota: 12},
    {nombre: "Pedro", semestre: 1, nota: 15},
    {nombre: "Luis", semestre: 8, nota: 18},
    {nombre: "Ana", semestre: 5, nota: 14},
    {nombre: "Luisa", semestre: 6, nota: 16}
]

let estudiantesSemestre = (estudiantes, semestre) => {
    let estudiantesSemestre = estudiantes.filter(estudiante => estudiante.semestre == semestre)
    return estudiantesSemestre
}

salida.innerHTML = `
    Los estudiantes del semestre 3 son: ${JSON.stringify(estudiantesSemestre(Estudiantes, 3))} <br>
    Los estudiantes del semestre 2 son: ${JSON.stringify(estudiantesSemestre(Estudiantes, 2))} <br>
    Los estudiantes del semestre 1 son: ${JSON.stringify(estudiantesSemestre(Estudiantes, 1))} <br>
    Los estudiantes del semestre 8 son: ${JSON.stringify(estudiantesSemestre(Estudiantes, 8))} <br>
    Los estudiantes del semestre 5 son: ${JSON.stringify(estudiantesSemestre(Estudiantes, 5))} <br>
`
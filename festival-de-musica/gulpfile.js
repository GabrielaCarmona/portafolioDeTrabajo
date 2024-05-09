const {src, dest, watch, parallel} = require("gulp");

//CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require('gulp-plumber'); 
const autoprefixer = require('autoprefixer'); 
const cssnano = require('cssnano'); 
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

//Imágenes
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

//JavaScript
const terser = require("gulp-terser-js");

//Tareas
function css(done) {

    src('src/scss/**/*.scss') //Identifica el archivo SASS
    .pipe(sourcemaps.init()) //Inicia la creación del mapa
    .pipe(plumber())
    .pipe(sass()) //Compila
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.')) //Escribe el mapa
    .pipe(dest('build/css')); //Almacena en el HD 

    done(); //Callback que avisa a gulp cuando llegamos al final de la función
}

function imagenes(done) {

    const opciones = {
        optimizationLevel: 3
    };

    src('src/img/**/*.{jpg,png}') //Identifica los archivos con las extenciones agrupadas en los corchetes
    .pipe(cache(imagemin(opciones))) //Comprime las imágenes
    .pipe(dest('build/img')); //Guarda las imágenes en la carpeta de destino

    done();
}

function versionWebp(done) {

    const opciones = {
        quality: 50
    };

    src('src/img/**/*.{jpg,png}') //Busca todos los archivos con las extenciones agrupadas en los corchetes
        .pipe(webp(opciones)) //Convierte los archivos con las calidad que definimos
        .pipe(dest('build/img')); //Guarda las imagenes convertidas a webp en su nueva ubicación

    done();
}

function versionAvif(done) {

    const opciones = {
        quality: 50
    };

    src('src/img/**/*.{jpg,png}') //Busca todos los archivos con las extenciones agrupadas en los corchetes
        .pipe(avif(opciones)) //Convierte los archivos con las calidad que definimos
        .pipe(dest('build/img')); //Guarda las imagenes convertidas a avif en su nueva ubicación

    done();
}

function javascript(done) {
    src('src/js/**/*.js') //Busca todos los archivos con la extención .js
    .pipe(sourcemaps.init()) //Inicia la creación del mapa
    .pipe(terser())
    .pipe(sourcemaps.write('.')) //Escribe el mapa
    .pipe(dest('build/js')); //Guarda los archivos encontrados en su nueva ubicación

    done();
}

function dev(done) {
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', javascript);

    done();
}

exports.css = css;
exports.js = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes, versionWebp, versionAvif, javascript, dev);
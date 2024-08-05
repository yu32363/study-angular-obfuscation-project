# Essentials

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# study-angular-starting-project

ขั้นตอนการ Obfuscate Angular
Reference: (https://www.npmjs.com/package/gulp-uglify?activeTab=readme)

ติดตั้ง lib gulp-uglify ด้วยคำสั่งนี้
`npm install --save-dev gulp gulp-uglify`

ติดตั้ง lib ที่ต้องใช้เพิ่มเติมดังนี้
`npm install --save-dev gulp-concat`
`npm install --save-dev pump`

สร้างไฟล์ชื่อ gulpfile.js ที่ root ของ project (นอก src) แล้วใส่ code ดังนี้

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const pump = require('pump');

gulp.task('uglify', function (cb) {
pump([
gulp.src('dist/**/*.js'),
concat('app.min.js'),
uglify(),
gulp.dest('dist')
],
cb);
});

รันคำสั่ง build ตามปกติ
`ng build`

ใช้คำสั่งต่อไปนี้เพื่อทำการ obfuscation
`npx gulp uglify //หาก install แบบ local`
`gulp uglify //หาก install แบบ global`

ผล obfuscation ที่ได้จะอยู่ในโฟลเดอร์ dist/essentials ไฟล์ชื่อ app.min.js
# study-angular-obfuscation-project

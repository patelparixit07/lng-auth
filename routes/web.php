<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Allow any endpoint to pass through to the Angular app except when it begins with /api
// To route through angular router
Route::any('/{any}', 'AngularController@index')->where('any', '^(?!api).*$');

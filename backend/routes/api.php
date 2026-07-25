<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PortfolioController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\Admin\ProjectController;
use App\Http\Controllers\Api\Admin\CertificationController;
use App\Http\Controllers\Api\Admin\AnalyticsSnapshotController;
use App\Http\Controllers\Api\Admin\ContactMessageController;
use App\Http\Controllers\Api\Admin\ProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Public Routes
Route::post('/login', [AuthController::class, 'login']);
Route::get('/portfolio-data', [PortfolioController::class, 'index']);
Route::post('/contact', [ContactController::class, 'store']);

// Protected Admin Routes
Route::middleware('auth:sanctum')->prefix('admin')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [ProfileController::class, 'show']);
    Route::put('/profile', [ProfileController::class, 'update']);

    Route::apiResource('projects', ProjectController::class);
    Route::apiResource('certifications', CertificationController::class);
    Route::apiResource('analytics', AnalyticsSnapshotController::class);
    Route::apiResource('messages', ContactMessageController::class)->only(['index', 'show', 'update', 'destroy']);
});
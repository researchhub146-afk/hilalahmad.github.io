<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnalyticsSnapshot extends Model
{
    /** @use HasFactory<\Database\Factories\AnalyticsSnapshotFactory> */
    use HasFactory;

    protected $fillable = [
        'metric_name',
        'metric_value',
        'icon',
        'category'
    ];
}

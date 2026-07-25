<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    /** @use HasFactory<\Database\Factories\ProjectFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'category',
        'tech_stack',
        'live_url',
        'repo_url',
        'image_path',
        'order'
    ];

    protected $casts = [
        'tech_stack' => 'array',
    ];
}

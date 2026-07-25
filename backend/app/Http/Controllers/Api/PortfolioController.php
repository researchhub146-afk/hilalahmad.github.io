<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function index()
    {
        $user = \App\Models\User::first(['name', 'email', 'bio', 'social_links']);
        $projects = \App\Models\Project::orderBy('order')->get();
        $certifications = \App\Models\Certification::orderBy('issue_date', 'desc')->get();
        $analytics = \App\Models\AnalyticsSnapshot::all();

        $projects = $projects->map(function ($project) {
            $project->image_url = $project->image_path ? url('storage/' . $project->image_path) : null;
            return $project;
        });

        return response()->json([
            'user' => $user,
            'projects' => $projects,
            'certifications' => $certifications,
            'analytics' => $analytics
        ]);
    }
}

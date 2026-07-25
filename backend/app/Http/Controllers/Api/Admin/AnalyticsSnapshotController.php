<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AnalyticsSnapshotController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return \App\Models\AnalyticsSnapshot::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'metric_name' => 'required|string|max:255',
            'metric_value' => 'required|string|max:255',
            'icon' => 'nullable|string|max:255',
            'category' => 'nullable|string|max:255',
        ]);

        $snapshot = \App\Models\AnalyticsSnapshot::create($validated);
        return response()->json($snapshot, 201);
    }

    public function show(\App\Models\AnalyticsSnapshot $analytics)
    {
        return $analytics;
    }

    public function update(Request $request, \App\Models\AnalyticsSnapshot $analytics)
    {
        $validated = $request->validate([
            'metric_name' => 'string|max:255',
            'metric_value' => 'string|max:255',
            'icon' => 'nullable|string|max:255',
            'category' => 'nullable|string|max:255',
        ]);

        $analytics->update($validated);
        return response()->json($analytics);
    }

    public function destroy(\App\Models\AnalyticsSnapshot $analytics)
    {
        $analytics->delete();
        return response()->json(null, 204);
    }
}
